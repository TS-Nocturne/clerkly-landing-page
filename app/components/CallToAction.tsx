"use client";

import { useEffect, useRef } from "react";

export default function CallToAction() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );

    const els = ref.current?.querySelectorAll(".reveal");
    els?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="cta" className="relative py-24 lg:py-32" ref={ref}>
      <div className="mx-auto max-w-3xl px-6 lg:px-8 text-center reveal">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-5">
          Ready to Automate
          <br />{" "}
          <span className="text-gradient-brand">Your TikTok Sales?</span>
        </h2>
        <p className="text-lg text-slate-400 leading-relaxed mb-10 max-w-xl mx-auto">
          Join our private beta and start converting TikTok conversations into
          sales—on autopilot.
        </p>

        <a
          href="mailto:hello@clerkly.ai"
          id="cta-join-beta"
          className="btn-shimmer animate-shimmer inline-flex items-center gap-3 px-10 py-4 rounded-full text-base font-bold text-white shadow-lg shadow-accent-magenta/20 hover:shadow-accent-magenta/40 hover:scale-105 animate-pulse-glow transition-all duration-300"
        >
          Join Beta
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13 7l5 5m0 0l-5 5m5-5H6"
            />
          </svg>
        </a>

        <p className="mt-6 text-xs text-slate-500">
          No credit card required &middot; Limited spots available
        </p>
      </div>
    </section>
  );
}
