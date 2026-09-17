type SectionProps = {
  eyebrow?: React.ReactNode;
  title?: React.ReactNode;
  intro?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
};

/** Standard page section wrapper with optional eyebrow / title / intro header. */
export default function Section({ eyebrow, title, intro, children, className }: SectionProps) {
  return (
    <section className={`mx-auto max-w-6xl px-5 py-12 ${className ?? ""}`}>
      {(eyebrow || title || intro) && (
        <header className="mb-8 max-w-2xl">
          {eyebrow && (
            <p className="mb-2 text-sm font-600 uppercase tracking-wide text-[var(--color-brass)]">
              {eyebrow}
            </p>
          )}
          {title && (
            <h2 className="text-3xl font-700 text-[var(--color-ink)] sm:text-4xl">{title}</h2>
          )}
          {intro && <p className="mt-3 text-[var(--color-ink-soft)]">{intro}</p>}
        </header>
      )}
      {children}
    </section>
  );
}
