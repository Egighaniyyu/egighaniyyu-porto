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
    "Speakeasy — an AI language platform shipped from PT. LinkIT360 in Jakarta, distributed across three international telcos, and built around Renald: an AI companion designed to make speaking practice feel safe.",
};

const PRODUCT_URL = "https://speakeasy.mobi/";

const HELP_LED = [
  "User Interface Design",
  "User Experience Design",
  "AI Interaction Design (Renald)",
  "Design Systems",
  "Mobile App Design",
];

const HELP_COLLABORATED = [
  "User Research",
  "Product Strategy",
  "Content & Tone Direction",
  "Telco Distribution Handoff",
];

const PROJECT_DATA = [
  { label: "Role", value: "Product Designer & UI/UX Designer" },
  {
    label: "Status",
    value: "Phase 2 shipped · AI chat & video in progress",
  },
  {
    label: "Team",
    value:
      "Product Manager, UI/UX Designer, AI Engineer, Content Designer, Frontend Developer, Backend Developer",
  },
  { label: "Company", value: "PT. LinkIT360, Jakarta" },
  { label: "Tools", value: "Figma, Figma Make, ChatGPT" },
];

const RESEARCH_METHODOLOGY =
  "An internal walkthrough of Speakeasy from a first-time learner's perspective — onboarding, course selection, lesson pacing, and the AI chat loop, end-to-end. Supplemented by conversations with the PM and a competitive scan of Duolingo, Babbel, and adjacent AI tutor apps. This is product-inference work, not primary user research — no interviews were run at this stage.";

type PhaseTag = "Shipped" | "In progress" | "Planned";

const TIMELINE: { phase: string; tag: PhaseTag; activities: string }[] = [
  {
    phase: "Phase 1 — Foundation",
    tag: "Shipped",
    activities:
      "First live release — course-based learning, initial language set, and the account + subscription plumbing everything else builds on.",
  },
  {
    phase: "Phase 2 — Expansion",
    tag: "Shipped",
    activities:
      "Broader lesson types (film and song), a peer community, ±6 supported languages, Renald's first appearance in the product, and integration with three international telco partners.",
  },
  {
    phase: "AI Chat & Video Call Enhancement",
    tag: "In progress",
    activities:
      "Bringing Renald's live conversation closer to a supportive friend than a language checker — prompt work, feedback UI, and tone calibration across chat and video.",
  },
  {
    phase: "Ongoing — Language & Distribution Growth",
    tag: "Planned",
    activities:
      "Adding more languages, going deeper on localization, and lining up additional telco partners to extend reach across Southeast Asia and beyond.",
  },
];

const RESEARCH_STATS = [
  { value: "±6", label: "Supported languages, more on the way" },
  { value: "3", label: "International telco distribution partners" },
  { value: "Phase 2", label: "Full shipped feature set now live" },
];

const RESEARCH_INSIGHTS = [
  "The stuck moment isn't remembering words — it's saying them out loud. 'Can they finish a lesson' turned out to be the wrong success metric; 'do they feel ready to speak' is the one that matters.",
  "Film clips and song lyrics teach differently than lesson slides. Learners want to hear how language actually moves in a real conversation, not just how it gets parsed on a grammar page.",
  "Renald works when he feels like company, not a quiz. Framing him as a companion instead of a mascot removes the 'I'm being tested' pressure that closes learners up mid-sentence.",
  "Three telco integrations turn Speakeasy from an app into a distribution engine — and that reach reshapes what the product is optimizing for.",
  "A visible peer community keeps motivation alive between formal lessons. Social presence outlasts streak mechanics.",
  "Deepening the AI conversation experience pays back more than adding new languages. Better practice beats broader coverage at this stage.",
];

const SOLUTIONS = [
  {
    n: "01",
    title: "Course-based learning path",
    desc: "A clear Beginner → Advanced spine so learners always know where they are and what's next — the organizing principle for the whole experience.",
  },
  {
    n: "02",
    title: "Film-based lessons",
    desc: "Scenes and dialogue lifted from real film — language the way it actually shows up in life, presented as a lesson learners want to open.",
  },
  {
    n: "03",
    title: "Song-based lessons",
    desc: "Vocabulary, pronunciation, and rhythm through music — a form of practice people reach for on their own, without needing to be nudged.",
  },
  {
    n: "04",
    title: "Community feature",
    desc: "Peer help, shared wins, and casual encouragement — a social loop that keeps momentum going between formal lessons.",
  },
  {
    n: "05",
    title: "AI chat & video call with Renald",
    desc: "Renald as a patient, unhurried conversation partner — practice out loud, get corrections, no ranking or judgment attached.",
  },
  {
    n: "06",
    title: "Telco distribution model",
    desc: "Three international telco integrations built in from day one — Speakeasy is a B2B distribution play as much as a consumer app.",
  },
];

type ResultTag = "Live" | "Projected" | "Target" | "Market";

const RESULTS: { value: string; label: string; tag: ResultTag }[] = [
  { value: "±6", label: "Languages supported (more on the way)", tag: "Live" },
  { value: "3", label: "International telco integrations", tag: "Live" },
  { value: "Phase 2", label: "Full feature set shipped", tag: "Live" },
  {
    value: "Renald",
    label: "AI companion — chat & video enhancement underway",
    tag: "Projected",
  },
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
            Case Study · 2025 · Product &amp; UX
          </div>
          <h1 className="cs-title">
            Speakeasy — a language app built to make speaking feel safe.
          </h1>
          <p className="cs-lede">
            A language-learning platform where structured courses meet the way
            language actually lives — film scenes, song lyrics, a peer
            community, and unrushed conversation with Renald, an AI companion
            designed to feel more like a study buddy than a grader. Shipped
            from PT. LinkIT360 in Jakarta, with distribution live across three
            international telco partners.
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
              The vocabulary sticks. The speaking doesn&apos;t.
            </h2>
          </div>
          <div className="cs-problem-card">
            <p className="cs-problem-text">
              Most language apps are good at moving learners through content
              — check the box, keep the streak, unlock the next lesson. What
              they rarely deliver is the confidence to actually say something
              out loud when it counts. The brief wasn&apos;t &ldquo;teach more
              grammar&rdquo; — it was &ldquo;make speaking feel like something
              worth trying again tomorrow.&rdquo;
            </p>
            <p className="cs-problem-sub">
              We looked at Speakeasy through a beginner&apos;s eyes — opening
              the app for the first time, picking a lesson, hearing themselves
              speak — and reframed Renald from a friendly-looking mascot into
              a companion learners could actually talk to without feeling
              judged.
            </p>
          </div>
        </section>

        {/* RESEARCH & INSIGHT */}
        <section className="cs-section">
          <div className="cs-section-head">
            <span className="cs-section-tag">02 · Research &amp; Insight</span>
            <h2 className="cs-section-title">
              One product, several ways in — because language doesn&apos;t
              only live in textbooks.
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
              Six shipped moves — the feature set that turns daily practice
              into a habit.
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

        {/* PHASES (was Timeline) */}
        <section className="cs-section">
          <div className="cs-section-head">
            <span className="cs-section-tag">04 · Phases</span>
            <h2 className="cs-section-title">
              Where Speakeasy stands today — shipped, in flight, and what
              comes next.
            </h2>
          </div>
          <ol className="cs-timeline">
            {TIMELINE.map((t) => (
              <li key={t.phase} className="cs-timeline-item">
                <div className="cs-timeline-weeks">{t.tag}</div>
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
              A warm, learner-first system that scales from lesson to
              community to Renald.
            </h2>
            <p className="cs-prose" style={{ marginTop: 16 }}>
              Selected screens below — home, course flow, film and song
              lessons, Renald chat, and the community feed.
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
            <span className="cs-section-tag">06 · Result &amp; Impact</span>
            <h2 className="cs-section-title">
              What&apos;s live today — and where Speakeasy heads next.
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
