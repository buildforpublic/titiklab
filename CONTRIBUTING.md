# Contributing to TitikLab

Terima kasih! 🙏 TitikLab is a community project — everyone is welcome, whether you write code or
not. There are **two ways to contribute**.

---

## 🎵 Track A — Contribute content (no coding needed)

This is for adding history, titik details, photos, videos, or corrections. You only need a free
GitHub account.

### Edit text directly on GitHub

1. Find the file you want to change (see the **content map** in the [README](./README.md#content-map)).
   For example, to fill in the *Tarirai* rhythm, open `content/titik/tarirai.md`.
2. Click the **pencil ✏️ icon** (top-right of the file) to edit it in your browser.
3. Make your changes. The files are plain text:
   - The part between the `---` lines at the top holds short facts (name, tempo, audio file…).
   - Everything below is the description — write it like a normal document.
4. Scroll down, write a short note about what you changed, and click **Propose changes**.
5. Click **Create pull request**. A maintainer will review and merge it. That's it!

> Use `content/titik/tabawan.md` as your example — it shows exactly what a finished titik looks like.

### Add a photo or video

- **Photo:** upload your image into `public/media/gallery/`, then add an entry to
  `content/gallery.json` with the file path and a caption.
- **Video:** just add an entry to `content/gallery.json` with `"type": "youtube"` and the video
  link — no upload needed.

### Add an audio recording

Upload an `.mp3` into `public/media/audio/` named after the titik (e.g. `tarirai.mp3`). It will
appear automatically on that titik's page.

> Not sure how? **Open an issue** using the *Content contribution* template and describe what you
> have — a maintainer will help you get it in.

---

## 💻 Track B — Contribute code

For improving the website itself.

### Setup

Requires [Bun](https://bun.sh) (or use npm).

```bash
git clone git@github.com:buildforpublic/titiklab.git
cd titiklab
bun install
bun dev      # http://localhost:3000
```

### Workflow

1. Create a branch: `git checkout -b your-feature`.
2. Make your change. Keep it focused.
3. Run `bun run build` to confirm it compiles.
4. Commit, push, and open a pull request describing what and why.

### Conventions

- **Pages** live in `app/<route>/page.tsx`. **Components** in `components/`.
- Content is read through helpers in `lib/content.ts` — don't hardcode content in components.
- Styling uses Tailwind v4 utility classes + the design tokens in `app/globals.css`. Reuse the
  `.btn-pill`, `.card-hard`, and `.prose-titik` classes.
- Keep dependencies minimal — this is a static content site.

---

## Cultural respect

Tagungguk is living cultural heritage. Please verify musical and historical details with our
community partners (Cikgu Rosley, Sulimbag Jawtee) before presenting them as fact, credit sources,
and be respectful in how the material is used. When in doubt, open an issue and ask.

## Questions?

Open an issue, or reach out via [Build for Public](https://buildforpublic.com). See you at the
meetup! 🎶
