"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  ["Home", "#home"],
  ["About", "#about"],
  ["Skills", "#skills"],
  ["Projects", "#projects"],
  ["Services", "#services"],
  ["Contact", "#contact"],
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 z-50 w-full border-b bg-white/90 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <a href="#home" className="text-2xl font-bold">
          Suman<span className="text-gray-400">.</span>
        </a>

        <div className="hidden gap-7 md:flex">
          {links.map(([name, href]) => (
            <a
              key={href}
              href={href}
              className="text-sm text-gray-600 hover:text-black"
            >
              {name}
            </a>
          ))}
        </div>

        <a
          href="#contact"
          className="hidden rounded-full bg-gray-900 px-5 py-3 text-sm text-white md:block"
        >
          Let's Talk
        </a>

        <button onClick={() => setOpen(!open)} className="md:hidden">
          {open ? <X /> : <Menu />}
        </button>
      </nav>

      {open && (
        <div className="border-t px-6 py-4 md:hidden">
          {links.map(([name, href]) => (
            <a
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              className="block py-3 text-gray-600"
            >
              {name}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
