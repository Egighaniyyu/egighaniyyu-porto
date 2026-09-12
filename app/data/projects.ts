export type Project = {
  slug: "speakeasy" | "minutex" | "lulladreams";
  name: string;
  category: string;
  title: string;
  desc: string;
  metrics: { value: string; label: string }[];
  thumb: string;
  caseStudyHref: string;
  productHref: string;
};

export const PROJECTS: Project[] = [
  {
    slug: "speakeasy",
    name: "Speakeasy | AI Language Learning Platform",
    category: "Mobile App · Product & UX",
    title:
      "Speakeasy — a language app built to make speaking feel safe, with Renald the AI companion",
    desc: "A language-learning platform shipped from PT. LinkIT360 in Jakarta — structured courses, film and song-based lessons, a peer community, and unrushed conversation with Renald. Live across three international telco partners with ±6 supported languages.",
    metrics: [
      { value: "±6", label: "Supported languages" },
      { value: "3", label: "International telco integrations" },
      { value: "Phase 2", label: "Full feature set live" },
    ],
    thumb: "/images/speakeasy-thumb.webp",
    caseStudyHref: "/case-study/speakeasy",
    productHref: "https://speakeasy.mobi/",
  },
  {
    slug: "minutex",
    name: "MinuteX | AI Meeting Assistant",
    category: "Web + Mobile + Device · Product Design · GTM Strategy",
    title:
      "Designing a 3-in-1 AI meeting assistant ecosystem positioned for 10K+ waitlist sign-ups at launch",
    desc: "MinuteX unifies a Web app, Mobile app, and a portable Device under one workspace — combining the strengths of Otter and Plaud into a single SEA-first ecosystem with AI transcription, summaries, and action items.",
    metrics: [
      { value: "10K+", label: "Waitlist sign-up target at launch" },
      { value: "3-in-1", label: "Form factors unified" },
      { value: "8%", label: "Targeted visitor → sign-up conversion" },
    ],
    thumb: "/images/minutex-thumb.webp",
    caseStudyHref: "/case-study/minutex",
    productHref: "https://minutex-lp.vercel.app/",
  },
  {
    slug: "lulladreams",
    name: "LullaDreams | AI Bedtime Storytelling",
    category: "Web & Mobile · Product & Research · AI Voice UX",
    title:
      "LullaDreams — bedtime stories in a parent's own voice, runner-up at the MEFFYS 2026 Awards",
    desc: "An AI bedtime story platform from PT. LinkIT360 — story library, AI story generator, and voice cloning so parents can narrate even when they can't be there. Shaped by usability testing with 12 parents and a pricing study before launch.",
    metrics: [
      { value: "2nd", label: "MEFFYS 2026 · Content & Advertising" },
      { value: "100%", label: "Task success across core flows" },
      { value: "Rp39–49K", label: "Validated monthly launch price" },
    ],
    thumb: "/images/lulladreams-thumb.webp",
    caseStudyHref: "/case-study/lulladreams",
    productHref: "https://lulladream.ai/",
  },
];
