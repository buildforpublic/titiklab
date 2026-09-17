import type { Metadata } from "next";
import Section from "@/components/Section";
import MediaGallery from "@/components/MediaGallery";
import { getJson, type GalleryItem } from "@/lib/content";

export const metadata: Metadata = {
  title: "Gallery",
  description: "Photos and videos of Tagunggu' demonstrations and workshops.",
};

export default function GalleryPage() {
  const items = getJson<GalleryItem>("gallery.json");

  return (
    <Section
      eyebrow={<><span className="lang-en">Gallery</span><span className="lang-ms">Galeri</span></>}
      title={<><span className="lang-en">Schools and communities reached</span><span className="lang-ms">Sekolah dan komuniti yang dicapai</span></>}
      intro={<><span className="lang-en">Documentation of schools, demonstrations, and communities reached through the TitikLab project.</span><span className="lang-ms">Dokumentasi sekolah, demonstrasi dan komuniti yang dicapai melalui projek TitikLab.</span></>}
    >
      <MediaGallery items={items} />
    </Section>
  );
}
