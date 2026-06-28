import Link from "next/link";
import { NAV_LINKS, SITE } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="mt-24 border-t-2 border-[var(--color-border)] bg-[var(--color-surface)]">
      <div className="mx-auto grid max-w-6xl gap-8 px-5 py-12 sm:grid-cols-2 md:grid-cols-3">
        <div>
          <p className="font-[family-name:var(--font-display)] text-lg font-700">{SITE.name}</p>
          <p className="mt-2 max-w-xs text-sm text-[var(--color-ink-soft)]">{SITE.description}</p>
        </div>
        <div>
          <p className="text-sm font-600">Explore</p>
          <ul className="mt-3 space-y-2">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-[var(--color-ink-soft)] hover:text-[var(--color-ocean-deep)]"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-sm font-600">Project</p>
          <ul className="mt-3 space-y-2 text-sm text-[var(--color-ink-soft)]">
            <li>
              <a href={SITE.github} className="hover:text-[var(--color-ocean-deep)]">
                Contribute on GitHub
              </a>
            </li>
            <li>
              <a href={SITE.community.url} className="hover:text-[var(--color-ocean-deep)]">
                Supported by {SITE.community.name}
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-[var(--color-border-subtle)] px-5 py-4 text-center text-xs text-[var(--color-ink-faint)]">
        Built in public for the public · Cultural content © the Bajau community of Semporna, Sabah
      </div>
    </footer>
  );
}
