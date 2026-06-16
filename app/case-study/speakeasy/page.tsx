import type { Metadata } from "next";
import Link from "next/link";
import Button from "@/app/components/Button";
import Cursor from "@/app/components/Cursor";
import Footer from "@/app/components/Footer";
import { PROJECTS } from "@/app/data/projects";

const OTHER_PROJECTS = PROJECTS.filter((p) => p.slug !== "speakeasy");

export const metadata: Metadata = {
  title: "Speakeasy — Case Study | Egi Ghaniyyu",
  description:
    "How Speakeasy was designed end-to-end: an AI-powered language learning app projected to drive +24% daily learner retention.",
};

const PRODUCT_URL = "https://speakeasy.mobi/";

const HELP_TAGS = [
  "User Research",
  "Service Design & Stakeholder Alignment",
  "User Interface Design",
  "User Experience Design",
  "AI Interaction Design",
  "Design Systems",
  "Conversion Optimization",
  "Mobile App Design",
  "B2C",
];

const PROJECT_DATA = [
  { label: "Role", value: "Senior Product Designer" },
  { label: "Duration", value: "6 months" },
  {
    label: "Team",
    value: "1 PM, 1 BA, Full-stack Engineers, 1 AI Engineer",
  },
  { label: "Tools", value: "Figma, Figma Make, ChatGPT" },
];

const RESEARCH_STATS = [
  {
    value: "$6.5–7.5B",
    label: "Global digital language learning market (2024)",
  },
  { value: "$11–13B", label: "Forecasted market size by 2028" },
  { value: "13–16%", label: "Projected CAGR through 2028" },
];

const RESEARCH_INSIGHTS = [
  "Gen Z and young professionals adopt mobile-first learning apps the fastest.",
  "Entertainment-driven learning (movies, music, short clips) is the highest-growth segment.",
  "Pure drill apps lose users in weeks — motivation breaks before grammar does.",
  "Learners want speaking confidence, not just vocabulary recall.",
  "Mobile is the dominant channel — short, daily sessions outperform long structured ones for engagement.",
  "AI tutors close the gap when human tutors are unaffordable or unavailable.",
];

const SOLUTIONS = [
  {
    n: "01",
    title: "Bite-sized course system",
    desc: "Beginner → Advanced lessons in fill-the-blank and multiple-choice formats, paced by an energy/streak loop that rewards daily practice.",
  },
  {
    n: "02",
    title: "Real-life media learning",
    desc: "Short scenes from movies, TV and song lyrics with vocabulary highlights, subtitles, and quick review questions to anchor language in context.",
  },
  {
    n: "03",
    title: "AI tutor (chat & video)",
    desc: "A 24/7 conversational AI tutor for speaking practice with real-time grammar and vocabulary feedback — no scheduling, no judgement.",
  },
  {
    n: "04",
    title: "Community & gamified leagues",
    desc: "A moderated forum for peer help plus weekly EXP leaderboards that turn solo study into a social loop learners come back for.",
  },
  {
    n: "05",
    title: "Personalized onboarding",
    desc: "5-step onboarding picks the language and level so the home dashboard surfaces curated lessons and a study plan that actually fits.",
  },
  {
    n: "06",
    title: "Flexible subscription model",
    desc: "Designed a clear 4-tier pricing structure (Daily / Weekly / Monthly / Free) so learners can commit at the cadence that fits their budget and motivation.",
  },
];

const RESULTS = [
  { value: "+24%", label: "Daily learner retention (projected)" },
  { value: "5×", label: "Faster onboarding completion" },
  { value: "6", label: "Learning modes unified in one product" },
  { value: "$13B", label: "Market opportunity by 2028" },
];

export default function SpeakeasyCaseStudy() {
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
          Visit Speakeasy ↗
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
            Speakeasy — an AI-powered language app projected to drive +24% daily
            learner retention.
          </h1>
          <p className="cs-lede">
            An end-to-end product design for a modern language learning app that
            blends structured lessons, real-life media, an AI tutor, and a
            community — designed from onboarding all the way through daily
            practice and subscription.
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

        {/* HOW DID I HELP THEM */}
        <section className="cs-help">
          <h3 className="cs-help-label">How did I help them</h3>
          <div className="cs-tags-row">
            {HELP_TAGS.map((tag) => (
              <span key={tag} className="cs-tag-pill">
                {tag}
              </span>
            ))}
          </div>
        </section>
      </div>

      {/* COVER IMAGE — full width landscape */}
      <div className="cs-cover">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/images/speakeasy-thumb.webp" alt="Speakeasy app cover" />
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
              Most language learners lose momentum before they ever feel
              confident speaking.
            </h2>
          </div>
          <div className="cs-problem-card">
            <p className="cs-problem-text">
              Existing apps either feel like school — too rigid and
              grammar-heavy — or like a game that never quite teaches you to
              hold a real conversation. Learners drop off in weeks, blame
              themselves, and walk away convinced they&apos;re &ldquo;bad at
              languages.&rdquo;
            </p>
            <p className="cs-problem-sub">
              The brief: design one product that combines structured learning,
              entertainment-driven practice, and real speaking reps — packaged
              into a daily habit loop that keeps learners coming back long
              enough to actually become fluent.
            </p>
          </div>
        </section>

        {/* RESEARCH & INSIGHT */}
        <section className="cs-section">
          <div className="cs-section-head">
            <span className="cs-section-tag">02 · Research &amp; Insight</span>
            <h2 className="cs-section-title">
              A growing global category with a very specific motivation gap.
            </h2>
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
              Six product moves that turn daily practice into something users
              look forward to.
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

        {/* VISUAL DESIGN */}
        <section className="cs-section">
          <div className="cs-section-head">
            <span className="cs-section-tag">04 · Visual Design</span>
            <h2 className="cs-section-title">
              A friendly fox-led visual system that scales across every screen.
            </h2>
            <p className="cs-prose" style={{ marginTop: 16 }}>
              Final visuals are dropped in below — onboarding, home, lessons, AI
              tutor, community, and the subscription flow. Replace each
              placeholder with the matching mockup.
            </p>
          </div>
          <div className="cs-showcase">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/speakeasy-showcase-1.webp"
              alt="Speakeasy visual design showcase 1"
              className="cs-showcase-img"
            />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/speakeasy-showcase-2.webp"
              alt="Speakeasy visual design showcase 2"
              className="cs-showcase-img"
            />
          </div>
        </section>

        {/* RESULT & IMPACT */}
        <section className="cs-section">
          <div className="cs-section-head">
            <span className="cs-section-tag">05 · Result &amp; Impact</span>
            <h2 className="cs-section-title">
              A unified product designed to capture a $13B opportunity.
            </h2>
          </div>
          <div className="cs-result-grid">
            {RESULTS.map((r) => (
              <div key={r.label} className="cs-result-card">
                <div className="cs-result-value">{r.value}</div>
                <div className="cs-result-label">{r.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="cs-cta">
          <h2 className="cs-section-title" style={{ color: "white" }}>
            See Speakeasy in action.
          </h2>
          <p className="cs-cta-text">
            Try the live product to see how it all comes together.
          </p>
          <div className="cs-hero-actions" style={{ justifyContent: "center" }}>
            <Button
              label="Visit Speakeasy"
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
