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
    "LullaDreams — an AI bedtime story platform from PT. LinkIT360 that lets parents narrate stories in their own voice. Runner-up at the MEFFYS 2026 Awards, Content & Advertising.",
};

const PRODUCT_URL = "https://lulladream.ai/";

const HELP_LED = [
  "User Interface Design",
  "User Experience Design",
  "Voice Cloning UX",
  "Design Systems",
  "Web & Mobile Design",
];

const HELP_COLLABORATED = [
  "Usability Testing (Maze)",
  "Pricing Research",
  "Product Strategy",
  "Trial & Subscription Design",
];

const PROJECT_DATA = [
  { label: "Role", value: "Product Designer & UI/UX Designer" },
  { label: "Status", value: "Web portal live · Android APK in testing" },
  {
    label: "Team",
    value: "Product Manager & Research Lead, UI/UX Designers",
  },
  { label: "Company", value: "PT. LinkIT360, Jakarta" },
  {
    label: "Research",
    value:
      "Usability testing via Maze (12 users, Jun 2025) · Pricing research (5 respondents, Feb–Mar 2026)",
  },
];

const RESEARCH_METHODOLOGY =
  "Primary research in two rounds. First, moderated usability testing on Maze with 12 parents and caregivers aged 25–40 across urban Java and Bali (June 2025), covering the three core flows: voice cloning, story generator, and voice templates. Second, a pricing study with 5 respondents (February–March 2026) to test willingness to pay and preferred plans.";

const UT_STATS = [
  { value: "42.6%", label: "Voice Cloning misclick rate · 100% task success" },
  { value: "27.3%", label: "Voice Template misclick rate · 100% task success" },
  { value: "14.3%", label: "Story Generator misclick rate · 100% task success" },
];

const PRICING_STATS = [
  { value: "Rp30–50K", label: "Price parents expected to pay monthly" },
  { value: "Rp39–49K", label: "Launch price range we landed on" },
  { value: "Monthly + Family", label: "Most preferred plans" },
];

const RESEARCH_INSIGHTS = [
  "Every flow was completed, but high misclick rates showed parents were exploring rather than navigating — the interface wasn't answering 'what can I tap?' fast enough.",
  "The free trial carries the most weight in the whole product. Sessions ran about 178.6 seconds on average, yet parents kept tapping story thumbnails that didn't respond — one dead tap at that stage chips away at trust before any value lands.",
  "Voice cloning raised an emotional question, not a technical one. As one parent put it, the voice sounded like them but didn't quite feel like them — so the feature needed to be framed as a way to stay close to your child, not as a clever AI trick.",
  "Parents asked where their voice recording is stored and whether they can remove it. We had no consent step at that point — a gap that had to close before beta.",
  "Some parents wanted to tell their own family stories, the ones passed down to them. A strong signal, but too heavy for the v1 AI pipeline.",
  "In pricing, parents liked the idea but wanted proof first — they'd subscribe once their child enjoyed a generated story. The Story Generator was the biggest draw, and it sat behind the paywall.",
];

const SOLUTIONS = [
  {
    n: "01",
    title: "Fully tappable story cards",
    desc: "Made the whole card respond to taps, not just the button — removing the dead taps that were eroding trust during the free trial. Shipped before beta.",
  },
  {
    n: "02",
    title: "Consent step for voice data",
    desc: "Added a clear privacy consent before any voice recording, plus visibility on where it's stored and how to delete it. Treated as a launch blocker, shipped pre-beta.",
  },
  {
    n: "03",
    title: "Voice cloning, reframed",
    desc: "Shifted the narrative from 'clone your voice' to 'be there at bedtime, even when you can't' — so the feature speaks to presence, not technology.",
  },
  {
    n: "04",
    title: "7-day full-access trial",
    desc: "A trial with the whole product unlocked, because a partial trial leaves parents unsure — they need to reach the moment where it clicks before being asked to pay.",
  },
  {
    n: "05",
    title: "One free Story Generator run",
    desc: "The most-wanted feature gets a single free attempt inside the trial, letting parents prove the value to themselves instead of hitting a locked door.",
  },
  {
    n: "06",
    title: "Clear v2 backlog",
    desc: "Custom family-story input and childlike voice options were validated but parked for v2 — scoped out due to AI pipeline complexity and lower urgency in testing.",
  },
];

const HARDEST_CALL =
  "The Story Generator was the obvious premium feature to lock. But research showed parents held back because they had no way to confirm the value for themselves. The recommendation was one free attempt inside the trial — let the product earn trust before it asks for payment.";

type PhaseTag = "Done" | "Shipped" | "Live" | "In testing" | "Planned";

const TIMELINE: { phase: string; tag: PhaseTag; activities: string }[] = [
  {
    phase: "Usability Testing — Jun 2025",
    tag: "Done",
    activities:
      "Moderated Maze sessions with 12 parents and caregivers across the voice cloning, story generator, and voice template flows.",
  },
  {
    phase: "Pre-beta Fixes",
    tag: "Shipped",
    activities:
      "Full card tap interaction and a privacy consent step for voice data — both treated as must-haves before beta.",
  },
  {
    phase: "Pricing Research — Feb–Mar 2026",
    tag: "Done",
    activities:
      "Willingness-to-pay study with 5 respondents, shaping the trial model and a Rp39–49K monthly launch price.",
  },
  {
    phase: "Web Portal Launch",
    tag: "Live",
    activities:
      "Story library, AI Story Generator, voice cloning, voice templates, 7-day full-access trial, and Monthly · Family · Annual plans.",
  },
  {
    phase: "Android APK",
    tag: "In testing",
    activities:
      "Bringing the same experience to Android, currently going through testing ahead of release.",
  },
  {
    phase: "v2 Backlog",
    tag: "Planned",
    activities:
      "Custom family-story input and childlike voice options — both validated by research, queued for the next version.",
  },
];

type ResultTag = "Live" | "Projected" | "Target" | "Market";

const RESULTS: { value: string; label: string; tag: ResultTag }[] = [
  {
    value: "2nd",
    label: "MEFFYS 2026 Award — Content & Advertising",
    tag: "Live",
  },
  { value: "100%", label: "Task success across all 3 core flows", tag: "Live" },
  { value: "Rp39–49K", label: "Validated monthly launch price", tag: "Live" },
  { value: "Web", label: "Portal live · Android APK in testing", tag: "Live" },
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
            Case Study · 2025 · Product &amp; Research
          </div>
          <h1 className="cs-title">
            LullaDreams — a bedtime story, told in the voice your child knows.
          </h1>
          <p className="cs-lede">
            An AI bedtime story platform for busy parents who still want to be
            part of their child&rsquo;s night — screen-free stories narrated in
            the parent&rsquo;s own voice, even on evenings they can&rsquo;t be
            in the room. Built at PT. LinkIT360 and named runner-up at the
            MEFFYS 2026 Awards.
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
        {/* RECOGNITION */}
        <section className="cs-section">
          <div className="cs-award">
            <div className="cs-award-mark" aria-hidden>
              🏆
            </div>
            <div className="cs-award-body">
              <span className="cs-award-badge">Runner-up · 2nd Place</span>
              <h2 className="cs-award-title">
                MEFFYS 2026 Award — Content &amp; Advertising
              </h2>
              <p className="cs-award-text">
                LullaDreams took second place in the Content &amp; Advertising
                category of the MEFFYS 2026 — the yearly awards run by the
                Mobile Ecosystem Forum to celebrate standout creativity and
                innovation in mobile content, judged by professionals from
                across the global mobile industry.
              </p>
            </div>
          </div>
        </section>

        {/* PROBLEM */}
        <section className="cs-section">
          <div className="cs-section-head">
            <span className="cs-section-tag">01 · Problem</span>
            <h2 className="cs-section-title">
              Parents wanted a bedtime ritual. What they found felt impersonal.
            </h2>
          </div>
          <div className="cs-problem-card">
            <p className="cs-problem-text">
              Existing bedtime apps offered stories, but nothing that sounded
              like home — no personalization, no familiar voice, no real
              emotional pull. Demand for bedtime stories was never the
              question. The question was whether parents would feel connected
              enough to open it every night — and to pay for it.
            </p>
            <p className="cs-problem-sub">
              That shifted the work from &ldquo;build more features&rdquo; to
              &ldquo;earn trust at every step&rdquo; — from the first tap in the
              free trial, to how voice cloning is explained, to the moment a
              parent is asked to subscribe.
            </p>
          </div>
        </section>

        {/* RESEARCH & INSIGHT */}
        <section className="cs-section">
          <div className="cs-section-head">
            <span className="cs-section-tag">02 · Research &amp; Insight</span>
            <h2 className="cs-section-title">
              Every flow got completed — the misclicks told the real story.
            </h2>
            <p className="cs-methodology">
              <span className="cs-methodology-label">Methodology:</span>
              {" "}
              {RESEARCH_METHODOLOGY}
            </p>
          </div>

          <div className="cs-stat-group-label">Usability testing · Maze</div>
          <div className="cs-stat-grid">
            {UT_STATS.map((s) => (
              <div key={s.label} className="cs-stat-card">
                <div className="cs-stat-value">{s.value}</div>
                <div className="cs-stat-label">{s.label}</div>
              </div>
            ))}
          </div>

          <div className="cs-stat-group-label">Pricing research</div>
          <div className="cs-stat-grid">
            {PRICING_STATS.map((s) => (
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
              What we shipped, what we cut, and what moved to v2.
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
          <p className="cs-methodology" style={{ marginTop: 28 }}>
            <span className="cs-methodology-label">The hardest call:</span>
            {" "}
            {HARDEST_CALL}
          </p>
        </section>

        {/* PHASES */}
        <section className="cs-section">
          <div className="cs-section-head">
            <span className="cs-section-tag">04 · Phases</span>
            <h2 className="cs-section-title">
              From first usability test to live product — and what&apos;s next.
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
              A warm, dreamy visual system that carries every screen toward
              lights-out.
            </h2>
            <p className="cs-prose" style={{ marginTop: 16 }}>
              Selected screens below — story library, story detail, voice
              cloning flow, AI story generator, and the subscription screen.
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
              Live, validated, and recognized on a global stage.
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
