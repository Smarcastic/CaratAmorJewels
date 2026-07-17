import { CONTACT } from '@/content/site';

/**
 * Consultation enquiry dispatch.
 *
 * Emails are sent to CONTACT.email (smaranreddyd@gmail.com) via Resend's
 * HTTP API — no SDK needed. To activate delivery, add RESEND_API_KEY to the
 * environment (Vercel → Project → Settings → Environment Variables); a free
 * key from https://resend.com works immediately with the onboarding sender.
 *
 * With no key configured, the enquiry is logged server-side and the UI
 * routes the client to WhatsApp with their details pre-filled — so no
 * enquiry is ever lost either way.
 */
export interface EnquiryPayload {
  name: string;
  phone: string;
  date?: string;
  time?: string;
  interest?: string;
  message?: string;
}

const TO_EMAIL = CONTACT.email;

function renderText(p: EnquiryPayload): string {
  return [
    'New consultation request — Carat Amor Jewels',
    '',
    `Name:      ${p.name}`,
    `Phone:     ${p.phone}`,
    p.date ? `Date:      ${p.date}` : null,
    p.time ? `Time:      ${p.time}` : null,
    p.interest ? `Interest:  ${p.interest}` : null,
    p.message ? `\nMessage:\n${p.message}` : null,
    '',
    `Reply on WhatsApp: https://wa.me/${p.phone.replace(/\D/g, '')}`,
  ]
    .filter((line): line is string => line !== null)
    .join('\n');
}

export async function sendEnquiry(payload: EnquiryPayload): Promise<{ ok: boolean; delivered: boolean }> {
  const key = process.env.RESEND_API_KEY;

  if (!key) {
    // No provider configured yet — log server-side so the enquiry is never
    // lost during setup; the UI offers the WhatsApp handoff.
    console.info('[consultation] enquiry received (no email provider configured):', payload);
    return { ok: true, delivered: false };
  }

  try {
    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${key}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        // Resend's onboarding sender works out of the box; switch to a
        // verified caratamorjewels.com sender once the domain is added there.
        from: 'Carat Amor Website <onboarding@resend.dev>',
        to: [TO_EMAIL],
        subject: `Consultation request — ${payload.name}`,
        text: renderText(payload),
      }),
    });

    if (!res.ok) {
      console.error('[consultation] resend error:', res.status, await res.text());
      return { ok: true, delivered: false };
    }
    return { ok: true, delivered: true };
  } catch (err) {
    console.error('[consultation] send failed:', err);
    return { ok: true, delivered: false };
  }
}
