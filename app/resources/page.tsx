import type { Metadata } from "next";
import Section from "@/components/Section";

export const metadata: Metadata = {
  title: "Resources",
  description: "Downloadable educational resources for learning Tagungguk.",
};

const RESOURCES = [
  {
    title: "Tagungguk Learning Pamphlet",
    description:
      "An introductory pamphlet covering the history, the five titik, and the instruments. (Placeholder — the real pamphlet is in progress.)",
    href: "/media/resources/pamphlet.pdf",
    cta: "Download PDF",
  },
];

export default function ResourcesPage() {
  return (
    <Section
      eyebrow="Learn & teach"
      title="Educational resources"
      intro="Free materials for students, teachers, and anyone learning Tagungguk."
    >
      <div className="grid gap-6 sm:grid-cols-2">
        {RESOURCES.map((r) => (
          <article key={r.title} className="card-hard flex flex-col p-6">
            <h3 className="text-lg font-700 text-[var(--color-ink)]">{r.title}</h3>
            <p className="mt-2 flex-1 text-sm text-[var(--color-ink-soft)]">{r.description}</p>
            <a href={r.href} className="btn-pill btn-pill-outline mt-5 self-start" download>
              {r.cta}
            </a>
          </article>
        ))}
      </div>
    </Section>
  );
}
