import type { Metadata } from "next";
import { marked } from "marked";
import Section from "@/components/Section";
import { getMarkdown } from "@/lib/content";

export const metadata: Metadata = {
  title: "History & Cultural Significance",
  description:
    "The history and cultural significance of Tagungguk, the traditional Bajau kulintangan music of Semporna, Sabah.",
};

function historySections(body: string) {
  return body
    .split(/^## /m)
    .slice(1)
    .map((section) => {
      const [title, ...lines] = section.trim().split("\n");
      return {
        title,
        html: marked.parse(lines.join("\n").trim(), { async: false }) as string,
      };
    });
}

export default function HistoryPage() {
  const { body } = getMarkdown("history.md");
  const sections = historySections(body);

  return (
    <Section
      eyebrow="Oral history"
      title="The story of Tagungguk"
      intro="Explore the tradition through five connected perspectives drawn from Ayunee’s interview with Mahammod Bongsu, founder of Sulimbag Jawtee."
      className="history-section"
    >
      <div className="history-map" aria-label="Mind map explaining the history of Tagungguk">
        <div className="history-map__core">
          <span>Living heritage</span>
          <strong>Tagungguk</strong>
          <small>Semporna, Sabah</small>
        </div>

        {sections.map((section, index) => (
          <article
            key={section.title}
            className={`history-map__card history-map__card--${index + 1}`}
          >
            <div className="history-map__number">{String(index + 1).padStart(2, "0")}</div>
            <h2>{section.title}</h2>
            <div
              className="history-map__copy"
              dangerouslySetInnerHTML={{ __html: section.html }}
            />
          </article>
        ))}
      </div>
    </Section>
  );
}
