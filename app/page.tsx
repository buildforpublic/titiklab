import Link from "next/link";
import TitikCard from "@/components/TitikCard";
import { getAllTitik, getJson, type Person } from "@/lib/content";
import { SITE } from "@/lib/constants";

export default function HomePage() {
  const titik = getAllTitik();
  const people = getJson<Person>("people.json");

  return (
    <div className="px-4 py-8 sm:px-6">
      <div className="paper-shell mx-auto max-w-6xl">
        <section className="hero-photo min-h-[360px] border-b border-[var(--color-border)] px-6 py-16 text-white sm:px-10 lg:min-h-[420px] lg:px-14">
          <div className="max-w-xl">
            <p className="text-lg font-600 text-white/90">Selamat Datang ke</p>
            <h1 className="mt-1 text-5xl font-700 leading-none text-white sm:text-7xl">
              {SITE.name}
            </h1>
            <p className="mt-2 font-[family-name:var(--font-display)] text-xl font-600 text-white/90">
              {SITE.tagline}
            </p>
            <p className="mt-5 max-w-md text-sm leading-7 text-white/82 sm:text-base">
              Memelihara warisan. Menginspirasi generasi melalui pembelajaran digital Tagunggu'.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/titik" className="btn-pill btn-pill-filled">
                Mulakan Pembelajaran
              </Link>
              <Link href="/gallery" className="btn-pill btn-pill-outline">
                Lihat Galeri
              </Link>
            </div>
          </div>
        </section>

        <section className="heritage-intro grid items-center gap-8 border-b border-[var(--color-border-subtle)] px-6 py-10 sm:px-10 md:grid-cols-[220px_1fr] lg:px-14">
          <div className="mx-auto max-w-[220px]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/media/gallery/titiklab-main-logo.png"
              alt="Ilustrasi pemuzik Bajau memainkan gong"
              className="heritage-logo w-full"
            />
          </div>
          <div>
            <p className="eyebrow">Tentang TitikLab</p>
            <h2 className="mt-2 text-3xl font-700 text-[var(--color-ocean-deep)] sm:text-4xl">
              Warisan muzik, dipelajari bersama
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-[var(--color-ink-soft)] sm:text-base">
              TitikLab ialah platform pembelajaran komuniti untuk memelihara dan memperkenalkan
              Tagunggu', muzik kulintangan tradisional Bajau dari Semporna, Sabah. Di sini,
              pelajar dan orang ramai boleh mengenali sejarah, alat muzik dan lima titik melalui
              bahan digital yang mudah diterokai.
            </p>
            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              <div className="fact-card">
                <strong>5 titik</strong>
                <span>Irama tradisional untuk diterokai</span>
              </div>
              <div className="fact-card">
                <strong>Audio & visual</strong>
                <span>Pembelajaran melalui rakaman dan galeri</span>
              </div>
              <div className="fact-card">
                <strong>Milik komuniti</strong>
                <span>Dibina secara terbuka bersama rakan budaya</span>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white px-6 py-11 text-center sm:px-10">
          <p className="section-rule mx-auto max-w-2xl text-xl font-700 text-[var(--color-ocean-deep)]">
            Meneroka Irama Tagunggu'
          </p>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-[var(--color-ink-soft)]">
            Tagunggu' ialah muzik tradisional Bajau yang dimainkan menggunakan kulintangan.
            Terokai lima titik utama dan pelajari irama warisan nenek moyang kita.
          </p>
          <div className="mt-9 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {titik.map((t) => (
              <TitikCard key={t.slug} titik={t} />
            ))}
          </div>
        </section>

        <section className="border-t border-[var(--color-border-subtle)] bg-[var(--color-paper)] px-6 py-12 sm:px-10">
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow">Warga TitikLab</p>
            <h2 className="mt-2 font-[family-name:var(--font-display)] text-3xl font-700 text-[var(--color-ocean-deep)]">
              Individu dan komuniti di sebalik projek
            </h2>
          </div>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {people.map((person) => (
              <article key={person.name} className="card-hard p-5">
                {person.image ? (
                  <div className={person.imageVariant === "logo"
                    ? "mb-4 flex h-24 items-center justify-center overflow-hidden rounded-xl bg-white p-4"
                    : "mb-4 h-24 w-24 overflow-hidden rounded-full bg-[var(--color-sand)] ring-2 ring-[var(--color-border-subtle)]"}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={person.image}
                      alt={person.name}
                      className={person.imageVariant === "logo"
                        ? "h-full w-full object-contain"
                        : "h-full w-full object-cover object-[50%_26%]"}
                    />
                  </div>
                ) : (
                  <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[var(--color-ocean-deep)] font-700 text-[var(--color-brass)]">
                    {person.initials}
                  </div>
                )}
                <h3 className="font-700 text-[var(--color-ink)]">{person.name}</h3>
                <p className="mt-2 whitespace-pre-line text-sm leading-6 text-[var(--color-ink-soft)]">
                  {person.roleMs}
                </p>
              </article>
            ))}
          </div>
          <div className="mt-7 text-center">
            <Link href="/about" className="btn-pill btn-pill-outline">
              Kenali Warga TitikLab
            </Link>
          </div>
        </section>

        <section className="flex flex-col gap-5 bg-[var(--color-ocean-deep)] px-6 py-6 text-white sm:flex-row sm:items-center sm:justify-between sm:px-10">
          <p className="max-w-xl font-[family-name:var(--font-display)] text-lg italic">
            Irama kita, identiti kita. Warisan hari ini, untuk esok yang bermakna.
          </p>
          <a href={SITE.github} className="btn-pill border-white bg-white text-[var(--color-ocean-deep)]">
            Sertai Projek
          </a>
        </section>
      </div>
    </div>
  );
}
