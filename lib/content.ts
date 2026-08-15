import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { marked } from "marked";

const CONTENT_DIR = path.join(process.cwd(), "content");

export type Titik = {
  slug: string;
  name: string;
  order: number;
  meaning: string;
  tempo: string;
  difficulty: string;
  audio: string;
  rhythmCode: string;
  additional: boolean;
  /** Rendered HTML of the markdown body. */
  html: string;
  /** Raw markdown body (before rendering). */
  body: string;
};

export type Instrument = {
  name: string;
  malayName?: string;
  role: string;
  description: string;
  image?: string;
};

export type GalleryItem = {
  type: "image" | "youtube";
  src: string;
  caption: string;
  credit?: string;
};

export type Partner = {
  name: string;
  role: string;
  description: string;
  link?: string;
  logo?: string;
};

/** Read a single titik markdown file by slug. Returns null if it does not exist. */
export function getTitik(slug: string, locale: "en" | "ms" = "en"): Titik | null {
  const suffix = locale === "ms" ? ".ms" : "";
  const filePath = path.join(CONTENT_DIR, "titik", `${slug}${suffix}.md`);
  if (!fs.existsSync(filePath)) return null;
  const raw = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(raw);
  return {
    slug: (data.slug as string) ?? slug,
    name: (data.name as string) ?? slug,
    order: (data.order as number) ?? 999,
    meaning: (data.meaning as string) ?? "",
    tempo: (data.tempo as string) ?? "",
    difficulty: (data.difficulty as string) ?? "",
    audio: (data.audio as string) ?? "",
    rhythmCode: (data.rhythmCode as string) ?? "",
    additional: (data.additional as boolean) ?? false,
    html: marked.parse(content, { async: false }) as string,
    body: content.trim(),
  };
}

/** All titik, sorted by their `order` frontmatter field. */
export function getAllTitik(locale: "en" | "ms" = "en"): Titik[] {
  const dir = path.join(CONTENT_DIR, "titik");
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith(".md") && !f.endsWith(".ms.md"))
    .map((f) => getTitik(f.replace(/\.md$/, ""), locale))
    .filter((t): t is Titik => t !== null)
    .sort((a, b) => a.order - b.order);
}

/** Render an arbitrary markdown file under content/ to HTML (e.g. history.md). */
export function getMarkdown(fileName: string): { html: string; body: string } {
  const filePath = path.join(CONTENT_DIR, fileName);
  if (!fs.existsSync(filePath)) return { html: "", body: "" };
  const raw = fs.readFileSync(filePath, "utf8");
  const { content } = matter(raw);
  return {
    html: marked.parse(content, { async: false }) as string,
    body: content.trim(),
  };
}

/** Read a JSON data file under content/ (instruments.json, gallery.json, partners.json). */
export function getJson<T>(fileName: string): T[] {
  const filePath = path.join(CONTENT_DIR, fileName);
  if (!fs.existsSync(filePath)) return [];
  return JSON.parse(fs.readFileSync(filePath, "utf8")) as T[];
}
