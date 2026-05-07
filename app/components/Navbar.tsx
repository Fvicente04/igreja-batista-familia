"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const links = [
  { label: "Início", href: "/#inicio" },
  { label: "Quem Somos", href: "/#sobre" },
  { label: "Cultos", href: "/#cultos" },
  { label: "Eventos", href: "/#eventos" },
  { label: "Galeria", href: "/galeria" },
  { label: "Localização", href: "/#localizacao" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm border-b border-white/10">
      <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/#inicio" className="flex items-center gap-3">
          <Image src="/logo.jpg" alt="Igreja Batista Família" width={40} height={40} className="rounded-full object-cover shrink-0" />
          <span className="hidden sm:block text-white font-semibold text-sm leading-tight">
            Igreja Batista <span className="text-amber-400">da Família</span>
          </span>
        </Link>

        <ul className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className="text-sm text-white/70 hover:text-white transition-colors"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <Link
          href="/#cultos"
          className="hidden md:inline-flex h-9 items-center px-5 rounded-full bg-amber-400 text-black text-sm font-semibold hover:bg-amber-300 transition-colors"
        >
          Venha nos visitar
        </Link>

        <button
          className="md:hidden text-white p-2"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          <span className={`block w-5 h-0.5 bg-white mb-1 transition-all ${open ? "rotate-45 translate-y-1.5" : ""}`} />
          <span className={`block w-5 h-0.5 bg-white mb-1 transition-all ${open ? "opacity-0" : ""}`} />
          <span className={`block w-5 h-0.5 bg-white transition-all ${open ? "-rotate-45 -translate-y-1.5" : ""}`} />
        </button>
      </nav>

      {open && (
        <div className="md:hidden bg-black border-t border-white/10 px-6 py-4 flex flex-col gap-4">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-white/70 hover:text-white text-sm transition-colors"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/#cultos"
            className="mt-2 inline-flex h-9 items-center justify-center px-5 rounded-full bg-amber-400 text-black text-sm font-semibold"
            onClick={() => setOpen(false)}
          >
            Venha nos visitar
          </Link>
        </div>
      )}
    </header>
  );
}
