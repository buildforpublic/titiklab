import type { Metadata } from "next";
import Section from "@/components/Section";
import TitikCard from "@/components/TitikCard";
import { getAllTitik } from "@/lib/content";

export const metadata: Metadata = {
  title: "The Five Titik",
  description:
    "Explore the five traditional titik of Tagungguk: Tabawan, Tarirai, Limbayan, Lellang, and Senai-senai.",
};

export default function TitikIndexPage() {
  const titik = getAllTitik();

  return (
    <Section
      eyebrow="The rhythms"
      title="The five traditional titik"
      intro="Tabawan, Tarirai, Limbayan, Lellang, and Senai-senai — each a distinct rhythmic pattern in the Tagungguk repertoire."
    >
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {titik.map((t) => (
          <TitikCard key={t.slug} titik={t} />
        ))}
      </div>
    </Section>
  );
}
