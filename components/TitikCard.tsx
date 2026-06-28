import Link from "next/link";
import type { Titik } from "@/lib/content";

export default function TitikCard({ titik }: { titik: Titik }) {
  const icon = titik.order % 5;

  return (
    <Link
      href={`/titik/${titik.slug}`}
      className="group flex flex-col items-center text-center no-underline"
    >
      <div className="grid h-20 w-20 place-items-center rounded-full bg-[var(--color-ocean-deep)] text-white shadow-[0_8px_20px_rgba(11,53,70,0.18)] transition-transform group-hover:-translate-y-1">
        <svg aria-hidden="true" viewBox="0 0 48 48" className="h-11 w-11" fill="none">
          {icon === 1 && (
            <>
              <path d="M10 28c4-6 8-6 12 0s8 6 12 0 8-6 12 0" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
              <path d="M10 20c4-6 8-6 12 0s8 6 12 0 8-6 12 0" stroke="currentColor" strokeWidth="3" strokeLinecap="round" opacity=".65" />
            </>
          )}
          {icon === 2 && (
            <>
              <path d="M8 24h32" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
              <path d="M12 17h24M12 31h24" stroke="currentColor" strokeWidth="3" strokeLinecap="round" opacity=".65" />
            </>
          )}
          {icon === 3 && (
            <>
              <circle cx="24" cy="24" r="15" stroke="currentColor" strokeWidth="3" />
              <circle cx="24" cy="24" r="8" stroke="currentColor" strokeWidth="3" opacity=".7" />
              <circle cx="24" cy="24" r="2" fill="currentColor" />
            </>
          )}
          {icon === 4 && (
            <>
              <circle cx="24" cy="24" r="5" stroke="currentColor" strokeWidth="3" />
              <path d="M24 6v8M24 34v8M6 24h8M34 24h8M11 11l6 6M31 31l6 6M37 11l-6 6M17 31l-6 6" stroke="currentColor" strokeWidth="3" strokeLinecap="round" opacity=".75" />
            </>
          )}
          {icon === 0 && (
            <>
              <circle cx="24" cy="24" r="15" stroke="currentColor" strokeWidth="3" />
              {[12, 18, 24, 30, 36].map((x, index) => (
                <circle key={x} cx={x} cy={index % 2 === 0 ? 20 : 29} r="2.8" fill="currentColor" />
              ))}
            </>
          )}
        </svg>
      </div>
      <h3 className="mt-4 font-[family-name:var(--font-display)] text-lg font-700 text-[var(--color-ink)]">
        {titik.name}
      </h3>
      {titik.meaning && (
        <p className="mt-2 max-w-32 text-xs leading-5 text-[var(--color-ink-soft)]">
          {titik.meaning.replace(/^TODO\s*—\s*/i, "")}
        </p>
      )}
    </Link>
  );
}
