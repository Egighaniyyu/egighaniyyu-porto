"use client";

import { useState } from "react";
import Button from "./Button";

const TABS = [
  {
    key: "everyone",
    label: "For Everyone",
    text: '"Hello there! I\'m a Product Designer & UI/UX Designer who builds AI-powered digital products. I blend AI, aesthetics, and empathy to solve everyday problems beautifully."',
  },
  {
    key: "recruiters",
    label: "Recruiters",
    text: '"I\'m a Product Designer & UI/UX Designer with 5+ years of experience, now focused on shipping AI-powered products end-to-end — from research and strategy to a polished, production-ready interface. Actively seeking new opportunities."',
  },
  {
    key: "uxdesigner",
    label: "UI/UX Designer",
    text: "\"I'm all about the 'why' behind the 'how.' I obsess over user patterns, accessibility, and using AI to create seamless flows that feel second nature.\"",
  },
  {
    key: "productdesigner",
    label: "Product Designer",
    text: "\"I'm a systems thinker with a high bar for quality. From process to pixels — increasingly with AI in the loop — I'll collaborate with you, learn from you, and help make something we're both proud of.\"",
  },
  {
    key: "pm",
    label: "Product Manager",
    text: '"I speak the language of business goals and user needs. I bridge the gap between vision and execution, ensuring we ship scalable solutions that move the needle."',
  },
  {
    key: "engineer",
    label: "Engineer",
    text: '"I design with the grid in mind. I provide clean handoffs, systematic components, and I\'m always down to discuss the technical constraints of a complex interaction."',
  },
];

export default function About() {
  const [active, setActive] = useState("everyone");

  return (
    <section className="about-section" id="about">
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div className="about-top-row reveal">
          <div className="about-eyebrow">
            <span className="about-eyebrow-star">✳</span>
            About Me
          </div>

          <div className="about-tabs-wrap">
            <div className="about-tab-pills">
              {TABS.map((t) => (
                <button
                  key={t.key}
                  className={`about-tab-pill ${active === t.key ? "active" : ""}`}
                  onClick={() => setActive(t.key)}>
                  {t.label}
                </button>
              ))}
            </div>

            <div className="about-tab-content">
              {TABS.map((t) => (
                <div
                  key={t.key}
                  className={`about-tab-panel ${active === t.key ? "active" : ""}`}>
                  <p className="about-tab-text">{t.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="about-get-in-touch reveal">
          <Button label="Get In Touch" href="#contact" variant="primary" />
        </div>

        <div className="about-bottom-row reveal">
          <div className="about-photo-wrap">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/about.webp"
              alt="Egi Ghaniyyu"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "top center",
                display: "block",
                borderRadius: 20,
              }}
            />
          </div>

          <div className="about-cards-grid">
            <div className="acard reveal">
              <div className="acard-label">
                Years Crafting
                <br />
                Digital Products
              </div>
              <div
                className="acard-num acard-counter"
                data-target="5"
                data-suffix="+">
                5+
              </div>
            </div>

            <div
              className="acard reveal industries-card"
              style={{ position: "relative", overflow: "hidden" }}>
              <div className="acard-label">
                Industries
                <br />
                I&apos;ve Worked In.
              </div>
              <div className="acard-industries">
                {[
                  "Education",
                  "AI-Powered",
                  "Telemedicine",
                  "Finance",
                  "SaaS",
                  "E-commerce",
                  "Productivity",
                ].map((label) => (
                  <span key={label} className="industry-tag">
                    {label}
                  </span>
                ))}
              </div>
            </div>

            <div className="acard reveal tools-card tools-card-full">
              <div className="acard-label">
                Tools I Use
                <br />
                Daily
              </div>
              <div className="tools-float" aria-hidden>
                {[
                  { src: "/images/figma.webp", name: "Figma" },
                  { src: "/images/vscode.webp", name: "VS Code" },
                  { src: "/images/claude.webp", name: "Claude" },
                  { src: "/images/chatgpt.webp", name: "ChatGPT" },
                  { src: "/images/lovable.webp", name: "Lovable" },
                  { src: "/images/jira.webp", name: "Jira" },
                  { src: "/images/gemini.webp", name: "Gemini" },
                  { src: "/images/highfields.webp", name: "Highfields" },
                  { src: "/images/github.webp", name: "GitHub" },
                  { src: "/images/gitlab.webp", name: "GitLab" },
                ].map((t) => (
                  <div key={t.name} className="tool-icon" title={t.name}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={t.src} alt={t.name} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
