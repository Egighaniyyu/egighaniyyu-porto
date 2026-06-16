import { Fragment } from "react";

const WORKFLOW = [
  {
    num: "01",
    title: "Research & Strategy",
    desc: "User interviews, market mapping, and AI-assisted synthesis to frame the real problem worth solving.",
    tools: [
      { src: "/images/claude.webp", name: "Claude" },
      { src: "/images/chatgpt.webp", name: "ChatGPT" },
      { src: "/images/gemini.webp", name: "Gemini" },
    ],
  },
  {
    num: "02",
    title: "Wireframing",
    desc: "Translating insights into low-fidelity flows and screen structures before pixels get in the way.",
    tools: [{ src: "/images/figma.webp", name: "Figma Make" }],
  },
  {
    num: "03",
    title: "Content Generation",
    desc: "Drafting copy, tone of voice, and on-brand visuals with AI so design decisions stay grounded in real content.",
    tools: [
      { src: "/images/highfields.webp", name: "Highfields" },
      { src: "/images/chatgpt.webp", name: "ChatGPT" },
      { src: "/images/gemini.webp", name: "Gemini" },
    ],
  },
  {
    num: "04",
    title: "Design & Prototype",
    desc: "Pixel-perfect UI, design systems, and interactive prototypes — fast, iterable, and ready to test.",
    tools: [
      { src: "/images/figma.webp", name: "Figma Make" },
      { src: "/images/lovable.webp", name: "Lovable" },
    ],
  },
  {
    num: "05",
    title: "Build & Code",
    desc: "Pair-programming with AI to ship production-ready frontends — faster, cleaner, and with fewer bugs.",
    tools: [
      { src: "/images/vscode.webp", name: "VS Code" },
      { src: "/images/claude.webp", name: "Claude Code" },
    ],
  },
  {
    num: "06",
    title: "Documentation",
    desc: "Capturing architecture, decisions, and handoff notes in version control so the team can build forward — not start from scratch.",
    tools: [
      { src: "/images/github.webp", name: "GitHub" },
      { src: "/images/gitlab.webp", name: "GitLab" },
    ],
  },
];

export default function Services() {
  return (
    <section className="services-section" id="workflow">
      <div
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          position: "relative",
          zIndex: 1,
        }}
      >
        <div className="reveal">
          <p className="services-eyebrow">My Workflow</p>
          <h2 className="services-title">
            From idea to ship,
            <br />
            powered by AI.
          </h2>
        </div>

        <div className="workflow-grid">
          {WORKFLOW.map((step, i) => {
            const isLast = i === WORKFLOW.length - 1;
            const lastRowSolo = WORKFLOW.length % 3 === 1;
            const soloClass = lastRowSolo && isLast ? "workflow-card-solo" : "";
            return (
            <Fragment key={step.num}>
              <div className={`service-card workflow-card reveal glow-hover ${soloClass}`}>
                <div className="workflow-top">
                  <span className="workflow-num">{step.num}</span>
                  <div className="workflow-tools" aria-label="Tools used">
                    {step.tools.map((t) => (
                      <div key={t.name} className="workflow-tool" title={t.name}>
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={t.src} alt={t.name} />
                      </div>
                    ))}
                  </div>
                </div>
                <div className="service-name">{step.title}</div>
                <p className="service-desc">{step.desc}</p>
                <div className="workflow-tool-names">
                  {step.tools.map((t) => t.name).join(" · ")}
                </div>
              </div>
              {(i + 1) % 3 !== 0 && i < WORKFLOW.length - 1 && (
                <div className="workflow-arrow" aria-hidden>
                  <svg
                    viewBox="0 0 24 24"
                    width="22"
                    height="22"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5 12h14M13 5l7 7-7 7"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                    />
                  </svg>
                </div>
              )}
            </Fragment>
            );
          })}
        </div>
      </div>
    </section>
  );
}
