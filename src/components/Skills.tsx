const skillGroups = [
  {
    title: "Frontend Development",
    skills: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "TypeScript",
      "React.js",
      "Next.js",
      "Tailwind CSS",
    ],
  },
  {
    title: "Backend Development",
    skills: ["Node.js", "Express.js", "REST API"],
  },
  {
    title: "Database",
    skills: ["MongoDB", "Mongoose"],
  },
  {
    title: "Tools & Others",
    skills: ["Git", "GitHub", "VS Code", "Postman", "Figma"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="bg-[#0B0B1A] py-20 px-6 text-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-3">
          Skills & Technologies
          <span className="text-purple-400">.</span>
        </h2>

        <p className="text-center text-gray-400 mb-12">
          Technologies I work with
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {skillGroups.map((group, index) => (
            <div
              key={group.title}
              className="p-6 rounded-2xl border border-white/10 bg-white/[0.03] transition duration-300 hover:-translate-y-1 hover:border-purple-500/40 hover:bg-purple-500/[0.04]"
            >
              <h3 className="text-xl font-semibold mb-5 text-purple-400">
                {group.title}
              </h3>

              <div className="flex flex-wrap gap-3">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 rounded-lg bg-purple-500/10 border border-purple-500/20 text-purple-200 text-sm font-medium transition duration-300 hover:bg-purple-600 hover:text-white hover:border-purple-500"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
