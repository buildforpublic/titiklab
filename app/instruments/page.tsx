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

  return (
    <Section
      eyebrow="The ensemble"
      title="Instruments of a Tagungguk ensemble"
      intro="A Tagungguk ensemble brings together the kulintangan, agung, and tambul. Each instrument has its own role in the rhythm."
    >
      {instruments.length === 0 ? (
        <p className="text-[var(--color-ink-soft)]">
          No instruments documented yet. Add them in <code>content/instruments.json</code>.
        </p>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {instruments.map((inst) => (
            <InstrumentCard key={inst.name} instrument={inst} />
          ))}
        </div>
      )}
    </Section>
  );
}
