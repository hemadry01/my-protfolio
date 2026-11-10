import Image from "next/image";

import DevStack from "@/app/assets/devstack.png";
import Fit from "@/app/assets/fit.png";
import Bazzar from "@/app/assets/bazar.png";

const projects = [
  {
    title: "DevStack — Interactive Tech Stack Builder",
    description:
      "An interactive developer utility to explore web technologies, assemble customized project stacks, and manage dev toolchains in real time.",
    tech: ["React", "Vite", "Tailwind CSS", "JavaScript"],
    image: DevStack,
    link: "https://rad-pastelito-541796.netlify.app/",
    githubLink: "https://github.com/hemadry01/dev-stack-project",
  },
  {
    title: "FitLog — Workout Library & Gym Companion",
    description:
      "A dark-themed fitness companion and workout planner to browse lift libraries, create personalized routines, and track daily sets.",
    tech: ["Next.js", "React", "Tailwind CSS", "TypeScript"],
    image: Fit,
    link: "https://fit-app-ctah-two.vercel.app/",
    githubLink: "https://github.com/hemadry01/fit-app",
  },
  {
    title: "Bazardor",
    description:
      "An e-commerce price tracking and smart shopping solution platform.",
    tech: [
      "Next.js",
      "Better Auth",
      "MongoDB Atlas",
      "Tailwind CSS",
      "TypeScript",
    ],
    image: Bazzar,
    link: "https://bazar-dor-psi-beige.vercel.app/",
    githubLink: "https://github.com/hemadry01/bazar-dor",
  },
];

// External Link Icon
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

// GitHub Icon
function GithubIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-5 w-5"
      aria-hidden="true"
    >
      <path d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.56.1.76-.24.76-.54v-2.1c-3.1.67-3.76-1.32-3.76-1.32-.5-1.29-1.23-1.63-1.23-1.63-1.01-.69.08-.68.08-.68 1.12.08 1.71 1.15 1.71 1.15 1 1.7 2.63 1.21 3.27.93.1-.72.39-1.21.71-1.49-2.47-.28-5.07-1.23-5.07-5.48 0-1.21.43-2.2 1.15-2.98-.12-.28-.5-1.42.11-2.95 0 0 .94-.3 3.06 1.14a10.6 10.6 0 0 1 5.57 0c2.12-1.44 3.05-1.14 3.05-1.14.61 1.53.23 2.67.12 2.95.71.78 1.14 1.77 1.14 2.98 0 4.26-2.61 5.19-5.09 5.47.4.35.76 1.02.76 2.06v3.09c0 .3.2.65.77.54A11.1 11.1 0 0 0 12 .9Z" />
    </svg>
  );
}

export default function Projects() {
  return (
    <section
      id="projects"
      className="scroll-mt-20 bg-[#0B0B1A] px-6 py-24 text-white md:py-28"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section Heading */}
        <div className="mb-14">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-purple-400">
            Selected Work
          </p>

          <h2 className="mt-4 text-4xl font-bold md:text-5xl">
            My Projects
            <span className="text-purple-400">.</span>
          </h2>

          <p className="mt-5 max-w-2xl leading-8 text-gray-400">
            Here are some projects that showcase my skills, creativity, and
            passion for building modern web applications.
          </p>
        </div>

        {/* Project Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <article
              key={project.title}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-[#0D0D20] p-5 transition-all duration-500 hover:-translate-y-2 hover:border-purple-500/40 hover:shadow-2xl hover:shadow-purple-950/30"
            >
              {/* Background Glow */}
              <div className="pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full bg-purple-600/10 blur-3xl transition duration-500 group-hover:bg-purple-600/20" />

              {/* Project Image */}
              <div className="relative aspect-video overflow-hidden rounded-2xl border border-white/10 bg-[#17152F]">
                {project.image ? (
                  <Image
                    src={project.image}
                    alt={`${project.title} preview`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                ) : (
                  <div className="flex h-full items-center justify-center text-sm font-medium text-gray-500">
                    Preview unavailable
                  </div>
                )}

                {/* Image Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#080816]/70 via-transparent to-transparent" />

                {/* Project Number */}
                <span className="absolute right-4 top-4 rounded-full border border-white/10 bg-[#080816]/80 px-3 py-1 text-xs font-semibold text-gray-300 backdrop-blur-md">
                  0{index + 1}
                </span>

                {/* Featured Badge */}
                <span className="absolute bottom-4 left-4 rounded-full border border-purple-400/20 bg-purple-500/20 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-purple-300 backdrop-blur-md">
                  Featured Project
                </span>
              </div>

              {/* Project Details */}
              <div className="relative pt-6">
                {/* Project Label */}
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-purple-400">
                  Project 0{index + 1}
                </p>

                {/* Title */}
                <h3 className="mt-3 text-xl font-bold leading-snug text-white transition-colors duration-300 group-hover:text-purple-300">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="mt-3 min-h-[84px] text-sm leading-7 text-gray-400">
                  {project.description}
                </p>

                {/* Technology Cards */}
                <div className="mt-5 border-t border-white/10 pt-5">
                  <p className="mb-3 text-[11px] font-semibold uppercase tracking-widest text-gray-500">
                    Technologies Used
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((technology) => (
                      <span
                        key={technology}
                        className="rounded-lg border border-purple-500/20 bg-purple-500/10 px-3 py-2 text-xs font-medium text-purple-300 transition-all duration-300 hover:border-purple-400/50 hover:bg-purple-500/20 hover:text-white"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="mt-7 flex gap-3">
                  {/* Live Demo */}
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 px-3 py-3 text-sm font-semibold text-white shadow-lg shadow-purple-900/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-purple-700/30"
                  >
                    Live Demo
                    <ExternalLinkIcon />
                  </a>

                  {/* GitHub */}
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View ${project.title} source code on GitHub`}
                    className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm font-semibold text-gray-300 transition-all duration-300 hover:-translate-y-1 hover:border-purple-400/50 hover:bg-purple-500/10 hover:text-white"
                  >
                    <GithubIcon />
                    GitHub
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
