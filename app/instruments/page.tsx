import type { Metadata } from "next";
import Section from "@/components/Section";
import InstrumentCard from "@/components/InstrumentCard";
import { getJson, type Instrument } from "@/lib/content";

export const metadata: Metadata = {
  title: "Instruments",
  description: "The musical instruments used in a Tagungguk ensemble.",
};

export default function InstrumentsPage() {
  const instruments = getJson<Instrument>("instruments.json");
  const malayInstruments = getJson<Instrument>("instruments.ms.json");

  return (
    <Section
      eyebrow={<><span className="lang-en">The ensemble</span><span className="lang-ms">Ensembel</span></>}
      title={<><span className="lang-en">Instruments of a Tagungguk ensemble</span><span className="lang-ms">Instrumen ensembel Tagungguk</span></>}
      intro={<><span className="lang-en">A Tagungguk ensemble brings together the kulintangan, agung, and tambul. Each instrument has its own role in the rhythm.</span><span className="lang-ms">Ensembel Tagungguk menggabungkan kulintangan, agung dan tambul. Setiap instrumen mempunyai peranan tersendiri dalam rentak.</span></>}
    >
      {instruments.length === 0 ? (
        <p className="text-[var(--color-ink-soft)]">
          No instruments documented yet. Add them in <code>content/instruments.json</code>.
        </p>
      ) : (
        <>
        <div className="lang-en grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {instruments.map((inst) => (
            <InstrumentCard key={inst.name} instrument={inst} />
          ))}
        </div>
        <div className="lang-ms grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {malayInstruments.map((inst) => (
            <InstrumentCard key={inst.name} instrument={inst} />
          ))}
        </div>
        </>
      )}
    </Section>
  );
}
