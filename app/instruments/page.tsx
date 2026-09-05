import type { Metadata } from "next";
import Section from "@/components/Section";
import InstrumentCard from "@/components/InstrumentCard";
import { getJson, getMarkdown, type Instrument } from "@/lib/content";

export const metadata: Metadata = {
  title: "Instruments",
  description: "The musical instruments used in a Tagunggu' ensemble.",
};

export default function InstrumentsPage() {
  const instruments = getJson<Instrument>("instruments.json");
  const malayInstruments = getJson<Instrument>("instruments.ms.json");
  const { html: instrumentOverview } = getMarkdown("instruments-intro.md");
  const { html: malayInstrumentOverview } = getMarkdown("instruments-intro.ms.md");

  return (
    <Section
      eyebrow={<><span className="lang-en">The ensemble</span><span className="lang-ms">Ensembel</span></>}
      title={<><span className="lang-en">Instruments of a Tagunggu' ensemble</span><span className="lang-ms">Instrumen ensembel Tagunggu'</span></>}
      intro={<><span className="lang-en">A Tagunggu' ensemble brings together the kulintangan, agung, and tambul. Each instrument has its own role in the rhythm.</span><span className="lang-ms">Ensembel Tagunggu' menggabungkan kulintangan, agung dan tambul. Setiap instrumen mempunyai peranan tersendiri dalam rentak.</span></>}
    >
      <div className="instrument-map">
        <div className="instrument-map__content">
      <article
        className="instrument-map__overview prose-titik lang-en max-w-none"
        dangerouslySetInnerHTML={{ __html: instrumentOverview }}
      />
      <article
        className="instrument-map__overview prose-titik lang-ms max-w-none"
        dangerouslySetInnerHTML={{ __html: malayInstrumentOverview }}
      />
      <div className="instrument-map__hub">
        <span className="lang-en">Traditional ensemble</span>
        <span className="lang-ms">Ensembel tradisional</span>
        <strong>Tagunggu’</strong>
        <small>Semporna, Sabah</small>
      </div>
      {instruments.length === 0 ? (
        <p className="text-[var(--color-ink-soft)]">
          No instruments documented yet. Add them in <code>content/instruments.json</code>.
        </p>
      ) : (
        <>
        <div className="instrument-map__branches lang-en">
          {instruments.map((inst) => (
            <InstrumentCard key={inst.name} instrument={inst} language="en" />
          ))}
        </div>
        <div className="instrument-map__branches lang-ms">
          {malayInstruments.map((inst) => (
            <InstrumentCard key={inst.name} instrument={inst} language="ms" />
          ))}
        </div>
        </>
      )}
        </div>
      </div>
    </Section>
  );
}
