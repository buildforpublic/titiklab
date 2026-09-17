"use client";

import { useEffect, useState } from "react";

type Language = "en" | "ms";

export default function LanguageSwitcher() {
  const [language, setLanguage] = useState<Language>("en");

  useEffect(() => {
    const saved = window.localStorage.getItem("titiklab-language");
    const initial: Language = saved === "ms" ? "ms" : "en";
    setLanguage(initial);
    document.documentElement.dataset.language = initial;
    document.documentElement.lang = initial === "ms" ? "ms" : "en";
  }, []);

  function choose(next: Language) {
    setLanguage(next);
    window.localStorage.setItem("titiklab-language", next);
    document.documentElement.dataset.language = next;
    document.documentElement.lang = next === "ms" ? "ms" : "en";
  }

  return (
    <div className="language-switcher" aria-label="Choose website language">
      <span className="language-switcher__label">
        <span className="lang-en">Language</span>
        <span className="lang-ms">Bahasa</span>
      </span>
      <button type="button" onClick={() => choose("en")} aria-pressed={language === "en"}>
        English
      </button>
      <button type="button" onClick={() => choose("ms")} aria-pressed={language === "ms"}>
        Melayu
      </button>
    </div>
  );
}
