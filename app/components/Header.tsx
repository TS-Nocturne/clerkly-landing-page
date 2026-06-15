"use client";

import { useEffect, useState } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.pageYOffset > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header
      id="header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-surface-950/80 backdrop-blur-xl border-b border-white/5"
          : ""
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <nav className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a href="#" id="logo" className="flex items-center gap-2.5 group">
            <div className="w-8 h-8 rounded-lg bg-linear-to-br from-accent-magenta to-purple-600 flex items-center justify-center text-sm font-bold tracking-tight transition-transform duration-300 group-hover:scale-110">
              C
            </div>
            <span className="text-lg font-bold tracking-tight">
              Clerkly{" "}
              <span className="text-violet-400 font-medium">AI</span>
            </span>
          </a>

          {/* Nav Links */}
          <div className="hidden md:flex items-center gap-8">
            <a
              href="#features"
              id="nav-features"
              onClick={(e) => handleClick(e, "#features")}
              className="text-sm text-slate-400 hover:text-white transition-colors duration-200"
            >
              Features
            </a>
            <a
              href="#compliance"
              id="nav-compliance"
              onClick={(e) => handleClick(e, "#compliance")}
              className="text-sm text-slate-400 hover:text-white transition-colors duration-200"
            >
              Compliance
            </a>
            <a
              href="#cta"
              id="nav-cta-link"
              onClick={(e) => handleClick(e, "#cta")}
              className="text-sm text-slate-400 hover:text-white transition-colors duration-200"
            >
              Get Started
            </a>
          </div>

          {/* CTA */}
          <a
            href="#cta"
            id="nav-cta-button"
            onClick={(e) => handleClick(e, "#cta")}
            className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300"
          >
            Join Beta
            <svg
              className="w-4 h-4"
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
        </nav>
      </div>
    </header>
  );
}
