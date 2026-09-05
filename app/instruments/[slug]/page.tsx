import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Section from "@/components/Section";
import {
  getAllInstruments,
  getInstrument,
  type Instrument,
} from "@/lib/content";

function italicizeTerms(text: string, terms: string[] = []) {
  if (terms.length === 0) return text;
  const escaped = terms.map((term) => term.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"));
  const matcher = new RegExp(`(${escaped.join("|")})`, "gi");
  return text.split(matcher).map((part, index) =>
    terms.some((term) => term.toLowerCase() === part.toLowerCase()) ? (
      <em key={`${part}-${index}`}>{part}</em>
    ) : (
      part
    ),
  );
}

export function generateStaticParams() {
  return getAllInstruments().map((instrument) => ({ slug: instrument.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const instrument = getInstrument(slug);
  if (!instrument) return { title: "Instrument not found" };
  return {
    title: instrument.name,
    description: instrument.description,
  };
}

function InstrumentContent({
  instrument,
  language,
}: {
  instrument: Instrument;
  language: "en" | "ms";
}) {
  return (
    <div className={`lang-${language}`}>
      <Link href="/instruments" className="text-sm text-[var(--color-ocean-deep)] hover:underline">
        {language === "ms" ? "← Semua instrumen" : "← All instruments"}
      </Link>

      <div className="mt-7 grid items-start gap-10 lg:grid-cols-[18rem_1fr]">
        <aside className="card-hard overflow-hidden p-5">
          {instrument.image && (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={instrument.image}
              alt={instrument.name}
              className="aspect-square w-full rounded-full border border-[var(--color-border)] bg-[var(--color-sand)] object-contain p-5"
            />
          )}
          <p className="mt-5 text-xs font-700 uppercase tracking-[0.14em] text-[var(--color-brass)]">
            {instrument.role}
          </p>
        </aside>

        <article>
          <h1 className="font-[family-name:var(--font-display)] text-4xl font-700 text-[var(--color-ink)]">
            {instrument.name}
          </h1>
          {instrument.malayName && instrument.malayName !== instrument.name && (
            <p className="mt-1 italic text-[var(--color-ink-faint)]">{instrument.malayName}</p>
          )}
          <p className="mt-5 text-lg leading-8 text-[var(--color-ink-soft)]">
            {instrument.description}
          </p>

          <div className="mt-8 space-y-4">
            {instrument.researchNotes?.map((note) => (
              <p key={note} className="rounded-xl border border-[var(--color-border)] bg-white/55 p-4 leading-7 text-[var(--color-ink-soft)]">
                {italicizeTerms(note, instrument.italicTerms)}{" "}
                <span className="text-xs italic text-[var(--color-ink-faint)]">
                  {language === "ms" ? "(Kajian Cikgu Rosley)" : "(Cikgu Rosley’s research)"}
                </span>
              </p>
            ))}
            {instrument.interviewNotes?.map((note) => (
              <p key={note} className="rounded-xl border border-[var(--color-border)] bg-white/55 p-4 leading-7 text-[var(--color-ink-soft)]">
                {italicizeTerms(note, instrument.italicTerms)}{" "}
                <span className="text-xs italic text-[var(--color-ink-faint)]">
                  {language === "ms" ? "(Pengasas TitikLab)" : "(TitikLab founder)"}
                </span>
              </p>
            ))}
          </div>
        </article>
      </div>
    </div>
  );
}

export default async function InstrumentPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const instrument = getInstrument(slug);
  const malayInstrument = getInstrument(slug, "ms");
  if (!instrument || !malayInstrument) notFound();

  return (
    <Section>
      <InstrumentContent instrument={instrument} language="en" />
      <InstrumentContent instrument={malayInstrument} language="ms" />
    </Section>
  );
}
