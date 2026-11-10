export default function About() {
  return (
    <section
      id="about"
      className="scroll-mt-20 bg-[#0B0B1A] px-6 py-28 text-white"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section Heading */}
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-purple-400">
          Get to know me
        </p>

        <h2 className="mt-4 text-4xl font-bold md:text-5xl">
          About Me
          <span className="text-purple-400">.</span>
        </h2>

        {/* Content */}
        <div className="mt-12 grid items-center gap-12 md:grid-cols-2">
          <div>
            <p className="text-base leading-8 text-gray-400 md:text-lg">
              I&apos;m Suman Biswas, a Full Stack Developer passionate about building
              clean, functional and scalable web applications. I enjoy working
              with frontend and backend technologies to create modern digital
              experiences.
            </p>

            <p className="mt-5 text-base leading-8 text-gray-400 md:text-lg">
              My goal is to write clean code, solve real-world problems and
              build responsive applications that deliver a great user
              experience.
            </p>

            <a
              href="#contact"
              className="mt-8 inline-flex items-center gap-2 rounded-lg bg-purple-600 px-6 py-3 font-semibold text-white transition duration-300 hover:bg-purple-700 hover:shadow-lg hover:shadow-purple-600/20"
            >
              Let&apos;s Connect <span>↗</span>
            </a>
          </div>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <div className="group rounded-2xl border border-white/10 bg-white/[0.03] p-7 transition duration-300 hover:-translate-y-2 hover:border-purple-500/50 hover:bg-purple-500/[0.05]">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-purple-500/10 text-purple-400">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  className="h-6 w-6"
                  aria-hidden="true"
                >
                  <rect x="3" y="7" width="18" height="13" rx="2" />
                  <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M3 12h18M10 12v2h4v-2" />
                </svg>
              </div>

              <h3 className="text-lg font-semibold text-white">Development</h3>

              <p className="mt-3 text-sm leading-6 text-gray-400">
                Full Stack Web Applications
              </p>
            </div>

            <div className="group rounded-2xl border border-white/10 bg-white/[0.03] p-7 transition duration-300 hover:-translate-y-2 hover:border-blue-500/50 hover:bg-blue-500/[0.05]">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  className="h-6 w-6"
                  aria-hidden="true"
                >
                  <circle cx="12" cy="8" r="4" />
                  <path d="M5 21v-2a7 7 0 0 1 14 0v2" />
                </svg>
              </div>

              <h3 className="text-lg font-semibold text-white">Approach</h3>

              <p className="mt-3 text-sm leading-6 text-gray-400">
                Clean & Responsive UI
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
