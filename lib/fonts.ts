import { Marcellus, Cormorant_Garamond, Hanken_Grotesk } from 'next/font/google';

// Display — headlines, piece names, eyebrows. Marcellus' Trajan-like caps
// match the logo's letterforms exactly; elegant at large sizes.
export const marcellus = Marcellus({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-display',
  display: 'swap',
  fallback: ['Georgia', 'Times New Roman', 'serif'],
});

// Accent italic — reserved for emotional one-liners only.
export const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500'],
  style: ['italic'],
  variable: '--font-accent',
  display: 'swap',
  fallback: ['Georgia', 'serif'],
});

// Body + UI.
export const hanken = Hanken_Grotesk({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-body',
  display: 'swap',
  fallback: ['system-ui', 'Segoe UI', 'Helvetica Neue', 'Arial', 'sans-serif'],
});
