'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Cta from '@/components/ui/Cta';
import WhatsappGlyph from '@/components/ui/WhatsappGlyph';
import { COLLECTIONS } from '@/content/products';
import { waLink } from '@/lib/whatsapp';
import { EASE_MAISON } from '@/lib/motion';

const TIME_SLOTS = ['Morning', 'Afternoon', 'Evening'] as const;

interface FormState {
  name: string;
  phone: string;
  date: string;
  time: string;
  interest: string;
  message: string;
}

const empty: FormState = { name: '', phone: '', date: '', time: '', interest: '', message: '' };

export default function ConsultationForm() {
  const [form, setForm] = useState<FormState>(empty);
  const [errors, setErrors] = useState<Partial<FormState>>({});
  const [status, setStatus] = useState<'idle' | 'sending' | 'done'>('idle');
  const [delivered, setDelivered] = useState(true);

  const set = (k: keyof FormState, v: string) => {
    setForm((f) => ({ ...f, [k]: v }));
    if (errors[k]) setErrors((e) => ({ ...e, [k]: undefined }));
  };

  const validate = (): boolean => {
    const e: Partial<FormState> = {};
    if (form.name.trim().length < 2) e.name = 'Please tell us your name.';
    if (form.phone.replace(/\D/g, '').length < 8) e.phone = 'Please enter a valid phone number.';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const onSubmit = async (ev: React.FormEvent) => {
    ev.preventDefault();
    if (!validate()) return;
    setStatus('sending');
    try {
      const res = await fetch('/api/consultation', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok || !data.ok) throw new Error(data.error || 'failed');
      setDelivered(Boolean(data.delivered));
      setStatus('done');
    } catch {
      // Never dead-end — fall through to the WhatsApp fallback on the success card.
      setDelivered(false);
      setStatus('done');
    }
  };

  // Full booking summary — lands in WhatsApp ready to send.
  const waText = [
    `Hello Carat Amor, I'd like to book a private consultation.`,
    form.name ? `Name: ${form.name}` : null,
    form.phone ? `Phone: ${form.phone}` : null,
    form.date ? `Preferred date: ${form.date}` : null,
    form.time ? `Preferred time: ${form.time}` : null,
    form.interest ? `Interested in: ${form.interest}` : null,
    form.message ? `Note: ${form.message}` : null,
  ]
    .filter(Boolean)
    .join('\n');

  const today = new Date().toISOString().split('T')[0];

  const inputCls =
    'w-full rounded-[2px] border border-ink/20 bg-porcelain px-4 py-3 font-body text-md font-light text-ink outline-none transition-colors placeholder:text-ink/30 focus:border-champagne focus:ring-2 focus:ring-champagne/40';

  return (
    <div className="relative">
      {/* Simple conditional swap — success card animates in on mount.
          (No AnimatePresence exit: deterministic under React 19.) */}
      {status === 'done' ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: EASE_MAISON }}
            className="flex flex-col items-start"
          >
            <span aria-hidden className="mb-6 block h-10 w-px bg-champagne" />
            <h2 className="font-display text-4xl font-light text-ink md:text-5xl">
              We look forward to meeting you.
            </h2>
            <p className="mt-5 max-w-[46ch] font-body text-md font-light text-ink/70">
              Thank you, {form.name || 'friend'}. Your request has been noted
              {form.date ? ` for ${form.date}` : ''}
              {form.time ? `, ${form.time.toLowerCase()}` : ''}. Our team will be in touch shortly to confirm the details.
            </p>
            <p className="mt-4 max-w-[46ch] font-body text-sm font-light text-ink/50">
              {delivered
                ? 'For the fastest reply, you can also reach us directly on WhatsApp — your details are pre-filled.'
                : 'One more tap: send it to us on WhatsApp — your details are already pre-filled, and it reaches us instantly.'}
            </p>
            <div className="mt-8">
              <Cta href={waLink(waText)} external variant="solid">
                <WhatsappGlyph size={16} stroke="currentColor" /> Send on WhatsApp
              </Cta>
            </div>
          </motion.div>
        ) : (
          <form key="form" onSubmit={onSubmit} noValidate className="space-y-7">
            <div className="grid grid-cols-1 gap-7 sm:grid-cols-2">
              <Field label="Name" htmlFor="name" error={errors.name}>
                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  className={inputCls}
                  value={form.name}
                  onChange={(e) => set('name', e.target.value)}
                  aria-invalid={Boolean(errors.name)}
                  aria-describedby={errors.name ? 'name-err' : undefined}
                />
              </Field>
              <Field label="Phone" htmlFor="phone" error={errors.phone}>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  className={inputCls}
                  value={form.phone}
                  onChange={(e) => set('phone', e.target.value)}
                  aria-invalid={Boolean(errors.phone)}
                  aria-describedby={errors.phone ? 'phone-err' : undefined}
                />
              </Field>
            </div>

            <div className="grid grid-cols-1 gap-7 sm:grid-cols-2">
              <Field label="Preferred date" htmlFor="date">
                <input
                  id="date"
                  name="date"
                  type="date"
                  min={today}
                  className={inputCls}
                  value={form.date}
                  onChange={(e) => set('date', e.target.value)}
                />
              </Field>
              <fieldset>
                <legend className="mb-3 block font-body text-sm font-light text-ink/70">Preferred time</legend>
                <div className="flex gap-3">
                  {TIME_SLOTS.map((slot) => (
                    <label
                      key={slot}
                      className={`flex-1 cursor-pointer rounded-full border px-3 py-2.5 text-center font-display text-[0.62rem] uppercase tracking-[0.16em] transition-colors ${
                        form.time === slot
                          ? 'border-champagne bg-champagne/15 text-ink'
                          : 'border-ink/20 text-ink/60 hover:border-ink/40'
                      }`}
                    >
                      <input
                        type="radio"
                        name="time"
                        value={slot}
                        checked={form.time === slot}
                        onChange={(e) => set('time', e.target.value)}
                        className="sr-only"
                      />
                      {slot}
                    </label>
                  ))}
                </div>
              </fieldset>
            </div>

            <Field label="Interest" htmlFor="interest">
              <select
                id="interest"
                name="interest"
                className={inputCls}
                value={form.interest}
                onChange={(e) => set('interest', e.target.value)}
              >
                <option value="">Select a collection (optional)</option>
                {COLLECTIONS.map((c) => (
                  <option key={c.slug} value={c.name}>
                    {c.name}
                  </option>
                ))}
                <option value="A bespoke commission">A bespoke commission</option>
              </select>
            </Field>

            <Field label="Message" htmlFor="message" optional>
              <textarea
                id="message"
                name="message"
                rows={4}
                className={`${inputCls} resize-none`}
                value={form.message}
                onChange={(e) => set('message', e.target.value)}
                placeholder="Tell us what you have in mind…"
              />
            </Field>

            <div className="pt-2">
              <Cta type="submit" variant="solid" className="w-full sm:w-auto">
                {status === 'sending' ? 'Sending…' : 'Request Consultation'}
              </Cta>
            </div>
          </form>
        )}
    </div>
  );
}

function Field({
  label,
  htmlFor,
  children,
  error,
  optional,
}: {
  label: string;
  htmlFor: string;
  children: React.ReactNode;
  error?: string;
  optional?: boolean;
}) {
  return (
    <div>
      <label htmlFor={htmlFor} className="mb-3 block font-body text-sm font-light text-ink/70">
        {label} {optional && <span className="text-ink/35">(optional)</span>}
      </label>
      {children}
      {error && (
        <p id={`${htmlFor}-err`} className="mt-2 font-body text-xs font-light text-[#a03a3a]">
          {error}
        </p>
      )}
    </div>
  );
}
