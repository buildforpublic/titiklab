import Link from "next/link";
import { NAV_LINKS, SITE } from "@/lib/constants";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b-2 border-[var(--color-border)] bg-[var(--color-bg)]/95 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3">
        <Link href="/" className="flex items-baseline gap-2">
          <span className="font-[family-name:var(--font-display)] text-xl font-700 text-[var(--color-ink)]">
            {SITE.name}
          </span>
          <span className="hidden text-xs text-[var(--color-ink-faint)] sm:inline">
            {SITE.tagline}
          </span>
        </Link>
        <ul className="hidden items-center gap-6 md:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-sm font-500 text-[var(--color-ink-soft)] transition-colors hover:text-[var(--color-ocean-deep)]"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        {/* Mobile: simple link row. A polished menu is a good-first-issue. */}
        <details className="md:hidden">
          <summary className="cursor-pointer list-none text-sm font-600">Menu</summary>
          <ul className="absolute right-5 mt-2 flex flex-col gap-3 rounded-xl border-2 border-[var(--color-border)] bg-[var(--color-surface)] p-4 shadow-[4px_4px_0_var(--color-border)]">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-sm font-500">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </details>
      </nav>
    </header>
  );
}
