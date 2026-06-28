import Link from "next/link";
import type { Titik } from "@/lib/content";

export default function TitikCard({ titik }: { titik: Titik }) {
  return (
    <Link
      href={`/titik/${titik.slug}`}
      className="card-hard block p-6 no-underline"
    >
      <div className="flex items-center justify-between">
        <span className="font-[family-name:var(--font-display)] text-3xl font-700 text-[var(--color-ocean)]">
          {String(titik.order).padStart(2, "0")}
        </span>
        {titik.difficulty && (
          <span className="rounded-full border border-[var(--color-border-subtle)] px-3 py-1 text-xs text-[var(--color-ink-faint)]">
            {titik.difficulty}
          </span>
        )}
      </div>
      <h3 className="mt-3 text-xl font-700 text-[var(--color-ink)]">{titik.name}</h3>
      {titik.meaning && (
        <p className="mt-1 text-sm text-[var(--color-ink-soft)]">{titik.meaning}</p>
      )}
      {titik.rhythmCode && (
        <p className="mt-4 font-mono text-sm tracking-widest text-[var(--color-brass)]">
          {titik.rhythmCode}
        </p>
      )}
    </Link>
  );
}
