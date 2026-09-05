import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Section from "@/components/Section";
import AudioPlayer from "@/components/AudioPlayer";
import { getAllTitik, getTitik, type Titik } from "@/lib/content";

export function generateStaticParams() {
  return getAllTitik().map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const titik = getTitik(slug);
  if (!titik) return { title: "Titik not found" };
  return {
    title: titik.name,
    description: `${titik.name} — ${titik.meaning || "a traditional titik of Tagunggu'"}.`,
  };
}

function TitikContent({ titik, language }: { titik: Titik; language: "en" | "ms" }) {
  return (
    <div className={`lang-${language}`}>
      <Link href="/titik" className="text-sm text-[var(--color-ocean-deep)] hover:underline">
        {language === "ms" ? "← Semua titik" : "← All titik"}
      </Link>

      <div className="mt-4 flex flex-wrap items-baseline gap-3">
        <span className="font-[family-name:var(--font-display)] text-4xl font-700 text-[var(--color-ocean)]">
          {String(titik.order).padStart(2, "0")}
        </span>
        <h1 className="text-4xl font-700 text-[var(--color-ink)]">{titik.name}</h1>
      </div>
      {titik.meaning && <p className="mt-2 text-lg text-[var(--color-ink-soft)]">{titik.meaning}</p>}

      <div className="mt-6 flex flex-wrap gap-3">
        {titik.tempo && (
          <span className="rounded-full border-2 border-[var(--color-border)] px-4 py-1 text-sm">
            {language === "ms" ? "Tempo" : "Tempo"}: <strong>{titik.tempo}</strong>
          </span>
        )}
        {titik.difficulty && (
          <span className="rounded-full border-2 border-[var(--color-border)] px-4 py-1 text-sm">
            {language === "ms" ? "Tahap" : "Difficulty"}: <strong>{titik.difficulty}</strong>
          </span>
        )}
      </div>

      <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_320px]">
        <article className="prose-titik" dangerouslySetInnerHTML={{ __html: titik.html }} />
        <aside className="space-y-6">
          {titik.rhythmCode && (
            <div className="card-hard p-5">
              <p className="mb-2 text-sm font-600">
                {language === "ms" ? "Kod rentak" : "Rhythm code"}
              </p>
              <p className="font-mono text-lg tracking-widest text-[var(--color-brass)]">
                {titik.rhythmCode}
              </p>
              <p className="mt-2 text-xs text-[var(--color-ink-faint)]">
                {language === "ms"
                  ? "Notasi berdasarkan kajian Cikgu Rosley—diperhalusi bersama Sulimbag Jawtee."
                  : "Notation based on Cikgu Rosley’s research—refined with Sulimbag Jawtee."}
              </p>
            </div>
          )}
          {titik.audio && <AudioPlayer src={titik.audio} label={titik.name} />}
        </aside>
      </div>
    </div>
  );
}

export default async function TitikPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const titik = getTitik(slug);
  const malayTitik = getTitik(slug, "ms");
  if (!titik || !malayTitik) notFound();

  return (
    <Section>
      <TitikContent titik={titik} language="en" />
      <TitikContent titik={malayTitik} language="ms" />
    </Section>
  );
}
