import type { Metadata } from "next";
import Section from "@/components/Section";
import PartnerCard from "@/components/PartnerCard";
import PhoneInstrument from "@/components/PhoneInstrument";
import { getJson, type Partner } from "@/lib/content";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "About",
  description: "About TitikLab and its community partners.",
};

export default function AboutPage() {
  const partners = getJson<Partner>("partners.json");

  return (
    <>
      <Section eyebrow="The project" title="About TitikLab">
        <div className="prose-titik">
          <p>
            <strong>TitikLab: Pendigitalan Irama Kulintangan Bajau</strong> is a community project
            to preserve and promote Tagunggu' — the traditional Bajau music of Semporna, Sabah —
            through a digital learning platform and open educational materials.
          </p>
          <p>The platform helps students and the public:</p>
          <ul>
            <li>Learn the history and cultural significance of Tagunggu'.</li>
            <li>Explore the five traditional titik.</li>
            <li>Understand the instruments of a Tagunggu' ensemble.</li>
            <li>View photos and videos of demonstrations.</li>
            <li>Listen to the rhythm of each titik.</li>
            <li>Download educational resources such as a learning pamphlet.</li>
          </ul>
          <p>
            TitikLab is an open-source project owned by its community and built in public with
            support from the <a href={SITE.community.url}>{SITE.community.name}</a> volunteer
            community. Anyone can contribute — code, research, photos, recordings, or translations.
          </p>
        </div>
      </Section>

      <Section
        eyebrow="Interaktif"
        title="Ruang latihan digital"
        intro="Satu bahagian khas untuk pengguna telefon mencuba bunyi asas kulintangan sebelum modul ritma lengkap ditambah."
      >
        <PhoneInstrument />
      </Section>

      {partners.length > 0 && (
        <Section eyebrow="Community" title="Our partners">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {partners.map((p) => (
              <PartnerCard key={p.name} partner={p} />
            ))}
          </div>
        </Section>
      )}
    </>
  );
}
