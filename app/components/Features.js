"use client";

import { useEffect, useRef } from "react";

const features = [
  {
    id: "feature-instant-response",
    title: "Instant 24/7 Response",
    description:
      "Gemini-powered AI answers customer questions instantly—day or night—so you never miss a sale.",
    iconPath:
      "M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z",
    gradient: "from-accent-magenta/20 to-accent-magenta/5",
    iconColor: "text-accent-magenta",
    delay: "0s",
  },
  {
    id: "feature-live-catalog",
    title: "Live Product Integration",
    description:
      "Fetches stock and prices directly from TikTok Shop API in real-time. No hallucinated data—ever.",
    iconPath:
      "M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z",
    gradient: "from-purple-500/20 to-purple-500/5",
    iconColor: "text-purple-400",
    delay: "0.1s",
  },
  {
    id: "feature-auto-close",
    title: "Automated Closing",
    description:
      "Closes sales using native TikTok Product Cards within the chat—seamlessly guiding buyers to checkout.",
    iconPath:
      "M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z",
    gradient: "from-accent-cyan/20 to-accent-cyan/5",
    iconColor: "text-accent-cyan",
    delay: "0.2s",
  },
  {
    id: "feature-escalation",
    title: "Smart Human Escalation",
    description:
      "Seamlessly transfers complex issues to human agents with full conversation context preserved.",
    iconPath:
      "M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z",
    gradient: "from-indigo-500/20 to-indigo-500/5",
    iconColor: "text-indigo-400",
    delay: "0.3s",
  },
];

export default function Features() {
  const sectionRef = useRef(null);

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

    const els = sectionRef.current?.querySelectorAll(".reveal");
    els?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="features" className="relative py-24 lg:py-32" ref={sectionRef}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16 lg:mb-20 reveal">
          <p className="text-sm font-semibold text-accent-cyan tracking-widest uppercase mb-3">
            Capabilities
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4">
            Everything You Need to Sell
            <br className="hidden sm:block" />{" "}
            <span className="text-gradient-subtle">Smarter on TikTok</span>
          </h2>
          <p className="max-w-2xl mx-auto text-slate-400 text-lg leading-relaxed">
            A purpose-built AI agent that handles every step of the buyer
            journey—from first message to final checkout—without ever leaving
            TikTok.
          </p>
        </div>

        {/* Features grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
          {features.map((feature) => (
            <div
              key={feature.id}
              id={feature.id}
              className="glass-card glass-card-hover rounded-2xl p-7 reveal group"
              style={{ transitionDelay: feature.delay }}
            >
              <div
                className={`w-12 h-12 rounded-xl bg-linear-to-br ${feature.gradient} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}
              >
                <svg
                  className={`w-6 h-6 ${feature.iconColor}`}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d={feature.iconPath}
                  />
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-2.5 tracking-tight">
                {feature.title}
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
