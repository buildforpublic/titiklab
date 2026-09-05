import Link from "next/link";
import { NAV_LINKS, SITE } from "@/lib/constants";

export default function Navbar() {
  return (
    <header className="site-header sticky top-0 z-50 border-b border-[var(--color-border-subtle)] backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3">
        <Link href="/" className="flex items-center gap-3">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/media/gallery/titiklab-main-logo.png"
            alt="TitikLab — pemuzik Bajau memainkan gong"
            className="brand-logo h-16 w-16 object-contain"
          />
          <span className="leading-tight">
            <span className="block font-[family-name:var(--font-display)] text-xl font-700 text-[var(--color-ink)]">
              {SITE.name}
            </span>
            <span className="hidden text-[0.67rem] font-600 text-[var(--color-ink-soft)] sm:block">
              {SITE.tagline}
            </span>
          </span>
        </Link>
        <ul className="hidden items-center gap-7 md:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-[0.72rem] font-700 uppercase text-[var(--color-ink-soft)] transition-colors hover:text-[var(--color-ocean-deep)]"
              >
                <span className="lang-en">{link.label}</span>
                <span className="lang-ms">
                  {{ History: "Sejarah", "The Five Titik": "Lima Titik", Instruments: "Instrumen", Gallery: "Galeri", Resources: "Sumber", About: "Tentang" }[link.label] ?? link.label}
                </span>
              </Link>
            </li>
          ))}
        </ul>
        <details className="md:hidden">
          <summary className="cursor-pointer list-none text-xs font-700 uppercase">Menu</summary>
          <ul className="absolute right-5 mt-3 flex flex-col gap-3 border border-[var(--color-border-subtle)] bg-white p-4 shadow-lg">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-sm font-600">
                  <span className="lang-en">{link.label}</span>
                  <span className="lang-ms">
                    {{ History: "Sejarah", "The Five Titik": "Lima Titik", Instruments: "Instrumen", Gallery: "Galeri", Resources: "Sumber", About: "Tentang" }[link.label] ?? link.label}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </details>
      </nav>
    </header>
  );
}
