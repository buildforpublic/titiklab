import type { Metadata } from "next";
import { marked } from "marked";
import Section from "@/components/Section";
import { getMarkdown } from "@/lib/content";

export const metadata: Metadata = {
  title: "History & Cultural Significance",
  description:
    "The history and cultural significance of Tagunggu', the traditional Bajau kulintangan music of Semporna, Sabah.",
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

function HistoryMap({
  body,
  language,
}: {
  body: string;
  language: "en" | "ms";
}) {
  const sections = historySections(body);

  return (
    <div
      className={`history-map lang-${language}`}
      aria-label={
        language === "ms"
          ? "Peta minda yang menerangkan sejarah Tagunggu'"
          : "Mind map explaining the history of Tagunggu'"
      }
    >
      <div className="history-map__core">
        <span>{language === "ms" ? "Warisan hidup" : "Living heritage"}</span>
        <strong>Tagunggu'</strong>
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
  );
}

export default function HistoryPage() {
  const { body: englishBody } = getMarkdown("history.md");
  const { body: malayBody } = getMarkdown("history.ms.md");

  return (
    <Section
      eyebrow={<><span className="lang-en">Oral history</span><span className="lang-ms">Sejarah lisan</span></>}
      title={<><span className="lang-en">The story of Tagunggu'</span><span className="lang-ms">Kisah Tagunggu'</span></>}
      intro={<><span className="lang-en">Explore the tradition through five interconnected perspectives based on Cikgu Rosley’s educational research and an interview conducted by the TitikLab founder with Mahammod Bongsu, founder of Sulimbag Jawtee.</span><span className="lang-ms">Terokai tradisi ini melalui lima perspektif yang saling berkaitan berdasarkan kajian pendidikan Cikgu Rosley dan temu bual oleh pengasas TitikLab bersama Mahammod Bongsu, pengasas Sulimbag Jawtee.</span></>}
      className="history-section"
    >
      <HistoryMap body={englishBody} language="en" />
      <HistoryMap body={malayBody} language="ms" />
    </Section>
  );
}
