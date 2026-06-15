export default function Footer() {
  return (
    <footer id="footer" className="border-t border-white/5 py-10">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Logo */}
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-lg bg-linear-to-br from-accent-magenta to-purple-600 flex items-center justify-center text-xs font-bold">
              C
            </div>
            <span className="text-sm font-semibold tracking-tight">
              Clerkly{" "}
              <span className="text-violet-400 font-normal">AI</span>
            </span>
          </div>

          {/* Copyright */}
          <p className="text-xs text-slate-500">
            &copy; 2026 Clerkly AI. All rights reserved. Built for TikTok Shop.
          </p>

          {/* Links */}
          <div className="flex items-center gap-6 text-xs text-slate-500">
            <a
              href="#"
              id="footer-privacy"
              className="hover:text-slate-300 transition-colors"
            >
              Privacy
            </a>
            <a
              href="#"
              id="footer-terms"
              className="hover:text-slate-300 transition-colors"
            >
              Terms
            </a>
            <a
              href="mailto:hello@clerkly.ai"
              id="footer-contact"
              className="hover:text-slate-300 transition-colors"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
