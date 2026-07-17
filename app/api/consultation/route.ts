import { NextResponse } from 'next/server';
import { sendEnquiry, type EnquiryPayload } from '@/lib/sendEnquiry';

export async function POST(request: Request) {
  let body: Partial<EnquiryPayload>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: 'Invalid request.' }, { status: 400 });
  }

  const name = (body.name ?? '').trim();
  const phone = (body.phone ?? '').trim();

  // Minimal server-side validation.
  if (name.length < 2) {
    return NextResponse.json({ ok: false, error: 'Please provide your name.' }, { status: 422 });
  }
  const digits = phone.replace(/\D/g, '');
  if (digits.length < 8) {
    return NextResponse.json({ ok: false, error: 'Please provide a valid phone number.' }, { status: 422 });
  }

  const payload: EnquiryPayload = {
    name,
    phone,
    date: (body.date ?? '').trim() || undefined,
    time: (body.time ?? '').trim() || undefined,
    interest: (body.interest ?? '').trim() || undefined,
    message: (body.message ?? '').trim() || undefined,
  };

  const result = await sendEnquiry(payload);
  if (!result.ok) {
    return NextResponse.json({ ok: false, error: 'Something went wrong. Please try WhatsApp.' }, { status: 500 });
  }

  return NextResponse.json({ ok: true, delivered: result.delivered });
}
