import type { GalleryItem } from "@/lib/content";

function youtubeId(url: string): string {
  // Accepts a raw id, a watch URL, or a youtu.be URL.
  const match = url.match(/(?:v=|youtu\.be\/|embed\/)([\w-]{11})/);
  return match ? match[1] : url;
}

export default function MediaGallery({ items }: { items: GalleryItem[] }) {
  if (items.length === 0) {
    return (
      <p className="text-[var(--color-ink-soft)]">
        No media yet. Add photos and video links in <code>content/gallery.json</code>.
      </p>
    );
  }
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item, i) => (
        <figure key={i} className="card-hard overflow-hidden">
          {item.type === "youtube" ? (
            <div className="aspect-video">
              <iframe
                className="h-full w-full"
                src={`https://www.youtube.com/embed/${youtubeId(item.src)}`}
                title={item.caption}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          ) : (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={item.src}
              alt={item.caption}
              className="aspect-video w-full border-b-2 border-[var(--color-border)] object-cover"
            />
          )}
          <figcaption className="p-4 text-sm text-[var(--color-ink-soft)]">
            {item.caption}
            {item.credit && (
              <span className="mt-1 block text-xs text-[var(--color-ink-faint)]">
                📷 {item.credit}
              </span>
            )}
          </figcaption>
        </figure>
      ))}
    </div>
  );
}
