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
      eyebrow="Galeri"
      title="Sekolah dan komuniti yang dicapai"
      intro="Dokumentasi sekolah, demonstrasi, dan aktiviti komuniti yang berkaitan dengan projek TitikLab."
    >
      <MediaGallery items={items} />
    </Section>
  );
}
