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
    name: "Speakeasy | AI-Powered Language Learning",
    category: "Mobile App · Product Design · UX Strategy",
    title:
      "Designing an AI-powered language app projected to drive +24% daily learner retention",
    desc: "Speakeasy blends structured lessons, real-life media, an AI tutor, and a moderated community into one cohesive product — designed end-to-end from onboarding through subscription and telco distribution.",
    metrics: [
      { value: "+24%", label: "Daily learner retention (projected)" },
      { value: "6", label: "Learning modes unified" },
      { value: "$13B", label: "Market opportunity by 2028" },
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
    category: "Mobile App · Product Design · AI Voice UX",
    title:
      "Designing an AI-powered bedtime storytelling app positioned for a $3.1B market by 2028",
    desc: "LullaDreams pairs a curated fairy-tale library with voice cloning and AI story generation — so every child gets a personalized bedtime in their parent's actual voice, even when mom or dad can't be in the room.",
    metrics: [
      { value: "$3.1B", label: "Market opportunity by 2028" },
      { value: "4", label: "Core AI features unified" },
      { value: "18%", label: "Targeted user penetration by 2028" },
    ],
    thumb: "/images/lulladreams-thumb.webp",
    caseStudyHref: "/case-study/lulladreams",
    productHref: "https://lulladream.ai/",
  },
];
