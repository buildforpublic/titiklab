# TitikLab

**Pendigitalan Irama Kulintangan Bajau** — an open, educational platform preserving and
promoting **Tagungguk**, the traditional Bajau kulintangan music of Semporna, Sabah.

🌐 Live (soon): `titiklab.buildforpublic.com` · A [Build for Public](https://buildforpublic.com) project

---

## The vision

TitikLab makes Bajau musical heritage accessible to students and the public through a simple
educational website where users can:

1. **Learn the history** and cultural significance of Tagungguk.
2. **Explore the five traditional titik** — Tabawan, Tarirai, Limbayan, Lellang, and Senai-senai.
3. **Learn the instruments** used in a Tagungguk ensemble.
4. **View photos and videos** of demonstrations.
5. **Listen** to the rhythm of each titik.
6. **Download educational resources** such as a learning pamphlet.
7. **Read about the project** and its community partners.

The project is in early development. We're working with **Cikgu Rosley** (academic research on
the traditional rhythm codes) and **Sulimbag Jawtee** (a traditional music group from Semporna,
Sabah, who verify the musical content and run community demonstrations).

---

## Contribute in two ways

**You do not need to be a programmer to help.** See [CONTRIBUTING.md](./CONTRIBUTING.md) for the
full guide.

- **🎵 Content (no code):** Add the history, fill in a titik's details, add photos, link videos,
  or correct information — all by editing simple files on GitHub's website. Start here:
  [content map](#content-map).
- **💻 Code:** Improve the website itself (design, features, translations). Quick start below.

Browse [good first issues](https://github.com/buildforpublic/titiklab/issues) to find something
to pick up at the meetup.

---

## Content map

All the educational content lives in the [`content/`](./content) folder — these are the files
to edit:

| What you want to add/change | File to edit |
| --- | --- |
| A titik's history, rhythm, tips | `content/titik/<name>.md` (e.g. `tabawan.md`) |
| The history & cultural background | `content/history.md` |
| Instruments of the ensemble | `content/instruments.json` |
| Photos & videos | `content/gallery.json` + drop images in `public/media/gallery/` |
| Community partners | `content/partners.json` |
| Audio recordings | drop `.mp3` files into `public/media/audio/` |
| The downloadable pamphlet | drop `pamphlet.pdf` into `public/media/resources/` |

> `content/titik/tabawan.md` is a **filled-in template** — copy its structure when completing the
> other four titik. All content currently marked "placeholder" or "TODO" needs to be verified
> with our community partners.

---

## Quick start (developers)

Requires [Bun](https://bun.sh) (or npm).

```bash
bun install
bun dev          # http://localhost:3000
bun run build    # production build
```

### Tech stack

Next.js 15 (App Router) · React 19 · TypeScript · Tailwind CSS v4 · deployed on Vercel.
No database — content is files in `content/`, rendered at build time. Matches the
Build for Public project conventions.

### Project structure

```
app/          Next.js routes (one folder per page)
components/    Reusable UI (Navbar, TitikCard, AudioPlayer, ...)
content/       ← all editable educational content (markdown + JSON)
lib/           content loaders (content.ts) and site config (constants.ts)
public/media/  audio, gallery images, downloadable resources
```

### Design tokens

Defined in `app/globals.css` (`@theme`) — the source of truth for the palette:

- `--color-ocean` `#0e7c86` (the Bajau sea) · `--color-brass` `#c8922b` (kulintangan gongs)
- `--color-coral` `#e8554e` (textile accent) · `--color-bg` `#fbf6ec` (warm sand)
- Fonts: Fraunces (display) + Plus Jakarta Sans (body)

---

## License

- **Code:** [GNU AGPL-3.0](./LICENSE) (matching the Build for Public org).
- **Cultural content & media** (text, photos, recordings) is shared under
  **Creative Commons BY-NC-SA 4.0** with attribution to the Bajau community of Semporna and the
  project's partners. Please credit Cikgu Rosley and Sulimbag Jawtee when reusing material, and
  respect the community's wishes regarding their cultural heritage.

---

## Credits

Built in public for the public by the TitikLab community, in partnership with **Cikgu Rosley**
and **Sulimbag Jawtee** (Semporna, Sabah), as part of [Build for Public](https://buildforpublic.com).
