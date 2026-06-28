import type { MetadataRoute } from "next";
import { getAllTitik } from "@/lib/content";
import { SITE } from "@/lib/constants";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/history", "/titik", "/instruments", "/gallery", "/resources", "/about"];
  const staticPages = routes.map((route) => ({
    url: `${SITE.url}${route}`,
    changeFrequency: "monthly" as const,
    priority: route === "" ? 1 : 0.7,
  }));

  const titikPages = getAllTitik().map((t) => ({
    url: `${SITE.url}/titik/${t.slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticPages, ...titikPages];
}
