import { CONTACT } from '@/content/site';

/**
 * Certification display helpers. Until the owner names the certifying body
 * (IGI / GIA / SGL…), the UI degrades to elegant generic wording — a
 * placeholder string must never print on the live site.
 */
export function certBody(): string | null {
  const v = CONTACT.certificationBody as string;
  return v && !v.includes('TODO') ? v : null;
}

/** e.g. "IGI Certified" | "Certified Diamonds" */
export function certBadgeLabel(): string {
  const body = certBody();
  return body ? `${body} Certified` : 'Certified Diamonds';
}

/** Piece spec-table value, e.g. "IGI Certified" | "Certificate included" */
export function certSpecValue(): string {
  const body = certBody();
  return body ? `${body} Certified` : 'Certificate included';
}

/** Sentence fragment: "certified by IGI" | "independently certified" */
export function certPhrase(): string {
  const body = certBody();
  return body ? `certified by ${body}` : 'independently certified';
}
