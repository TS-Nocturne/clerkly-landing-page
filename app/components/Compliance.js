"use client";

import { useEffect, useRef } from "react";

export default function Compliance() {
  const ref = useRef(null);

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

  const checks = [
    "Native TikTok Checkout",
    "No Off-Platform Redirects",
    "TikTok API Certified",
  ];

  return (
    <section
      id="compliance"
      className="relative py-24 lg:py-32 overflow-hidden"
      ref={ref}
    >
      {/* Background glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[600px] h-[400px] bg-accent-cyan/[0.04] rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl px-6 lg:px-8">
        <div className="border-gradient glass-card rounded-3xl p-10 sm:p-14 text-center reveal">
          {/* Shield icon */}
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-accent-cyan/10 mb-8 shield-glow">
            <svg
              className="w-8 h-8 text-accent-cyan"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
              />
            </svg>
          </div>

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent-cyan/10 border border-accent-cyan/20 mb-6">
            <span className="w-2 h-2 rounded-full bg-accent-cyan" />
            <span className="text-xs font-semibold text-accent-cyan tracking-widest uppercase">
              Platform Compliant
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-6">
            100% Compliant.
          </h2>

          <p className="text-lg sm:text-xl text-slate-300 leading-relaxed max-w-2xl mx-auto mb-8">
            We strictly keep{" "}
            <span className="text-white font-semibold">
              all transactions within the TikTok ecosystem
            </span>
            . No off-platform links. No external payment gateways. No QR codes
            or redirect schemes.
          </p>

          {/* Compliance bullets */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-slate-400">
            {checks.map((check) => (
              <div key={check} className="flex items-center gap-2">
                <svg
                  className="w-5 h-5 text-accent-cyan shrink-0"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 12.75l6 6 9-13.5"
                  />
                </svg>
                <span>{check}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
