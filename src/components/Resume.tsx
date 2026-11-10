export default function Resume() {
  return (
    <section className="bg-[#0B0B1A] px-6 py-20 text-white">
      <div className="relative mx-auto flex max-w-7xl flex-col justify-between gap-8 overflow-hidden rounded-3xl border border-purple-500/20 bg-gradient-to-br from-purple-600/15 via-[#111126] to-blue-600/10 p-8 md:flex-row md:items-center md:p-12">
        {/* Background Glow */}
        <div className="pointer-events-none absolute -right-20 -top-24 h-64 w-64 rounded-full bg-purple-600/10 blur-3xl" />

        {/* Resume Content */}
        <div className="relative">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-purple-400">
            Want to know more?
          </p>

          <h2 className="mt-4 text-3xl font-bold md:text-4xl">
            Check My Resume
            <span className="text-purple-400">.</span>
          </h2>

          <p className="mt-4 max-w-xl leading-7 text-gray-400">
            Download my CV to learn more about my experience, technical skills
            and professional journey.
          </p>
        </div>

        {/* Download Button */}
        <a
          href="/resume.pdf"
          download
          className="relative inline-flex shrink-0 items-center justify-center gap-3 rounded-full bg-purple-600 px-8 py-4 font-semibold text-white shadow-lg shadow-purple-900/30 transition-all duration-300 hover:-translate-y-1 hover:bg-purple-700 hover:shadow-purple-600/30"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="h-5 w-5"
            aria-hidden="true"
          >
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            <path d="m7 10 5 5 5-5M12 15V3" />
          </svg>
          Download CV
        </a>
      </div>
    </section>
  );
}
