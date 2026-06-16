"use client";

import { useEffect, useState } from "react";
import Button from "./Button";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" && mobileOpen) setMobileOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [mobileOpen]);

  const openEgiAI = () => {
    setMobileOpen(false);
    if (typeof window !== "undefined") {
      window.dispatchEvent(new CustomEvent("egiai:open"));
    }
  };

  const closeMobile = () => setMobileOpen(false);

  return (
    <nav id="navbar" className={scrolled ? "scrolled" : ""}>
      <div className="nav-left">
        <a href="#" className="nav-logo" onClick={closeMobile}>
          <div className="nav-logo-icon">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/egi-photo-circle.png" alt="Egi Ghaniyyu" />
          </div>
          Egi Ghaniyyu
        </a>
        <ul className="nav-links">
          <li>
            <button type="button" className="nav-link-button" onClick={openEgiAI}>
              EgiAI
            </button>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#projects">Project</a>
          </li>
          <li>
            <a href="#workflow">Workflow</a>
          </li>
        </ul>
      </div>

      <div className="nav-right">
        <Button
          label="Download CV"
          href="https://docs.google.com/document/d/15mDZqVJ1gNEh_KjaWpdZXIhVH0B_JMts/edit?usp=sharing&ouid=100324465092423050866&rtpof=true&sd=true"
          variant="primary"
          size="sm"
          target="_blank"
        />
      </div>

      <button
        type="button"
        className={`nav-burger ${mobileOpen ? "is-open" : ""}`}
        onClick={() => setMobileOpen((v) => !v)}
        aria-label={mobileOpen ? "Close menu" : "Open menu"}
        aria-expanded={mobileOpen}
        aria-controls="nav-mobile-menu"
      >
        <span />
        <span />
        <span />
      </button>

      <div
        id="nav-mobile-menu"
        className={`nav-mobile-menu ${mobileOpen ? "is-open" : ""}`}
        aria-hidden={!mobileOpen}
      >
        <ul className="nav-mobile-list">
          <li>
            <button
              type="button"
              className="nav-mobile-link"
              onClick={openEgiAI}
            >
              EgiAI
            </button>
          </li>
          <li>
            <a href="#about" className="nav-mobile-link" onClick={closeMobile}>
              About
            </a>
          </li>
          <li>
            <a href="#projects" className="nav-mobile-link" onClick={closeMobile}>
              Project
            </a>
          </li>
          <li>
            <a href="#workflow" className="nav-mobile-link" onClick={closeMobile}>
              Workflow
            </a>
          </li>
        </ul>
        <div className="nav-mobile-cta" onClick={closeMobile}>
          <Button
            label="Download CV"
            href="https://docs.google.com/document/d/15mDZqVJ1gNEh_KjaWpdZXIhVH0B_JMts/edit?usp=sharing&ouid=100324465092423050866&rtpof=true&sd=true"
            variant="primary"
            target="_blank"
          />
        </div>
      </div>
    </nav>
  );
}
