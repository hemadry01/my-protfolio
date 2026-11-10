export default function Footer() {
  return (
    <footer className="bg-[#050609] px-5 py-8 sm:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Top Section */}
        <div className="flex flex-col items-center justify-between gap-6 border-b border-white/10 pb-8 sm:flex-row">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-cyan-500/40 bg-cyan-500/10">
              <svg
                className="h-5 w-5 text-cyan-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <rect
                  x="3"
                  y="3"
                  width="18"
                  height="18"
                  rx="2"
                  strokeWidth="1.8"
                />
                <path d="M8 7h8M7 10h.01M10 10h.01" strokeWidth="1.8" />
              </svg>
            </div>

            <div>
              <h3 className="text-base font-bold text-white">Suman Biswas</h3>
              <p className="text-xs text-blue-400/80">
                Web Developer • Modern Web Applications
              </p>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            {/* GitHub */}
            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-gray-400 transition-all duration-300 hover:border-cyan-400/50 hover:bg-cyan-400/10 hover:text-cyan-400"
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
                <path d="M12 .8a11.2 11.2 0 0 0-3.54 21.83c.56.1.76-.24.76-.54v-2.1c-3.1.67-3.76-1.32-3.76-1.32-.5-1.28-1.23-1.62-1.23-1.62-1.01-.69.08-.68.08-.68 1.12.08 1.71 1.15 1.71 1.15 1 .1.76 2.4 3.87 1.68.1-.7.4-1.18.72-1.45-2.48-.28-5.08-1.24-5.08-5.53 0-1.22.44-2.21 1.16-2.99-.12-.28-.5-1.42.11-2.95 0 0 .95-.3 3.08 1.14a10.7 10.7 0 0 1 5.6 0c2.13-1.44 3.08-1.14 3.08-1.14.61 1.53.23 2.67.11 2.95.72.78 1.16 1.77 1.16 2.99 0 4.3-2.6 5.25-5.09 5.52.4.35.76 1.02.76 2.06v3.06c0 .3.2.65.77.54A11.2 11.2 0 0 0 12 .8Z" />
              </svg>
            </a>

            {/* LinkedIn */}
            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-gray-400 transition-all duration-300 hover:border-cyan-400/50 hover:bg-cyan-400/10 hover:text-cyan-400"
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
                <path d="M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2ZM8.34 18H5.67V9.4h2.67ZM7 8.22a1.55 1.55 0 1 1 0-3.1 1.55 1.55 0 0 1 0 3.1ZM18.34 18h-2.67v-4.18c0-1-.02-2.29-1.4-2.29-1.4 0-1.62 1.1-1.62 2.22V18H9.98V9.4h2.56v1.17h.04a2.8 2.8 0 0 1 2.5-1.37c2.68 0 3.26 1.76 3.26 4.05Z" />
              </svg>
            </a>

            {/* X */}
            <a
              href="https://x.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X"
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-gray-400 transition-all duration-300 hover:border-cyan-400/50 hover:bg-cyan-400/10 hover:text-cyan-400"
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
                <path d="M18.9 2H22l-6.78 7.75L23.2 22h-6.25l-4.9-7.38L5.6 22H2.45l7.25-8.29L1.8 2h6.4l4.43 6.75L18.9 2Zm-1.1 17.9h1.73L7.27 3.98H5.4Z" />
              </svg>
            </a>

            {/* Email */}
            <a
              href="mailto:sumanb843@gmail.com"
              aria-label="Email"
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-gray-400 transition-all duration-300 hover:border-cyan-400/50 hover:bg-cyan-400/10 hover:text-cyan-400"
            >
              <svg
                viewBox="0 0 24 24"
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
              >
                <rect x="3" y="5" width="18" height="14" rx="2" />
                <path d="m3 7 9 6 9-6" />
              </svg>
            </a>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col items-center justify-between gap-5 pt-8 text-center sm:flex-row sm:text-left">
          <p className="text-xs leading-relaxed text-blue-400/70">
            © 2026 Suman. All rights reserved. Built with Next.js & Tailwind
            CSS.
          </p>

          {/* Back to Top */}
          <a
            href="#top"
            className="group flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.03] px-4 py-2.5 text-xs font-medium text-gray-300 transition-all duration-300 hover:border-cyan-400/40 hover:bg-cyan-400/10 hover:text-cyan-400"
          >
            Back to top
            <svg
              className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-1"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="m18 15-6-6-6 6" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}
