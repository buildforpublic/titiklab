export const SITE = {
  name: "TitikLab",
  tagline: "Pendigitalan Irama Kulintangan Bajau",
  domain: "titiklab.buildforpublic.com",
  url: "https://titiklab.buildforpublic.com",
  description:
    "An educational platform preserving and promoting Tagungguk — the traditional Bajau kulintangan music of Semporna, Sabah. Learn the history, the five titik, the instruments, and the rhythms.",
  email: "hello@buildforpublic.com", // TODO: update with the project's real contact email
  github: "https://github.com/buildforpublic/titiklab",
  parent: {
    name: "Build for Public",
    url: "https://buildforpublic.com",
  },
};

export const NAV_LINKS = [
  { href: "/history", label: "History" },
  { href: "/titik", label: "The Five Titik" },
  { href: "/instruments", label: "Instruments" },
  { href: "/gallery", label: "Gallery" },
  { href: "/resources", label: "Resources" },
  { href: "/about", label: "About" },
];

// The five traditional titik (rhythm patterns), in canonical order.
// Full content lives in content/titik/<slug>.md — edit those files to add details.
export const TITIK_ORDER = [
  "tabawan",
  "tarirai",
  "limbayan",
  "lellang",
  "senai-senai",
] as const;
