import type { Metadata } from "next";
import Section from "@/components/Section";

export const metadata: Metadata = {
  title: "Resources",
  description: "Downloadable educational resources for learning Tagunggu'.",
};

const RESOURCES = [
  {
    title: "Tagunggu' Learning Pamphlet",
    titleMs: "Risalah Pembelajaran Tagunggu'",
    description:
      "An introductory pamphlet covering the history, the five titik, and the instruments. (Placeholder — the real pamphlet is in progress.)",
    descriptionMs:
      "Risalah pengenalan yang merangkumi sejarah, lima titik dan instrumen. (Ruang sementara — risalah sebenar sedang disiapkan.)",
    href: "/media/resources/pamphlet.pdf",
    cta: "Download PDF",
    ctaMs: "Muat Turun PDF",
  },
];

export default function ResourcesPage() {
  return (
    <Section
      eyebrow={<><span className="lang-en">Learn &amp; teach</span><span className="lang-ms">Belajar &amp; mengajar</span></>}
      title={<><span className="lang-en">Educational resources</span><span className="lang-ms">Sumber pendidikan</span></>}
      intro={<><span className="lang-en">Free materials for students, teachers, and anyone learning Tagunggu&apos;.</span><span className="lang-ms">Bahan percuma untuk pelajar, guru dan sesiapa sahaja yang mempelajari Tagunggu&apos;.</span></>}
    >
      <div className="grid gap-6 sm:grid-cols-2">
        {RESOURCES.map((r) => (
          <article key={r.title} className="card-hard flex flex-col p-6">
            <h3 className="text-lg font-700 text-[var(--color-ink)]"><span className="lang-en">{r.title}</span><span className="lang-ms">{r.titleMs}</span></h3>
            <p className="mt-2 flex-1 text-sm text-[var(--color-ink-soft)]"><span className="lang-en">{r.description}</span><span className="lang-ms">{r.descriptionMs}</span></p>
            <a href={r.href} className="btn-pill btn-pill-outline mt-5 self-start" download>
              <span className="lang-en">{r.cta}</span><span className="lang-ms">{r.ctaMs}</span>
            </a>
          </article>
        ))}
      </div>
    </Section>
  );
}
