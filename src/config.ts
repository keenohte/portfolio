/**
 * Site-wide settings. Edit these — they flow into the header, footer,
 * home page, about page, and page <title>/meta tags.
 */
// Base-aware link helper so every internal URL respects astro.config `base`
// (e.g. "/portfolio/…" on GitHub Pages, or "/…" once a custom domain is attached).
export const base = import.meta.env.BASE_URL;
export const link = (path = "") => {
  const b = base.replace(/\/$/, ""); // normalize: no trailing slash
  const p = String(path).replace(/^\//, ""); // no leading slash
  return p ? `${b}/${p}` : `${b}/`;
};

// Base-aware resolver for asset paths (covers, videos). Root-relative paths like
// "/work/foo.png" become base-aware; absolute URLs and empty values pass through.
export const asset = (path?: string) =>
  path && path.startsWith("/") && !path.startsWith("//") ? link(path) : path;

export const site = {
  name: "Lucas Clutter",
  // The canvas hero types this out. Keep it short and human.
  heroGreeting: "Hey, I'm Lucas",
  // Short positioning line — the one sentence that says what you do.
  tagline: "Product designer crafting clear, human software.",
  // Longer intro used on the home hero + about page.
  intro:
    "I'm a product designer focused on turning complex problems into simple, usable interfaces. I care about the details, the systems behind them, and the people who use them.",
  email: "lucas.clutter@gmail.com",
  location: "City, Country",
  resumeUrl: link("resume.pdf"), // drop a resume.pdf in /public to enable
  socials: [
    { label: "LinkedIn", href: "https://www.linkedin.com/in/lucasbclutter/" },
    { label: "Read.cv", href: "https://read.cv/your-handle" },
    { label: "Dribbble", href: "https://dribbble.com/your-handle" },
  ],
};

export const nav = [
  { label: "Work", href: link("#work") },
  { label: "About", href: link("about") },
  { label: "Contact", href: link("contact") },
];
