import Link from "next/link";
import { NAV_LINKS, SITE } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="mt-24 border-t-2 border-[var(--color-border)] bg-[var(--color-surface)]">
      <div className="mx-auto grid max-w-6xl gap-8 px-5 py-12 sm:grid-cols-2 md:grid-cols-3">
        <div>
          <p className="font-[family-name:var(--font-display)] text-lg font-700">{SITE.name}</p>
          <p className="mt-2 max-w-xs text-sm text-[var(--color-ink-soft)]">
            <span className="lang-en">{SITE.description}</span>
            <span className="lang-ms">Platform pendidikan untuk memelihara dan mempromosikan Tagunggu'—muzik kulintangan tradisional Bajau dari Semporna, Sabah.</span>
          </p>
        </div>
        <div>
          <p className="text-sm font-600"><span className="lang-en">Explore</span><span className="lang-ms">Terokai</span></p>
          <ul className="mt-3 space-y-2">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-[var(--color-ink-soft)] hover:text-[var(--color-ocean-deep)]"
                >
                  <span className="lang-en">{link.label}</span>
                  <span className="lang-ms">
                    {{ History: "Sejarah", "The Five Titik": "Lima Titik", Instruments: "Instrumen", Gallery: "Galeri", Resources: "Sumber", About: "Tentang" }[link.label] ?? link.label}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-sm font-600"><span className="lang-en">Project</span><span className="lang-ms">Projek</span></p>
          <ul className="mt-3 space-y-2 text-sm text-[var(--color-ink-soft)]">
            <li>
              <a href={SITE.github} className="hover:text-[var(--color-ocean-deep)]">
                <span className="lang-en">Contribute on GitHub</span><span className="lang-ms">Sumbang melalui GitHub</span>
              </a>
            </li>
            <li>
              <a href={SITE.community.url} className="hover:text-[var(--color-ocean-deep)]">
                <span className="lang-en">Supported by {SITE.community.name}</span><span className="lang-ms">Disokong oleh {SITE.community.name}</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-[var(--color-border-subtle)] px-5 py-4 text-center text-xs text-[var(--color-ink-faint)]">
        <span className="lang-en">Built in public for the public · Cultural content © the Bajau community of Semporna, Sabah</span>
        <span className="lang-ms">Dibina secara terbuka untuk masyarakat · Kandungan budaya © komuniti Bajau Semporna, Sabah</span>
      </div>
    </footer>
  );
}
