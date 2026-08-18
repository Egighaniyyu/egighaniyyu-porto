import type { Metadata } from "next";
import Link from "next/link";
import Button from "@/app/components/Button";
import Cursor from "@/app/components/Cursor";
import Footer from "@/app/components/Footer";
import { PROJECTS } from "@/app/data/projects";

const OTHER_PROJECTS = PROJECTS.filter((p) => p.slug !== "lulladreams");

export const metadata: Metadata = {
  title: "LullaDreams — Case Study | Egi Ghaniyyu",
  description:
    "How LullaDreams was designed end-to-end: an AI-powered bedtime storytelling app combining voice cloning, AI narration, and personalized story generation — targeting a $3.1B market by 2028.",
};

const PRODUCT_URL = "https://lulladream.ai/";

const HELP_LED = [
  "User Interface Design",
  "User Experience Design",
  "AI Interaction Design",
  "Voice Cloning UX",
  "Design Systems",
  "Mobile App Design",
];

const HELP_COLLABORATED = [
  "User Research",
  "Product Strategy",
  "Subscription Optimization",
];

const PROJECT_DATA = [
  { label: "Role", value: "Product Designer" },
  { label: "Status", value: "Live" },
  {
    label: "Team",
    value:
      "Product Manager, Business Analyst, Fullstack Developer, AI Engineer",
  },
  { label: "Tools", value: "Figma, Figma Make, ChatGPT" },
];

const RESEARCH_METHODOLOGY =
  "Combined market opportunity data from EdTech + audio storytelling reports (Statista, Grand View) with UX benchmarks from Yoto, Toniebox, and Calm Kids. Informed by parent-forum research on Reddit and App Store reviews — not primary user studies at this scoping stage.";

const TIMELINE = [
  {
    phase: "Discovery & Research",
    weeks: "Weeks 1–3",
    activities:
      "Market sizing (EdTech + audio storytelling), competitor UX benchmarks (Yoto, Toniebox), parent-forum insight synthesis.",
  },
  {
    phase: "Wireframing & Flows",
    weeks: "Weeks 4–7",
    activities:
      "Voice cloning flow (5 steps), story generation flow (5 steps), story library IA, subscription funnel.",
  },
  {
    phase: "Design System & UI",
    weeks: "Weeks 8–13",
    activities:
      "Warm bedtime visual system, illustration direction, high-fidelity screens for library, reader, and generator.",
  },
  {
    phase: "AI Voice & Story UX",
    weeks: "Weeks 14–17",
    activities:
      "Voice cloning consent + progress UI, story customization inputs, playback controls, safety states.",
  },
  {
    phase: "Prototyping & Handoff",
    weeks: "Weeks 18–20",
    activities:
      "Interactive prototypes for onboarding tests, tokens + component export, engineering handoff docs.",
  },
];

const RESEARCH_STATS = [
  {
    value: "$1.8B",
    label: "Global digital storytelling market (2024)",
  },
  { value: "$3.1B", label: "Forecasted market size by 2028" },
  { value: "15–18%", label: "Projected CAGR through 2028" },
];

const RESEARCH_INSIGHTS = [
  "Parents miss bedtime more than they want to — travel, late shifts, and distance break the routine kids rely on.",
  "Generic audiobooks deliver narration, but lose the emotional warmth of a familiar voice.",
  "Screen-heavy bedtime media disrupts sleep — children need calming, screen-free experiences.",
  "AI narration has matured enough to feel soothing rather than robotic, lowering the barrier to a daily habit.",
  "Personalized stories (by name, theme, and moral lesson) outperform static libraries on engagement and repeat plays.",
  "ARPU near $8.50 with only 12% penetration today leaves clear headroom for a frictionless subscription model.",
];

const SOLUTIONS = [
  {
    n: "01",
    title: "Curated Classic Story Library",
    desc: "20+ classic fairy tales and timeless bedtime stories pulled from many cultures — each one paired with original illustrations and a calm reading tempo built for sleep.",
  },
  {
    n: "02",
    title: "Voice Cloning Storytelling",
    desc: "Parents read one short script, and the AI clones their voice in under 3 minutes — so every story in the library can play back in mom or dad's voice, even when they're not there.",
  },
  {
    n: "03",
    title: "AI Default Voice Generation",
    desc: "Calm, comforting AI-generated narrators for nights when parents are unavailable — tuned for soft pacing and bedtime atmosphere, not generic TTS energy.",
  },
  {
    n: "04",
    title: "AI Story Customization",
    desc: "Parents pick the main character, age, theme, duration, and prompt — the AI generates a unique story in about a minute, then lets them regenerate or save before play.",
  },
  {
    n: "05",
    title: "Two-flow guided creation",
    desc: "A 5-step Voice Cloning flow and a 5-step Story Generation flow share the same home — so first-time parents always know whether they're personalizing the voice or the story.",
  },
  {
    n: "06",
    title: "Flexible 4-tier subscription model",
    desc: "A clear pricing ladder — Free 3-day trial, Daily, Weekly, and Monthly — so parents can commit at the cadence that fits their bedtime routine and budget.",
  },
];

type ResultTag = "Live" | "Projected" | "Target" | "Market";

const RESULTS: { value: string; label: string; tag: ResultTag }[] = [
  { value: "$3.1B", label: "Market opportunity by 2028", tag: "Market" },
  { value: "4", label: "Core AI features unified in one app", tag: "Live" },
  { value: "18%", label: "Targeted user penetration by 2028", tag: "Target" },
  { value: "$8.50", label: "ARPU benchmark to grow into", tag: "Market" },
];

export default function LullaDreamsCaseStudy() {
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
          Visit LullaDreams ↗
        </a>
      </header>

      {/* HERO TEXT BLOCK */}
      <div className="cs-page">
        <section className="cs-hero-stack">
          <div className="cs-eyebrow">
            <span className="about-eyebrow-star">✳</span>
            Case Study · 2025
          </div>
          <h1 className="cs-title">
            LullaDreams — an AI-powered bedtime storytelling app positioned for
            a $3.1B market by 2028.
          </h1>
          <p className="cs-lede">
            An end-to-end product design for a screen-free storytelling
            companion that pairs a curated fairy-tale library with voice cloning
            and AI story generation — so every child gets a personalized
            bedtime, even when parents can&rsquo;t be there in person.
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
        <img src="/images/lulladreams-thumb.webp" alt="LullaDreams app cover" />
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
              Bedtime is the most important emotional ritual of the day — and
              the easiest to break.
            </h2>
          </div>
          <div className="cs-problem-card">
            <p className="cs-problem-text">
              Parents want to be present for every bedtime, but life gets in the
              way — late meetings, travel, distance, divorce, fatigue. Generic
              audiobooks fill the silence, but lose the warmth of a familiar
              voice. Screen-based content keeps kids awake instead of helping
              them fall asleep.
            </p>
            <p className="cs-problem-sub">
              The brief: design a screen-free, AI-powered storytelling
              companion that combines classic stories, the parent&rsquo;s actual
              voice, and personalized AI-generated tales — packaged into a calm
              nightly routine that strengthens the emotional bond, even when
              parents can&rsquo;t be in the room.
            </p>
          </div>
        </section>

        {/* RESEARCH & INSIGHT */}
        <section className="cs-section">
          <div className="cs-section-head">
            <span className="cs-section-tag">02 · Research &amp; Insight</span>
            <h2 className="cs-section-title">
              A fast-growing category with clear room for a personalization-led
              product.
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
              Six product moves that turn AI storytelling into a nightly habit
              parents trust.
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
              Five phases across a 5-month execution — discovery to handoff.
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
              A warm, dreamy visual system that scales across every screen
              before lights-out.
            </h2>
            <p className="cs-prose" style={{ marginTop: 16 }}>
              Final visuals are dropped in below — home library, story detail,
              voice cloning flow, AI story generator, and the subscription
              screen. Replace each placeholder with the matching mockup.
            </p>
          </div>
          <div className="cs-showcase">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/lulladreams-showcase-1.webp"
              alt="LullaDreams visual design showcase 1"
              className="cs-showcase-img"
            />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/lulladreams-showcase-2.webp"
              alt="LullaDreams visual design showcase 2"
              className="cs-showcase-img"
            />
          </div>
        </section>

        {/* RESULT & IMPACT */}
        <section className="cs-section">
          <div className="cs-section-head">
            <span className="cs-section-tag">06 · Result &amp; Impact</span>
            <h2 className="cs-section-title">
              A unified product designed to capture a $3.1B bedtime opportunity.
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
            See LullaDreams in action.
          </h2>
          <p className="cs-cta-text">
            Try the live product to see how it all comes together.
          </p>
          <div className="cs-hero-actions" style={{ justifyContent: "center" }}>
            <Button
              label="Visit LullaDreams"
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
