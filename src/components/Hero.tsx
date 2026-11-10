"use client";

import Image from "next/image";
import SB from "@/app/assets/suman.png";

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/hemadry01",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.56.1.76-.24.76-.54v-2.1c-3.1.67-3.76-1.32-3.76-1.32-.5-1.29-1.23-1.63-1.23-1.63-1.01-.69.08-.68.08-.68 1.12.08 1.71 1.15 1.71 1.15 1 1.7 2.63 1.21 3.27.93.1-.72.39-1.21.71-1.49-2.47-.28-5.07-1.23-5.07-5.48 0-1.21.43-2.2 1.15-2.98-.12-.28-.5-1.42.11-2.95 0 0 .94-.3 3.06 1.14a10.6 10.6 0 0 1 5.57 0c2.12-1.44 3.05-1.14 3.05-1.14.61 1.53.23 2.67.12 2.95.71.78 1.14 1.77 1.14 2.98 0 4.26-2.61 5.19-5.09 5.47.4.35.76 1.02.76 2.06v3.09c0 .3.2.65.77.54A11.1 11.1 0 0 0 12 .9Z" />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/sumanbiswas-mern/",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M20.45 2H3.55C2.69 2 2 2.68 2 3.52v16.96c0 .84.69 1.52 1.55 1.52h16.9c.86 0 1.55-.68 1.55-1.52V3.52c0-.84-.69-1.52-1.55-1.52ZM8.1 18.9H5.13V9.34H8.1v9.56ZM6.62 8.04a1.72 1.72 0 1 1 0-3.44 1.72 1.72 0 0 1 0 3.44ZM18.9 18.9h-2.97v-4.65c0-1.11-.02-2.54-1.55-2.54-1.55 0-1.79 1.21-1.79 2.46v4.73H9.62V9.34h2.85v1.31h.04c.4-.75 1.37-1.55 2.82-1.55 3.01 0 3.57 1.98 3.57 4.55v5.25Z" />
      </svg>
    ),
  },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-[#080816] px-5 py-24 text-white sm:px-8"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full bg-purple-600/10 blur-[120px]" />
      <div className="pointer-events-none absolute -right-40 bottom-10 h-80 w-80 rounded-full bg-blue-600/10 blur-[120px]" />

      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-14 md:grid-cols-2 md:gap-10 lg:gap-20">
        {/* Left Content */}
        <div className="order-2 text-center md:order-1 md:text-left">
          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.3em] text-purple-400">
            Hello, I&apos;m
          </p>

          <h1 className="text-5xl font-extrabold leading-tight sm:text-6xl lg:text-7xl">
            Suman
            <span className="block bg-gradient-to-r from-purple-400 via-purple-300 to-blue-400 bg-clip-text text-transparent">
              Biswas
            </span>
          </h1>

          <h2 className="mt-5 text-xl font-semibold text-gray-200 sm:text-2xl">
            Full Stack Developer
          </h2>

          <p className="mx-auto mt-6 max-w-xl text-sm leading-8 text-gray-400 sm:text-base md:mx-0">
            I build modern, responsive and user-friendly web applications with
            clean code and thoughtful design.
          </p>

          {/* Action Buttons */}
          <div className="mt-9 flex flex-wrap justify-center gap-4 md:justify-start">
            <a
              href="#projects"
              className="rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-purple-900/30 transition duration-300 hover:-translate-y-1 hover:shadow-purple-700/30"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="rounded-xl border border-white/15 bg-white/[0.03] px-7 py-3.5 text-sm font-semibold text-gray-200 transition duration-300 hover:-translate-y-1 hover:border-purple-400 hover:text-purple-400"
            >
              Contact Me
            </a>
          </div>

          {/* Social Links */}
          <div className="mt-9 flex items-center justify-center gap-4 md:justify-start">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-gray-400 transition duration-300 hover:-translate-y-1 hover:border-purple-400/50 hover:bg-purple-500/10 hover:text-purple-400"
              >
                <span className="h-5 w-5">{social.icon}</span>
              </a>
            ))}
          </div>
        </div>

        {/* Right Profile Card */}
        <div className="order-1 flex justify-center md:order-2">
          <div className="relative w-full max-w-[360px] sm:max-w-[420px]">
            {/* Image Glow */}
            <div className="absolute -inset-2 rounded-[26px] bg-gradient-to-br from-purple-600/30 to-blue-600/30 blur-xl" />

            {/* Image Container */}
            <div className="relative h-[430px] w-full overflow-hidden rounded-[24px] border border-white/20 bg-[#111126] shadow-2xl sm:h-[500px]">
              <Image
                src={SB}
                alt="Suman Biswas - Web Developer"
                fill
                priority
                sizes="(max-width: 640px) 100vw, 420px"
                className="object-cover object-center"
              />

              {/* Bottom Gradient */}
              <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/70 to-transparent" />

              {/* Information Card */}
              <div className="absolute bottom-4 left-4 right-4 flex items-center gap-3 rounded-2xl border border-white/10 bg-[#080b10]/95 p-4 shadow-xl backdrop-blur-xl sm:bottom-5 sm:left-5 sm:right-5">
                {/* Developer Icon */}
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-cyan-500/40 bg-cyan-500/10">
                  <svg
                    className="h-5 w-5 text-cyan-400"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                  >
                    <rect x="3" y="3" width="18" height="18" rx="2" />
                    <path d="M8 7h8M7 10h.01M10 10h.01" />
                  </svg>
                </div>

                {/* Developer Information */}
                <div className="min-w-0">
                  <h3 className="text-sm font-bold text-white">
                    Web Developer
                  </h3>

                  <p className="mt-1 text-xs text-blue-200/70">
                     Khulna, Bangladesh
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
