import Link from "next/link";
import Section from "@/components/Section";
import TitikCard from "@/components/TitikCard";
import PartnerCard from "@/components/PartnerCard";
import { getAllTitik, getJson, type Partner } from "@/lib/content";
import { SITE } from "@/lib/constants";

export default function HomePage() {
  const titik = getAllTitik();
  const partners = getJson<Partner>("partners.json");

  return (
    <>
      {/* HERO */}
      <section className="border-b-2 border-[var(--color-border)] bg-gradient-to-b from-[var(--color-bg)] to-[var(--color-surface)]">
        <div className="mx-auto max-w-6xl px-5 py-20 text-center sm:py-28">
          <p className="mb-3 text-sm font-600 uppercase tracking-widest text-[var(--color-brass)]">
            {SITE.tagline}
          </p>
          <h1 className="mx-auto max-w-3xl text-4xl font-700 leading-tight text-[var(--color-ink)] sm:text-6xl">
            Preserving the rhythms of{" "}
            <span className="text-[var(--color-ocean)]">Tagungguk</span>
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-[var(--color-ink-soft)]">
            {SITE.description}
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link href="/titik" className="btn-pill btn-pill-filled">
              Explore the five titik
            </Link>
            <Link href="/history" className="btn-pill btn-pill-outline">
              Learn the history
            </Link>
          </div>
        </div>
      </section>

      {/* WHAT IS TAGUNGGUK */}
      <Section eyebrow="What is it?" title="The music of the Bajau">
        <p className="prose-titik">
          Tagungguk is the traditional kulintangan ensemble music of the Bajau people of Semporna,
          Sabah. Its rhythms — the <em>titik</em> — carry generations of cultural memory. TitikLab
          is an open, educational platform documenting these rhythms so students, researchers, and
          the public can learn them and keep them alive.
        </p>
      </Section>

      {/* THE FIVE TITIK */}
      <Section
        eyebrow="The rhythms"
        title="The five traditional titik"
        intro="Each titik is a distinct rhythmic pattern. Tap a card to learn its history, hear it, and read its rhythm code."
      >
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {titik.map((t) => (
            <TitikCard key={t.slug} titik={t} />
          ))}
        </div>
      </Section>

      {/* PARTNERS */}
      {partners.length > 0 && (
        <Section eyebrow="Community" title="Our partners">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {partners.map((p) => (
              <PartnerCard key={p.name} partner={p} />
            ))}
          </div>
        </Section>
      )}

      {/* CONTRIBUTE CTA */}
      <Section>
        <div className="card-hard bg-[var(--color-ocean)] p-10 text-center text-white">
          <h2 className="text-2xl font-700 text-white sm:text-3xl">Help build TitikLab</h2>
          <p className="mx-auto mt-3 max-w-xl text-white/90">
            Whether you code, research, photograph, or play — there&apos;s a way to contribute. No
            technical experience needed for content.
          </p>
          <a
            href={SITE.github}
            className="btn-pill mt-6 border-white bg-white text-[var(--color-ocean-deep)]"
          >
            Contribute on GitHub →
          </a>
        </div>
      </Section>
    </>
  );
}
