export const SITE = {
  name: "TitikLab",
  tagline: "Pendigitalan Irama Kulintangan Bajau",
  // TODO: Domain not confirmed yet. This is a placeholder used only to resolve
  // metadata/Open Graph URLs at build time. The site belongs to the NGO/community —
  // it is NOT a Build for Public subdomain. Replace once the real domain is decided.
  domain: "titiklab.org",
  url: "https://titiklab.org",
  description:
    "An educational platform preserving and promoting Tagunggu' — the traditional Bajau kulintangan music of Semporna, Sabah. Learn the history, the five titik, the instruments, and the rhythms.",
  email: "hello@titiklab.org", // TODO: update with the project's real contact email
  github: "https://github.com/buildforpublic/titiklab",
  // Build for Public supports this project as part of the open-source community —
  // it does not own the project or its cultural content.
  community: {
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

// The five core titik documented by the current oral-history source.
// Full content lives in content/titik/<slug>.md — edit those files to add details.
export const TITIK_ORDER = [
  "tabawan",
  "tarirai",
  "limbayan",
  "lellang",
  "luvak-luvak",
] as const;
