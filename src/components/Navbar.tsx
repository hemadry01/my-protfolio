"use client";

import { useState } from "react";

const links = [
  ["Home", "#home"],
  ["About", "#about"],
  ["Skills", "#skills"],
  ["Projects", "#projects"],
  ["Services", "#services"],
  ["Contact", "#contact"],
];

function MenuIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      className="h-6 w-6"
      aria-hidden="true"
    >
      <path d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      className="h-6 w-6"
      aria-hidden="true"
    >
      <path d="m18 6-12 12M6 6l12 12" />
    </svg>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#080816]/85 text-white shadow-lg shadow-black/10 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <a
          href="#home"
          className="text-2xl font-bold tracking-tight"
          onClick={() => setOpen(false)}
        >
          Suman<span className="text-purple-400">.</span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          {links.map(([name, href]) => (
            <a
              key={href}
              href={href}
              className="text-sm font-medium text-gray-300 transition-colors duration-200 hover:text-purple-400"
            >
              {name}
            </a>
          ))}
        </div>

        {/* Contact Button */}
        <a
          href="#contact"
          className="hidden rounded-full bg-purple-600 px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-purple-700 hover:shadow-lg hover:shadow-purple-600/30 md:inline-flex"
        >
          Let&apos;s Talk <span className="ml-2">↗</span>
        </a>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setOpen((prev) => !prev)}
          className="rounded-lg border border-white/10 p-2 text-gray-200 transition hover:border-purple-400 hover:text-purple-400 md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <CloseIcon /> : <MenuIcon />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {open && (
        <div className="border-t border-white/10 bg-[#080816] px-6 py-4 md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col">
            {links.map(([name, href]) => (
              <a
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className="border-b border-white/5 py-3 text-sm font-medium text-gray-300 transition hover:pl-2 hover:text-purple-400"
              >
                {name}
              </a>
            ))}

            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-4 rounded-lg bg-purple-600 px-5 py-3 text-center text-sm font-semibold text-white transition hover:bg-purple-700"
            >
              Let&apos;s Talk ↗
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
