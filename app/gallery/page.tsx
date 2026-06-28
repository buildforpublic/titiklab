import type { Metadata } from "next";
import Section from "@/components/Section";
import MediaGallery from "@/components/MediaGallery";
import { getJson, type GalleryItem } from "@/lib/content";

export const metadata: Metadata = {
  title: "Gallery",
  description: "Photos and videos of Tagungguk demonstrations and workshops.",
};

export default function GalleryPage() {
  const items = getJson<GalleryItem>("gallery.json");

  return (
    <Section
      eyebrow="See & hear"
      title="Photos & videos"
      intro="Demonstrations and workshops by Sulimbag Jawtee and the wider Bajau community."
    >
      <MediaGallery items={items} />
    </Section>
  );
}
