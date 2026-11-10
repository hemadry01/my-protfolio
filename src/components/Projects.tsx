const projects = [
  {
    title: "E-commerce Website",
    description:
      "A modern online shopping platform with a clean interface and smooth shopping experience.",
    tech: "Next.js · Tailwind CSS · MongoDB",
    link: "#",
  },
  {
    title: "Task Management App",
    description:
      "An application to organize daily tasks and improve productivity.",
    tech: "React · Node.js · Express",
    link: "#",
  },
  {
    title: "Portfolio Website",
    description:
      "A responsive personal portfolio website with modern design and smooth navigation.",
    tech: "Next.js · Tailwind CSS",
    link: "#",
  },
];

function ProjectIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      className="h-12 w-12"
      aria-hidden="true"
    >
      <rect x="3" y="4" width="18" height="16" rx="2" />
      <path d="m8 10 3 2-3 2m5 0h3" />
    </svg>
  );
}

function ExternalLinkIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      className="h-4 w-4"
      aria-hidden="true"
    >
      <path d="M14 3h7v7M10 14 21 3" />
      <path d="M19 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h6" />
    </svg>
  );
}

export default function Projects() {
  return (
    <section
      id="projects"
      className="scroll-mt-20 bg-[#0B0B1A] px-6 py-28 text-white"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section Heading */}
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-purple-400">
          Selected work
        </p>

        <h2 className="mt-4 text-4xl font-bold md:text-5xl">
          My Projects
          <span className="text-purple-400">.</span>
        </h2>

        <p className="mt-5 max-w-2xl leading-8 text-gray-400">
          Here are some projects that showcase my skills, creativity and passion
          for building modern web applications.
        </p>

        {/* Project Cards */}
        <div className="mt-12 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <article
              key={project.title}
              className="group rounded-3xl border border-white/10 bg-white/[0.03] p-5 transition-all duration-300 hover:-translate-y-2 hover:border-purple-500/40 hover:shadow-xl hover:shadow-purple-950/30"
            >
              {/* Project Preview */}
              <div className="relative flex aspect-video items-center justify-center overflow-hidden rounded-2xl border border-white/5 bg-gradient-to-br from-purple-600/20 via-[#17152F] to-blue-600/20">
                <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/10 to-blue-500/10 opacity-0 transition duration-500 group-hover:opacity-100" />

                <div className="relative flex h-20 w-20 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-purple-300 backdrop-blur-sm transition duration-300 group-hover:scale-110 group-hover:text-blue-300">
                  <ProjectIcon />
                </div>

                <span className="absolute right-4 top-4 rounded-full border border-white/10 bg-black/20 px-3 py-1 text-xs text-gray-300">
                  0{index + 1}
                </span>
              </div>

              {/* Project Details */}
              <div className="pt-6">
                <p className="text-xs font-semibold uppercase tracking-widest text-purple-400">
                  0{index + 1} / Project
                </p>

                <h3 className="mt-3 text-xl font-semibold text-white transition group-hover:text-purple-300">
                  {project.title}
                </h3>

                <p className="mt-3 min-h-[72px] text-sm leading-7 text-gray-400">
                  {project.description}
                </p>

                <p className="mt-5 border-t border-white/10 pt-4 text-xs leading-6 text-gray-500">
                  {project.tech}
                </p>

                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-purple-400 transition hover:gap-3 hover:text-purple-300"
                >
                  View Project
                  <ExternalLinkIcon />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
