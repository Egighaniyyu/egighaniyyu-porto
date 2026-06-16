"use client";

import { useEffect, useRef } from "react";

export default function Cursor() {
  const cursorRef = useRef<HTMLDivElement | null>(null);
  const followerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const follower = followerRef.current;
    if (!cursor || !follower) return;

    let mouseX = 0;
    let mouseY = 0;
    let followerX = 0;
    let followerY = 0;
    let rafId = 0;

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      cursor.style.transform = `translate(${mouseX}px, ${mouseY}px) translate(-50%, -50%)`;
    };

    const tick = () => {
      followerX += (mouseX - followerX) * 0.12;
      followerY += (mouseY - followerY) * 0.12;
      follower.style.transform = `translate(${followerX}px, ${followerY}px) translate(-50%, -50%)`;
      rafId = requestAnimationFrame(tick);
    };

    const hoverSelectors =
      "a, button, .project-item, .service-card, .testimonial-card, .pricing-card";
    const onEnter = () => {
      cursor.style.width = "30px";
      cursor.style.height = "30px";
      follower.style.borderColor = "rgba(79,110,247,0.8)";
      follower.style.width = "54px";
      follower.style.height = "54px";
    };
    const onLeave = () => {
      cursor.style.width = "12px";
      cursor.style.height = "12px";
      follower.style.borderColor = "rgba(79,110,247,0.5)";
      follower.style.width = "36px";
      follower.style.height = "36px";
    };

    const hoverEls = document.querySelectorAll(hoverSelectors);
    hoverEls.forEach((el) => {
      el.addEventListener("mouseenter", onEnter);
      el.addEventListener("mouseleave", onLeave);
    });

    document.addEventListener("mousemove", onMove);
    rafId = requestAnimationFrame(tick);

    return () => {
      document.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(rafId);
      hoverEls.forEach((el) => {
        el.removeEventListener("mouseenter", onEnter);
        el.removeEventListener("mouseleave", onLeave);
      });
    };
  }, []);

  return (
    <>
      <div ref={cursorRef} className="cursor" />
      <div ref={followerRef} className="cursor-follower" />
    </>
  );
}
