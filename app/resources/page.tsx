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
      <div className="grid gap-6 sm:grid-cols-2">
        {resources.map((r) => (
          <article key={r.title} className="card-hard flex flex-col p-6">
            <h3 className="text-lg font-700 text-[var(--color-ink)]"><span className="lang-en">{r.title}</span><span className="lang-ms">{r.titleMs}</span></h3>
            <p className="mt-2 flex-1 text-sm text-[var(--color-ink-soft)]"><span className="lang-en">{r.description}</span><span className="lang-ms">{r.descriptionMs}</span></p>
            <a href={r.href} className="btn-pill btn-pill-maroon mt-5 self-start" download>
              <span className="lang-en">{r.cta}</span><span className="lang-ms">{r.ctaMs}</span>
            </a>
          </article>
        ))}
      </div>
    </Section>
  );
}
