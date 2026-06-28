import type { Instrument } from "@/lib/content";

export default function InstrumentCard({ instrument }: { instrument: Instrument }) {
  return (
    <article className="card-hard overflow-hidden">
      {instrument.image && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={instrument.image}
          alt={instrument.name}
          className="h-56 w-full border-b-2 border-[var(--color-border)] bg-[#f7f5ef] object-contain p-3"
        />
      )}
      <div className="p-5">
        <h3 className="text-lg font-700 text-[var(--color-ink)]">{instrument.name}</h3>
        {instrument.malayName && (
          <p className="text-sm italic text-[var(--color-ink-faint)]">{instrument.malayName}</p>
        )}
        <p className="mt-1 text-xs font-600 uppercase tracking-wide text-[var(--color-brass)]">
          {instrument.role}
        </p>
        <p className="mt-3 text-sm text-[var(--color-ink-soft)]">{instrument.description}</p>
      </div>
    </article>
  );
}
