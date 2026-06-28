import Link from "next/link";
import TitikCard from "@/components/TitikCard";
import PartnerCard from "@/components/PartnerCard";
import { getAllTitik, getJson, type Partner } from "@/lib/content";
import { SITE } from "@/lib/constants";

export default function HomePage() {
  const titik = getAllTitik();
  const partners = getJson<Partner>("partners.json");

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
              Memelihara warisan. Menginspirasi generasi melalui pembelajaran digital Tagungguk.
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

        <section className="bg-white px-6 py-11 text-center sm:px-10">
          <p className="section-rule mx-auto max-w-2xl text-xl font-700 text-[var(--color-ocean-deep)]">
            Meneroka Irama Tagungguk
          </p>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-[var(--color-ink-soft)]">
            Tagungguk ialah muzik tradisional Bajau yang dimainkan menggunakan kulintangan.
            Terokai lima titik utama dan pelajari irama warisan nenek moyang kita.
          </p>
          <div className="mt-9 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {titik.map((t) => (
              <TitikCard key={t.slug} titik={t} />
            ))}
          </div>
        </section>

        <section className="grid border-t border-[var(--color-border-subtle)] bg-[#f5f0e7] md:grid-cols-3">
          <Link
            href="/instruments"
            className="group min-h-48 border-b border-[var(--color-border-subtle)] bg-[linear-gradient(115deg,rgba(255,255,255,0.94),rgba(255,255,255,0.62)),url('/media/gallery/placeholder-kulintangan.svg')] bg-[length:cover] bg-center p-7 no-underline md:border-b-0 md:border-r"
          >
            <h2 className="font-[family-name:var(--font-display)] text-2xl font-700 text-[var(--color-ocean-deep)]">
              Kenali Kulintangan
            </h2>
            <p className="mt-3 max-w-xs text-sm leading-6 text-[var(--color-ink-soft)]">
              Alat muzik tradisional yang menjadi jiwa irama Tagungguk.
            </p>
            <span className="btn-pill btn-pill-filled mt-5">Ketahui Lebih Lanjut</span>
          </Link>
          <Link
            href="/resources"
            className="group min-h-48 border-b border-[var(--color-border-subtle)] bg-[linear-gradient(115deg,rgba(255,255,255,0.94),rgba(255,255,255,0.66))] p-7 no-underline md:border-b-0 md:border-r"
          >
            <h2 className="font-[family-name:var(--font-display)] text-2xl font-700 text-[var(--color-ocean-deep)]">
              Sumber Pembelajaran
            </h2>
            <p className="mt-3 max-w-xs text-sm leading-6 text-[var(--color-ink-soft)]">
              Akses nota, video dan bahan pendidikan untuk semua.
            </p>
            <span className="btn-pill btn-pill-filled mt-5">Terokai Sumber</span>
          </Link>
          <Link
            href="/gallery"
            className="group min-h-48 bg-[linear-gradient(115deg,rgba(255,255,255,0.94),rgba(255,255,255,0.62)),url('/media/gallery/placeholder-demo.svg')] bg-[length:cover] bg-center p-7 no-underline"
          >
            <h2 className="font-[family-name:var(--font-display)] text-2xl font-700 text-[var(--color-ocean-deep)]">
              Galeri & Video
            </h2>
            <p className="mt-3 max-w-xs text-sm leading-6 text-[var(--color-ink-soft)]">
              Lihat dokumentasi persembahan dan aktiviti komuniti.
            </p>
            <span className="btn-pill btn-pill-filled mt-5">Lihat Galeri</span>
          </Link>
        </section>

        {partners.length > 0 && (
          <section className="bg-white px-6 py-12 sm:px-10">
            <p className="mb-7 text-center font-[family-name:var(--font-display)] text-2xl font-700 text-[var(--color-ocean-deep)]">
              Rakan Komuniti
            </p>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {partners.map((p) => (
                <PartnerCard key={p.name} partner={p} />
              ))}
            </div>
          </section>
        )}

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
