"use client";

import { useEffect } from "react";

export default function Animations() {
  useEffect(() => {
    let cancelled = false;
    let cleanups: Array<() => void> = [];

    // --- Reliable reveal via IntersectionObserver (immune to hash-anchor timing) ---
    // Activate CSS-controlled initial hidden state by tagging <html>. Without JS the
    // elements stay visible (graceful degradation).
    document.documentElement.classList.add("reveal-ready");

    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.01 },
    );

    document
      .querySelectorAll<HTMLElement>(".reveal, .reveal-left, .reveal-right")
      .forEach((el) => revealObserver.observe(el));

    cleanups.push(() => {
      revealObserver.disconnect();
    });

    (async () => {
      const gsapMod = await import("gsap");
      const stMod = await import("gsap/ScrollTrigger");
      const stoMod = await import("gsap/ScrollToPlugin");
      if (cancelled) return;

      const gsap = gsapMod.gsap ?? gsapMod.default;
      const ScrollTrigger = stMod.ScrollTrigger ?? stMod.default;
      const ScrollToPlugin = stoMod.ScrollToPlugin ?? stoMod.default;
      gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

      // Hero entry timeline (only runs if hero is at top — uses gsap.from on page load,
      // independent of scroll position).
      const heroEl = document.querySelector(".hero");
      if (heroEl && window.scrollY < 100) {
        const heroTL = gsap.timeline({ delay: 0.1 });
        heroTL
          .from(".hero-bg-text", { opacity: 0, scale: 1.08, duration: 1.2, ease: "power3.out" })
          .from(
            ".hero-arch-bg",
            { scaleY: 0, transformOrigin: "bottom center", duration: 1.1, ease: "power3.out" },
            "-=1.0",
          )
          .from(".hero-pill-1", { opacity: 0, x: -20, rotate: -15, duration: 0.5, ease: "back.out(2)" }, "-=0.4")
          .from(".hero-pill-2", { opacity: 0, x: 20, rotate: 12, duration: 0.5, ease: "back.out(2)" }, "-=0.4")
          .from(".hero-stat-card-1", { opacity: 0, y: 20, duration: 0.5, ease: "power2.out" }, "-=0.3")
          .from(".hero-stat-card-2", { opacity: 0, y: 20, duration: 0.4, ease: "power2.out" }, "-=0.2")
          .from(".hero-name-label", { opacity: 0, y: 16, duration: 0.5, ease: "power2.out" }, "-=0.3")
          .from(".hero-title", { opacity: 0, y: 24, duration: 0.6, ease: "power3.out" }, "-=0.35");
      }

      // Stat cards scroll fade (scrub — always works regardless of initial scroll)
      if (document.querySelector("#about")) {
        ScrollTrigger.create({
          trigger: "#about",
          start: "top 80%",
          end: "top 20%",
          scrub: 0.8,
          onUpdate: (self: { progress: number }) => {
            const p = self.progress;
            gsap.set(".hero-stat-card-1", { y: p * 50, opacity: 1 - p * 0.7 });
            gsap.set(".hero-stat-card-2", { y: p * 30, opacity: 0.52 - p * 0.52 });
          },
        });
      }

      // Stat counter — runs animation if grid enters viewport, otherwise finishes
      // immediately so the numbers always end up correct.
      const animateCounter = (el: HTMLElement, target: number, suffix = "") => {
        const duration = 1500;
        const startTime = performance.now();
        const update = (currentTime: number) => {
          const elapsed = currentTime - startTime;
          const progress = Math.min(elapsed / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          const current = Math.round(eased * target);
          el.textContent = current + suffix;
          if (progress < 1) requestAnimationFrame(update);
        };
        requestAnimationFrame(update);
      };

      const triggerCounters = () => {
        document.querySelectorAll<HTMLElement>(".acard-counter").forEach((el) => {
          if (el.dataset.counted === "1") return;
          el.dataset.counted = "1";
          const target = parseInt(el.dataset.target ?? "0", 10);
          const suffix = el.dataset.suffix ?? "";
          el.textContent = "0" + suffix;
          animateCounter(el, target, suffix);
        });
      };

      const aboutGrid = document.querySelector(".about-cards-grid");
      if (aboutGrid) {
        const rect = aboutGrid.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.85) {
          triggerCounters();
        } else {
          ScrollTrigger.create({
            trigger: ".about-cards-grid",
            start: "top 85%",
            onEnter: triggerCounters,
          });
        }
      }

      // Hero parallax (scrub — safe regardless of initial scroll)
      if (heroEl) {
        gsap.to(".hero-bg-text", {
          y: 60,
          ease: "none",
          scrollTrigger: { trigger: ".hero", start: "top top", end: "bottom top", scrub: true },
        });
        gsap.to(".hero-arch-bg", {
          y: 30,
          ease: "none",
          scrollTrigger: { trigger: ".hero", start: "top top", end: "bottom top", scrub: true },
        });
      }

      // Project number parallax (scrub)
      gsap.utils.toArray<HTMLElement>(".project-num").forEach((num) => {
        const parent = num.closest(".project-item");
        if (!parent) return;
        gsap.to(num, {
          y: -30,
          ease: "none",
          scrollTrigger: {
            trigger: parent,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        });
      });

      // Smooth scroll for anchor links
      const anchorHandler = (e: Event) => {
        const a = e.currentTarget as HTMLAnchorElement;
        const hash = a.getAttribute("href");
        if (!hash || !hash.startsWith("#") || hash === "#") return;
        const target = document.querySelector(hash);
        if (target) {
          e.preventDefault();
          gsap.to(window, {
            duration: 1.2,
            scrollTo: { y: target as Element, offsetY: 80 },
            ease: "power3.inOut",
          });
        }
      };
      const anchors = document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]');
      anchors.forEach((a) => a.addEventListener("click", anchorHandler));

      // Final sync — ensures ScrollTrigger positions are correct post-setup.
      ScrollTrigger.refresh();

      cleanups.push(() => {
        anchors.forEach((a) => a.removeEventListener("click", anchorHandler));
        ScrollTrigger.getAll().forEach((st: { kill: () => void }) => st.kill());
      });
    })();

    return () => {
      cancelled = true;
      cleanups.forEach((fn) => fn());
      cleanups = [];
    };
  }, []);

  return null;
}
