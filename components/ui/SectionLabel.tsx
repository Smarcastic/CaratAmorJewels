/** Small Marcellus section marker: "01 — The Maison". Gold on dark, always. */
export default function SectionLabel({
  number,
  label,
  className = '',
}: {
  number: string;
  label: string;
  className?: string;
}) {
  const hasNumber = number && number !== '—';
  return (
    <p className={`eyebrow text-champagne ${className}`}>
      {hasNumber && (
        <>
          {number} <span className="mx-2 opacity-50">—</span>{' '}
        </>
      )}
      {label}
    </p>
  );
}
