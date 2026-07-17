import { CONTACT, WHATSAPP_DEFAULT_TEXT } from '@/content/site';

/**
 * Build a wa.me link with URL-encoded, context-aware pre-filled text.
 * When the WhatsApp number is still a [TODO] placeholder the link falls
 * back to instagram so the CTA never dead-ends on a broken number.
 */
export function waLink(text: string = WHATSAPP_DEFAULT_TEXT): string {
  const number = CONTACT.whatsappNumber;
  const numberReady = /^\d{8,15}$/.test(number);
  if (!numberReady) {
    // Number not yet provided — degrade gracefully to the confirmed IG profile.
    return CONTACT.instagram;
  }
  return `https://wa.me/${number}?text=${encodeURIComponent(text)}`;
}

/** Pre-filled enquiry for a specific piece. */
export function waPieceText(name: string, collection: string): string {
  return `Hello Carat Amor, I'd love to know more about the ${name} (${collection}).`;
}
