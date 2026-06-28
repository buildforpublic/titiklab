import type { Metadata } from "next";
import Section from "@/components/Section";
import { getMarkdown } from "@/lib/content";

export const metadata: Metadata = {
  title: "History & Cultural Significance",
  description:
    "The history and cultural significance of Tagungguk, the traditional Bajau kulintangan music of Semporna, Sabah.",
};

export default function HistoryPage() {
  const { html } = getMarkdown("history.md");

  return (
    <Section eyebrow="Background" title="History & cultural significance">
      <div className="prose-titik" dangerouslySetInnerHTML={{ __html: html }} />
    </Section>
  );
}
