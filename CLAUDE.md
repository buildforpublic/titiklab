# TitikLab — guidance for AI coding agents

TitikLab is an educational website preserving **Tagunggu'**, traditional Bajau kulintangan music
from Semporna, Sabah. It is community-owned and built in public with support from the
[Build for Public](https://buildforpublic.com) volunteer community (which supports, but does not
own, the project or its cultural content).

## Architecture

- **Next.js 15 App Router + React 19 + TypeScript + Tailwind v4.** No database, no auth.
- **Content is files, not code.** Educational content lives in `content/`:
  - `content/titik/<slug>.md` — markdown + frontmatter, one per titik
  - `content/history.md` — markdown
  - `content/instruments.json`, `gallery.json`, `partners.json` — structured data
- Content is read via helpers in `lib/content.ts` (`getAllTitik`, `getTitik`, `getMarkdown`,
  `getJson`). Pages are server components that call these at build time.
- Site config (name, nav, URLs) is in `lib/constants.ts`.
- Design tokens (`@theme`) and shared classes (`.btn-pill`, `.card-hard`, `.prose-titik`) are in
  `app/globals.css`.

## Conventions

- Never hardcode educational content in components — add it to `content/` so non-coders can edit it.
- Keep dependencies minimal; this is a static content site.
- Run `bun run build` to verify changes compile and all five titik pages render.

## Cultural sensitivity

This is living cultural heritage. **Do not invent musical or historical facts.** Content marked
"placeholder" / "TODO" must be filled by, or verified with, the community partners (Cikgu Rosley
and Sulimbag Jawtee). When generating example content, label it clearly as a placeholder.

## Contributors

Many contributors are non-technical (researchers, musicians). Optimize changes for the no-code
content workflow described in `CONTRIBUTING.md`.
