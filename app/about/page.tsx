import type { Metadata } from "next";
import Section from "@/components/Section";
import { getJson, type Person } from "@/lib/content";

export const metadata: Metadata = {
  title: "About",
  description: "About TitikLab and its community partners.",
};

export default function AboutPage() {
  const people = getJson<Person>("people.json");

  return (
    <Section
        eyebrow={<><span className="lang-en">The people</span><span className="lang-ms">Warga TitikLab</span></>}
        title={<><span className="lang-en">Meet the People</span><span className="lang-ms">Kenali Individu di Sebalik TitikLab</span></>}
        intro={<><span className="lang-en">The people and community contributing knowledge, research, musical practice and technical support to TitikLab.</span><span className="lang-ms">Individu dan komuniti yang menyumbangkan pengetahuan, kajian, amalan muzik serta sokongan teknikal kepada TitikLab.</span></>}
      >
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {people.map((person) => (
            <article key={person.name} className="card-hard p-6">
              {person.image ? (
                <div className="mb-5 flex h-36 w-36 items-center justify-center overflow-hidden rounded-full bg-[radial-gradient(circle_at_50%_35%,#f6e1bc_0%,#ead0a4_44%,#7b201d_100%)] ring-4 ring-[var(--color-border-subtle)]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={person.image}
                    alt={person.name}
                    className={person.imageVariant === "logo"
                      ? "h-full w-full bg-white object-contain p-4"
                      : "h-full w-full object-cover object-[50%_26%]"}
                  />
                </div>
              ) : (
                <div className="mb-5 flex h-36 w-36 items-center justify-center rounded-full bg-[var(--color-ocean-deep)] text-2xl font-bold text-[var(--color-brass)] ring-4 ring-[var(--color-border-subtle)]">
                  {person.initials}
                </div>
              )}
              <h3 className="text-xl font-bold text-[var(--color-ink)]">{person.name}</h3>
              <p className="lang-en mt-2 whitespace-pre-line text-sm leading-6 text-[var(--color-ink-soft)]">{person.role}</p>
              <p className="lang-ms mt-2 whitespace-pre-line text-sm leading-6 text-[var(--color-ink-soft)]">{person.roleMs}</p>
              {person.email && (
                <a
                  href={`mailto:${person.email}`}
                  className="mt-3 inline-block text-sm font-semibold text-[var(--color-ocean-deep)] underline decoration-[var(--color-brass)] underline-offset-4"
                >
                  {person.email}
                </a>
              )}
              {person.website && (
                <a
                  href={person.website}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-3 inline-block break-all text-sm font-semibold text-[var(--color-ocean-deep)] underline decoration-[var(--color-brass)] underline-offset-4"
                >
                  {person.website}
                </a>
              )}
            </article>
          ))}
        </div>
      </Section>
  );
}
