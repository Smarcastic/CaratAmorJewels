/**
 * Provider-agnostic enquiry dispatch. This is a STUB — wire it to your
 * transactional email provider (Resend, SMTP, etc.) by filling in the marked
 * block and adding the relevant key to your environment.
 *
 *   Resend example:
 *     const { Resend } = await import('resend');
 *     const resend = new Resend(process.env.RESEND_API_KEY);
 *     await resend.emails.send({ from, to, subject, html });
 */
export interface EnquiryPayload {
  name: string;
  phone: string;
  date?: string;
  time?: string;
  interest?: string;
  message?: string;
}

export async function sendEnquiry(payload: EnquiryPayload): Promise<{ ok: boolean; delivered: boolean }> {
  // [TODO] Add a provider key to enable real delivery.
  const configured = Boolean(process.env.RESEND_API_KEY || process.env.SMTP_URL);

  if (!configured) {
    // No provider configured yet — log server-side so the enquiry is never lost
    // during setup, and report delivered:false so the UI can offer WhatsApp.
    console.info('[consultation] enquiry received (no email provider configured):', payload);
    return { ok: true, delivered: false };
  }

  try {
    // ------------------------------------------------------------------
    // [TODO] Replace this block with your provider's send call.
    //   e.g. Resend / Nodemailer transport using EMAIL from content/site.ts
    // ------------------------------------------------------------------
    console.info('[consultation] enquiry (provider configured, implement send):', payload);
    return { ok: true, delivered: true };
  } catch (err) {
    console.error('[consultation] send failed:', err);
    return { ok: false, delivered: false };
  }
}
