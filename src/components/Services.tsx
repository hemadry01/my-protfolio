const services = [
  {
    title: "Frontend Development",
    description:
      "Responsive and interactive interfaces using React and Next.js.",
    icon: "frontend",
  },
  {
    title: "Backend Development",
    description: "Secure APIs, server-side logic and database integration.",
    icon: "backend",
  },
  {
    title: "Full Stack Development",
    description: "Complete web applications from frontend to backend.",
    icon: "fullstack",
  },
];

function ServiceIcon({ type }: { type: string }) {
  const iconClass = "h-8 w-8";

  if (type === "frontend") {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        className={iconClass}
        aria-hidden="true"
      >
        <rect x="3" y="4" width="18" height="16" rx="2" />
        <path d="M3 9h18M8 6.5h.01M11 6.5h.01M9 14l-2 2 2 2m6-4 2 2-2 2" />
      </svg>
    );
  }

  if (type === "backend") {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        className={iconClass}
        aria-hidden="true"
      >
        <ellipse cx="12" cy="5" rx="8" ry="3" />
        <path d="M4 5v7c0 1.66 3.58 3 8 3s8-1.34 8-3V5M4 12v7c0 1.66 3.58 3 8 3s8-1.34 8-3v-7" />
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      className={iconClass}
      aria-hidden="true"
    >
      <path d="M8 6h13M8 12h13M8 18h13" />
      <circle cx="4" cy="6" r="1" />
      <circle cx="4" cy="12" r="1" />
      <circle cx="4" cy="18" r="1" />
    </svg>
  );
}

export default function Services() {
  return (
    <section
      id="services"
      className="scroll-mt-20 bg-[#080816] px-6 py-28 text-white"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section Heading */}
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-purple-400">
          How I can help
        </p>

        <h2 className="mt-4 text-4xl font-bold md:text-5xl">
          My Services
          <span className="text-purple-400">.</span>
        </h2>

        <p className="mt-5 max-w-2xl leading-8 text-gray-400">
          I provide modern web development solutions to help turn ideas into
          functional and user-friendly digital products.
        </p>

        {/* Service Cards */}
        <div className="mt-12 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <article
              key={service.title}
              className="group rounded-3xl border border-white/10 bg-white/[0.03] p-8 transition-all duration-300 hover:-translate-y-2 hover:border-purple-500/40 hover:bg-purple-500/[0.04] hover:shadow-xl hover:shadow-purple-950/30"
            >
              {/* Icon */}
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-purple-500/20 bg-purple-500/10 text-purple-400 transition-all duration-300 group-hover:border-purple-400/40 group-hover:bg-purple-500/20 group-hover:text-purple-300">
                <ServiceIcon type={service.icon} />
              </div>

              {/* Content */}
              <p className="mt-8 text-xs font-semibold uppercase tracking-widest text-purple-400">
                0{index + 1} / Service
              </p>

              <h3 className="mt-3 text-xl font-semibold text-white transition group-hover:text-purple-300">
                {service.title}
              </h3>

              <p className="mt-4 leading-7 text-gray-400">
                {service.description}
              </p>

              {/* Bottom Accent */}
              <div className="mt-8 h-1 w-12 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 transition-all duration-300 group-hover:w-24" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
