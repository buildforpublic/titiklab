import type { Metadata } from "next";
import Section from "@/components/Section";
import { getJson } from "@/lib/content";

export const metadata: Metadata = {
  title: "Resources",
  description: "Downloadable educational resources for learning Tagunggu'.",
};

type Resource = {
  title: string;
  titleMs: string;
  description: string;
  descriptionMs: string;
  href: string;
  cta: string;
  ctaMs: string;
};

export default function ResourcesPage() {
  const resources = getJson<Resource>("resources.json");
  return (
    <Section
      eyebrow={<><span className="lang-en">Learn &amp; teach</span><span className="lang-ms">Belajar &amp; mengajar</span></>}
      title={<><span className="lang-en">Educational resources</span><span className="lang-ms">Sumber pendidikan</span></>}
      intro={<><span className="lang-en">Free materials for students, teachers, and anyone learning Tagunggu&apos;.</span><span className="lang-ms">Bahan percuma untuk pelajar, guru dan sesiapa sahaja yang mempelajari Tagunggu&apos;.</span></>}
    >
      <div className="resource-library">
        {resources.map((r) => (
          <article key={r.title} className="resource-book-card">
            <a href={r.href} className="resource-book" aria-label={`Open ${r.title}`} target="_blank" rel="noreferrer">
              <span className="resource-book__pages" aria-hidden="true" />
              <span className="resource-book__cover">
                <span className="resource-book__kicker">TitikLab</span>
                <span className="resource-book__ornament" aria-hidden="true">✦</span>
                <strong><span className="lang-en">Tagunggu&apos;<br />Learning Pamphlet</span><span className="lang-ms">Risalah Pembelajaran<br />Tagunggu&apos;</span></strong>
                <span className="resource-book__edition"><span className="lang-en">Digital edition · PDF</span><span className="lang-ms">Edisi digital · PDF</span></span>
              </span>
            </a>
            <div className="resource-book-copy">
              <p className="eyebrow"><span className="lang-en">Featured resource</span><span className="lang-ms">Sumber pilihan</span></p>
              <h3><span className="lang-en">{r.title}</span><span className="lang-ms">{r.titleMs}</span></h3>
              <p><span className="lang-en">{r.description}</span><span className="lang-ms">{r.descriptionMs}</span></p>
              <a href={r.href} className="btn-pill btn-pill-maroon mt-5 self-start" download>
                <span className="lang-en">{r.cta}</span><span className="lang-ms">{r.ctaMs}</span>
              </a>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
