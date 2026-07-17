import { ImageResponse } from 'next/og';

export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';
export const alt = 'Carat Amor Jewels — Lab-Grown Diamond Jewellery, Hyderabad';

// Branded OG: burgundy field, gold wordmark. (Uses the default serif; swap in
// a piece photo per-route via generateMetadata where a stronger image exists.)
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #3E1425 0%, #5E1F38 55%, #120A0E 100%)',
          fontFamily: 'serif',
        }}
      >
        <div style={{ display: 'flex', letterSpacing: 24, color: '#D6A94F', fontSize: 92, fontWeight: 500 }}>
          CARAT
        </div>
        <div style={{ display: 'flex', letterSpacing: 24, color: '#D6A94F', fontSize: 92, fontWeight: 500, marginTop: 8 }}>
          AMOR
        </div>
        <div
          style={{
            marginTop: 40,
            color: '#E8CB8B',
            fontSize: 26,
            letterSpacing: 8,
            textTransform: 'uppercase',
            fontFamily: 'sans-serif',
          }}
        >
          Lab-Grown Diamonds · Hyderabad
        </div>
      </div>
    ),
    { ...size },
  );
}
