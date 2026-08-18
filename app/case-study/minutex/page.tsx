import type { Metadata } from "next";
import Link from "next/link";
import Button from "@/app/components/Button";
import Cursor from "@/app/components/Cursor";
import Footer from "@/app/components/Footer";
import { PROJECTS } from "@/app/data/projects";

const OTHER_PROJECTS = PROJECTS.filter((p) => p.slug !== "minutex");

export const metadata: Metadata = {
  title: "MinuteX — Case Study | Egi Ghaniyyu",
  description:
    "How MinuteX was designed as a 3-in-1 AI meeting assistant ecosystem — combining Web, Mobile, and Hardware Device into one workspace, targeting 10K+ waitlist sign-ups at launch.",
};

const PRODUCT_URL = "https://minutex-lp.vercel.app/";

const HELP_LED = [
  "Landing Page Design",
  "User Interface Design",
  "User Experience Design",
  "AI Interaction Design",
  "Design Systems",
  "Multi-platform Design",
];

const HELP_COLLABORATED = [
  "User Research",
  "Product Strategy",
  "Service Design & Stakeholder Alignment",
  "Conversion Optimization",
];

const PROJECT_DATA = [
  { label: "Role", value: "Product Designer" },
  { label: "Status", value: "Pre-launch" },
  {
    label: "Team",
    value:
      "Product Manager, Business Analyst, Fullstack Developer, AI Engineer",
  },
  { label: "Tools", value: "Figma, Figma Make, ChatGPT" },
];

const RESEARCH_METHODOLOGY =
  "Grounded in secondary research on Otter AI and Plaud (product reviews, Reddit + Product Hunt community feedback) plus market reports on the meeting productivity space. Stakeholder interviews with the PM and founder informed the SEA multilingual angle. No large-scale user interviews were run at this portfolio-scoped stage.";

const TIMELINE = [
  {
    phase: "Discovery & Positioning",
    weeks: "Weeks 1–2",
    activities:
      "Competitor teardown (Otter, Plaud, Fireflies), category gap mapping, SEA multilingual research, positioning statement.",
  },
  {
    phase: "Landing Page & GTM",
    weeks: "Weeks 3–6",
    activities:
      "Landing page IA, hero + product showcase, pricing model, pre-order flow, waitlist funnel.",
  },
  {
    phase: "Product UX Design",
    weeks: "Weeks 7–10",
    activities:
      "Web app dashboard, mobile app screens, device companion UX, cross-device sync patterns.",
  },
  {
    phase: "AI Interaction & Handoff",
    weeks: "Weeks 11–14",
    activities:
      "AI summary + action items UI, multilingual transcript patterns, engineering handoff, walkthrough video prep.",
  },
  {
    phase: "Launch Prep",
    weeks: "Weeks 15–16",
    activities:
      "Landing page QA, waitlist analytics wiring, pre-order checkout iteration.",
  },
];

const RESEARCH_STATS = [
  {
    value: "10K+",
    label: "Waitlist sign-up target in first 3 months",
  },
  { value: "1K+", label: "Device pre-orders target in 6 months" },
  { value: "8%", label: "Targeted visitor → sign-up conversion" },
];

const RESEARCH_INSIGHTS = [
  "Professionals run 5–8 meetings a day across a mix of online calls and in-person rooms — note-taking breaks every time the format switches.",
  "Software-only tools like Otter solve Zoom and Meet, but leave the in-person meeting gap completely open.",
  "Hardware-only tools like Plaud capture offline rooms, but ignore the daily reality of remote and hybrid workflows.",
  "SEA users need Bahasa Indonesia, English, and code-switching handled natively — generic Western tooling under-delivers on accuracy.",
  "Privacy, data residency, and on-device processing are non-negotiable for legal, HR, and consulting teams.",
  "Action items, decisions, and follow-ups matter more than raw transcripts — meetings should produce outcomes, not documents.",
];

const SOLUTIONS = [
  {
    n: "01",
    title: "Three-in-one capture ecosystem",
    desc: "One workspace, three form factors — Web app for online calls, Mobile app for on-the-go recording, and a portable Device for in-person meetings. Same AI engine, same library, same pricing.",
  },
  {
    n: "02",
    title: "SEA-first multilingual AI",
    desc: "Transcription tuned for Bahasa Indonesia, English, and natural code-switching between them — so summaries stay accurate even when the meeting jumps languages mid-sentence.",
  },
  {
    n: "03",
    title: "Action-oriented AI summary",
    desc: "Beyond raw transcripts: structured Minutes of Meeting with decisions, action items, owners, and due dates — designed to be sent as a follow-up, not edited from scratch.",
  },
  {
    n: "04",
    title: "Cross-device sync & search",
    desc: "Start a recording on the Device, finish reviewing on Web, share from Mobile — every meeting is searchable across transcript, summary, and keyword from any surface.",
  },
  {
    n: "05",
    title: "Privacy-first architecture",
    desc: "End-to-end encryption, SEA data residency, optional local processing on Device, and explicit consent flows — designed to pass legal and compliance review out of the box.",
  },
  {
    n: "06",
    title: "Flexible 4-tier pricing model",
    desc: "Free for students and trials, Pro for individuals, Business for teams, and a Device Bundle for in-person-heavy roles — every audience has a clear next step from landing page to checkout.",
  },
];

type ResultTag = "Live" | "Projected" | "Target" | "Market";

const RESULTS: { value: string; label: string; tag: ResultTag }[] = [
  { value: "10K+", label: "Waitlist sign-up target at launch", tag: "Target" },
  {
    value: "3-in-1",
    label: "Form factors unified in one ecosystem",
    tag: "Live",
  },
  { value: "99.5%", label: "Targeted system uptime SLA", tag: "Target" },
  { value: "SEA", label: "Primary market positioning", tag: "Market" },
];

export default function MinutexCaseStudy() {
  return (
    <>
      <Cursor />

      <header className="cs-topbar">
        <Link href="/#projects" className="cs-back">
          ← Back to portfolio
        </Link>
        <a
          href={PRODUCT_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="cs-topbar-link">
          Visit MinuteX ↗
        </a>
      </header>

      {/* HERO TEXT BLOCK */}
      <div className="cs-page">
        <section className="cs-hero-stack">
          <div className="cs-eyebrow">
            <span className="about-eyebrow-star">✳</span>
            Case Study · 2026
          </div>
          <h1 className="cs-title">
            MinuteX — a 3-in-1 AI meeting assistant ecosystem positioned for 10K+
            waitlist sign-ups at launch.
          </h1>
          <p className="cs-lede">
            An end-to-end product design for an AI meeting assistant that
            combines Web, Mobile, and a portable Device into one workspace —
            designed from positioning and landing page through onboarding, pre-order
            flow, and the in-product Minutes of Meeting experience.
          </p>
          <div className="cs-hero-actions">
            <Button
              label="Visit Product"
              href={PRODUCT_URL}
              variant="primary"
              target="_blank"
            />
          </div>
        </section>

      </div>

      {/* HOW DID I HELP THEM — full width, split by scope */}
      <section className="cs-help">
        <div className="cs-help-inner">
          <h3 className="cs-help-label">How did I help them</h3>
          <div className="cs-help-group" data-scope="led">
            <div className="cs-help-group-label">Led / Owned</div>
            <div className="cs-tags-row">
              {HELP_LED.map((tag) => (
                <span key={tag} className="cs-tag-pill cs-tag-pill-led">
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <div className="cs-help-group" data-scope="collaborated">
            <div className="cs-help-group-label">Collaborated on</div>
            <div className="cs-tags-row">
              {HELP_COLLABORATED.map((tag) => (
                <span key={tag} className="cs-tag-pill">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* COVER IMAGE — full viewport width, edge-to-edge */}
      <div className="cs-cover">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/images/minutex-thumb.webp" alt="MinuteX app cover" />
      </div>

      {/* DATA ROW — dark */}
      <section className="cs-data-row">
        <div className="cs-data-row-inner">
          {PROJECT_DATA.map((d) => (
            <div key={d.label} className="cs-data-item">
              <div className="cs-data-item-label">{d.label}</div>
              <div className="cs-data-item-value">{d.value}</div>
            </div>
          ))}
        </div>
      </section>

      {/* REST OF CASE STUDY */}
      <div className="cs-page cs-page-rest">
        {/* PROBLEM */}
        <section className="cs-section">
          <div className="cs-section-head">
            <span className="cs-section-tag">01 · Problem</span>
            <h2 className="cs-section-title">
              Modern work lives across Zoom calls and meeting rooms — but no
              single tool captures both.
            </h2>
          </div>
          <div className="cs-problem-card">
            <p className="cs-problem-text">
              Today&rsquo;s professionals jump between online calls and in-person
              meetings every day. Software-only tools like Otter handle the Zoom
              side but go silent the moment a meeting moves into a room.
              Hardware-only devices like Plaud capture offline rooms but ignore
              the reality of remote and hybrid workflows.
            </p>
            <p className="cs-problem-sub">
              The brief: design one ecosystem — Web, Mobile, and a portable
              Device — connected by a single AI engine and a single workspace, so
              every meeting (online or offline) lands in the same place with
              accurate transcripts, action items, and follow-ups.
            </p>
          </div>
        </section>

        {/* RESEARCH & INSIGHT */}
        <section className="cs-section">
          <div className="cs-section-head">
            <span className="cs-section-tag">02 · Research &amp; Insight</span>
            <h2 className="cs-section-title">
              A fast-growing category with a clear underserved gap in SEA.
            </h2>
            <p className="cs-methodology">
              <span className="cs-methodology-label">Methodology:</span>
              {" "}
              {RESEARCH_METHODOLOGY}
            </p>
          </div>
          <div className="cs-stat-grid">
            {RESEARCH_STATS.map((s) => (
              <div key={s.label} className="cs-stat-card">
                <div className="cs-stat-value">{s.value}</div>
                <div className="cs-stat-label">{s.label}</div>
              </div>
            ))}
          </div>
          <ul className="cs-bullets">
            {RESEARCH_INSIGHTS.map((insight) => (
              <li key={insight}>{insight}</li>
            ))}
          </ul>
        </section>

        {/* KEY SOLUTIONS */}
        <section className="cs-section">
          <div className="cs-section-head">
            <span className="cs-section-tag">03 · Key Solutions</span>
            <h2 className="cs-section-title">
              Six product moves that turn every meeting — online or offline —
              into measurable outcomes.
            </h2>
          </div>
          <div className="cs-solution-grid">
            {SOLUTIONS.map((s) => (
              <div key={s.n} className="cs-solution-card">
                <div className="cs-solution-num">#{s.n}</div>
                <h3 className="cs-solution-title">{s.title}</h3>
                <p className="cs-solution-desc">{s.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* TIMELINE */}
        <section className="cs-section">
          <div className="cs-section-head">
            <span className="cs-section-tag">04 · Timeline</span>
            <h2 className="cs-section-title">
              Five phases across a 4-month execution — positioning to
              launch-ready.
            </h2>
          </div>
          <ol className="cs-timeline">
            {TIMELINE.map((t) => (
              <li key={t.phase} className="cs-timeline-item">
                <div className="cs-timeline-weeks">{t.weeks}</div>
                <div className="cs-timeline-content">
                  <h3 className="cs-timeline-phase">{t.phase}</h3>
                  <p className="cs-timeline-activities">{t.activities}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        {/* VISUAL DESIGN */}
        <section className="cs-section">
          <div className="cs-section-head">
            <span className="cs-section-tag">05 · Visual Design</span>
            <h2 className="cs-section-title">
              A confident, professional visual system that scales across
              Web, Mobile, and Device touchpoints.
            </h2>
            <p className="cs-prose" style={{ marginTop: 16 }}>
              Final visuals are dropped in below — landing page, product
              showcase, in-app dashboard, MoM detail, and the pre-order flow.
              Replace each placeholder with the matching mockup.
            </p>
          </div>
          <div className="cs-showcase">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/minutex-showcase-1.webp"
              alt="MinuteX visual design showcase 1"
              className="cs-showcase-img"
            />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/minutex-showcase-2.webp"
              alt="MinuteX visual design showcase 2"
              className="cs-showcase-img"
            />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/minutex-showcase-3.webp"
              alt="MinuteX visual design showcase 3"
              className="cs-showcase-img"
            />
            <video
              src="/video/minutex-video.mp4"
              className="cs-showcase-img"
              autoPlay
              loop
              muted
              playsInline
              aria-label="MinuteX product walkthrough video"
            />
          </div>
        </section>

        {/* RESULT & IMPACT */}
        <section className="cs-section">
          <div className="cs-section-head">
            <span className="cs-section-tag">06 · Result &amp; Impact</span>
            <h2 className="cs-section-title">
              A launch-ready ecosystem positioned to win the SEA AI meeting
              category.
            </h2>
          </div>
          <div className="cs-result-grid">
            {RESULTS.map((r) => (
              <div key={r.label} className="cs-result-card">
                <div className="cs-result-value">{r.value}</div>
                <div className="cs-result-label">{r.label}</div>
                <span
                  className={`cs-result-tag cs-result-tag-${r.tag.toLowerCase()}`}
                >
                  {r.tag}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="cs-cta">
          <h2 className="cs-section-title" style={{ color: "white" }}>
            See MinuteX in action.
          </h2>
          <p className="cs-cta-text">
            Try the live landing page to see how it all comes together.
          </p>
          <div className="cs-hero-actions" style={{ justifyContent: "center" }}>
            <Button
              label="Visit MinuteX"
              href={PRODUCT_URL}
              variant="white"
              target="_blank"
            />
          </div>
        </section>
      </div>

      {/* MORE CASE STUDIES */}
      <section className="cs-more">
        <div className="cs-more-inner">
          <div className="cs-more-head">
            <span className="cs-more-eyebrow">
              <span className="about-eyebrow-star">✳</span> More case studies
            </span>
            <h2 className="cs-more-title">Explore more of my work.</h2>
          </div>
          <div className="cs-more-grid">
            {OTHER_PROJECTS.map((p) => (
              <article key={p.slug} className="cs-more-card glow-hover">
                <div className="cs-more-thumb">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={p.thumb} alt={`${p.name} preview`} />
                </div>
                <div className="cs-more-body">
                  <div className="project-product-name">{p.name}</div>
                  <div className="project-category">{p.category}</div>
                  <h3 className="project-title">{p.title}</h3>

                  <div className="project-actions">
                    <Button
                      label="View Case Study"
                      href={p.caseStudyHref}
                      variant="primary"
                      size="sm"
                    />
                    <Button
                      label="Visit Product"
                      href={p.productHref}
                      variant="secondary"
                      size="sm"
                      target="_blank"
                    />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
