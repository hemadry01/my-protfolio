const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React.js",
  "Next.js",
  "Tailwind CSS",
  "Node.js",
  "Express.js",
  "MongoDB",
  "Git",
  "GitHub",
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="scroll-mt-20 bg-[#080816] px-6 py-28 text-white"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section Heading */}
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-purple-400">
          What I work with
        </p>

        <h2 className="mt-4 text-4xl font-bold md:text-5xl">
          My Skills
          <span className="text-purple-400">.</span>
        </h2>

        <p className="mt-5 max-w-2xl leading-8 text-gray-400">
          Technologies and tools I use to build modern, responsive and scalable
          web applications.
        </p>

        {/* Skills List */}
        <div className="mt-12 flex flex-wrap gap-4">
          {skills.map((skill) => (
            <span
              key={skill}
              className="cursor-default rounded-xl border border-purple-500/20 bg-white/[0.03] px-6 py-3 text-sm font-medium text-gray-300 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-purple-400/60 hover:bg-purple-500/10 hover:text-purple-300 hover:shadow-lg hover:shadow-purple-900/20"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
