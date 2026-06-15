export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center hero-gradient grid-pattern pt-20"
    >
      {/* Decorative orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent-magenta/5 rounded-full blur-[120px] animate-float pointer-events-none" />
      <div
        className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent-cyan/5 rounded-full blur-[100px] animate-float pointer-events-none"
        style={{ animationDelay: "-3s" }}
      />

      <div className="relative z-10 mx-auto max-w-5xl px-6 lg:px-8 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/[0.03] mb-8 animate-fade-in">
          <span className="w-2 h-2 rounded-full bg-accent-cyan animate-pulse" />
          <span className="text-xs font-medium text-slate-300 tracking-wide uppercase">
            Now in Private Beta
          </span>
        </div>

        {/* Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.08] tracking-tight mb-6 animate-fade-in-up">
          Automate and Scale Your{" "}
          <br className="hidden sm:block" />
          <span className="text-gradient-brand">TikTok Shop Sales</span>{" "}
          <br className="hidden sm:block" />
          with AI.
        </h1>

        {/* Sub-headline */}
        <p
          className="max-w-2xl mx-auto text-lg sm:text-xl text-slate-400 leading-relaxed mb-10 animate-fade-in-up"
          style={{ animationDelay: "0.15s" }}
        >
          Instant responses, live catalog integration, and automated
          closing&mdash;24/7.
        </p>

        {/* CTA Buttons */}
        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up"
          style={{ animationDelay: "0.3s" }}
        >
          <a
            href="#cta"
            id="hero-cta-primary"
            className="btn-shimmer animate-shimmer px-8 py-4 rounded-full text-base font-bold text-white shadow-lg shadow-accent-magenta/20 hover:shadow-accent-magenta/40 hover:scale-105 transition-all duration-300"
          >
            Join Beta
          </a>
          <a
            href="#features"
            id="hero-cta-secondary"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-base font-medium text-slate-300 border border-white/10 hover:bg-white/5 hover:border-white/20 transition-all duration-300"
          >
            See How It Works
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
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </a>
        </div>

        {/* Trust signal */}
        <p
          className="mt-12 text-xs text-slate-500 animate-fade-in"
          style={{ animationDelay: "0.5s" }}
        >
          Built for TikTok Shop &middot; Fully Compliant &middot; Zero
          Off-Platform Redirects
        </p>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg
          className="w-5 h-5 text-slate-600"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>
    </section>
  );
}
