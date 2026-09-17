import Link from "next/link";
import type { Instrument } from "@/lib/content";

export default function InstrumentCard({
  instrument,
  language = "en",
}: {
  instrument: Instrument;
  language?: "en" | "ms";
}) {
  return (
    <article className="instrument-map__card card-hard">
      <Link href={`/instruments/${instrument.slug}`} className="instrument-map__summary no-underline">
        <span className="instrument-map__logo" aria-hidden={!instrument.image}>
          {instrument.image && (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={instrument.image} alt="" />
          )}
        </span>
        <span className="instrument-map__summary-copy">
          <strong>{instrument.name}</strong>
          <span>{instrument.role}</span>
          <small>{language === "ms" ? "Buka halaman instrumen" : "Open instrument page"}</small>
        </span>
        <span className="instrument-map__arrow" aria-hidden="true">→</span>
      </Link>
    </article>
  );
}
