import type { Metadata } from "next";
import Section from "@/components/Section";
import TitikCard from "@/components/TitikCard";
import { getAllTitik } from "@/lib/content";

export const metadata: Metadata = {
  title: "The Five Titik",
  description:
    "Explore five core titik of Tagungguk—Tabawan, Tarirai, Limbayan, Lellang and Luvak-luvak—with Senai-senai documented as an additional rhythm.",
};

export default function TitikIndexPage() {
  const titik = getAllTitik();
  const malayTitik = getAllTitik("ms");
  const coreTitik = titik.filter((item) => !item.additional);
  const additionalTitik = titik.filter((item) => item.additional);
  const coreMalayTitik = malayTitik.filter((item) => !item.additional);
  const additionalMalayTitik = malayTitik.filter((item) => item.additional);

  return (
    <Section
      eyebrow={<><span className="lang-en">The rhythms</span><span className="lang-ms">Rentak</span></>}
      title={<><span className="lang-en">The five core titik</span><span className="lang-ms">Lima titik utama</span></>}
      intro={<><span className="lang-en">Tabawan, Tarirai, Limbayan, Lellang and Luvak-luvak—each has a distinct rhythmic and cultural character in the Tagungguk repertoire.</span><span className="lang-ms">Tabawan, Tarirai, Limbayan, Lellang dan Luvak-luvak—setiap satunya mempunyai ciri rentak dan budaya yang tersendiri dalam repertoir Tagungguk.</span></>}
    >
      <div className="lang-en grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {coreTitik.map((item) => (
          <TitikCard key={item.slug} titik={item} />
        ))}
      </div>
      <div className="lang-ms grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {coreMalayTitik.map((item) => (
          <TitikCard key={item.slug} titik={item} />
        ))}
      </div>

      {additionalTitik.length > 0 && (
        <div className="lang-en mt-14 border-t-2 border-[var(--color-border)] pt-10">
          <p className="text-sm font-700 uppercase tracking-[0.18em] text-[var(--color-brass)]">
            Additional rhythm
          </p>
          <p className="mt-3 max-w-2xl text-[var(--color-ink-soft)]">
            Senai-senai is documented separately as additional material from the interview.
          </p>
          <div className="mt-7 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {additionalTitik.map((item) => (
              <TitikCard key={item.slug} titik={item} />
            ))}
          </div>
        </div>
      )}
      {additionalMalayTitik.length > 0 && (
        <div className="lang-ms mt-14 border-t-2 border-[var(--color-border)] pt-10">
          <p className="text-sm font-700 uppercase tracking-[0.18em] text-[var(--color-brass)]">
            Rentak tambahan
          </p>
          <p className="mt-3 max-w-2xl text-[var(--color-ink-soft)]">
            Senai-senai didokumentasikan secara berasingan sebagai bahan tambahan daripada temu bual.
          </p>
          <div className="mt-7 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {additionalMalayTitik.map((item) => (
              <TitikCard key={item.slug} titik={item} />
            ))}
          </div>
        </div>
      )}
    </Section>
  );
}
