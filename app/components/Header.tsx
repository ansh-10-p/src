"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { NavIcon } from "./Icons";

const navLinks = [
  { href: "#home", label: "Home", icon: "home", hideMobile: true },
  { href: "#about", label: "About", icon: "about" },
  { href: "#experience", label: "Experience", icon: "experience" },
  { href: "#achievements", label: "Achievements", icon: "achievements", hideMobile: true },
  { href: "#lab", label: "Projects", icon: "projects" },
];

export default function Header(): React.JSX.Element {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#110720]/90 backdrop-blur-xl border-b border-purple-500/25 shadow-lg shadow-purple-900/20"
          : "bg-gradient-to-b from-[#110720] via-[#110720]/95 to-transparent border-b border-purple-500/10"
      }`}
    >
      <nav className="px-4 sm:px-6 py-3.5">
        <div className="container mx-auto max-w-6xl flex items-center justify-between">
          <Link href="/" className="group flex items-center gap-3">
            <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-purple-800 flex items-center justify-center border border-purple-400/40 group-hover:border-purple-300 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-purple-500/40 group-hover:scale-105">
              <span className="text-white font-bold text-sm tracking-tight">AP</span>
              <div className="absolute inset-0 rounded-xl bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <div className="hidden sm:flex flex-col">
              <span className="text-base font-bold text-white group-hover:text-purple-200 transition-colors">Ansh Pandey</span>
              <span className="text-xs text-purple-400/80 font-medium">Full-Stack Developer</span>
            </div>
          </Link>

          <ul className="hidden lg:flex items-center gap-1 list-none m-0 p-0">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="flex items-center gap-1.5 px-3.5 py-2 text-white/80 hover:text-white rounded-lg hover:bg-white/5 transition-all duration-300 text-sm font-medium group"
                >
                  <span className="text-purple-400/70 group-hover:text-purple-300 transition-colors">
                    <NavIcon name={link.icon} />
                  </span>
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="ml-2">
              <a
                href="#contact"
                className="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-500 hover:to-purple-600 text-white font-semibold rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/40 border border-purple-400/30 text-sm group"
              >
                <NavIcon name="contact" />
                <span>Contact</span>
              </a>
            </li>
          </ul>

          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden relative w-10 h-10 flex items-center justify-center rounded-xl border border-purple-500/30 bg-white/5 text-white hover:border-purple-400/50 transition-all"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`lg:hidden fixed inset-x-0 top-[65px] bottom-0 bg-[#110720]/98 backdrop-blur-xl border-t border-purple-500/20 transition-all duration-400 ${
          menuOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
        }`}
      >
        <ul className="flex flex-col p-6 gap-2">
          {navLinks.map((link, i) => (
            <li key={link.href}>
              <Link
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="flex items-center gap-3 px-4 py-3.5 rounded-xl text-white/90 hover:text-white hover:bg-white/5 border border-transparent hover:border-purple-500/20 transition-all animate-fadeInUp"
                style={{ animationDelay: `${i * 0.05}s` }}
              >
                <span className="w-9 h-9 rounded-lg bg-purple-600/20 border border-purple-500/30 flex items-center justify-center text-purple-300">
                  <NavIcon name={link.icon} />
                </span>
                <span className="font-medium">{link.label}</span>
              </Link>
            </li>
          ))}
          <li className="mt-4">
            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="flex items-center justify-center gap-2 w-full px-5 py-3.5 bg-gradient-to-r from-purple-600 to-purple-700 text-white font-semibold rounded-xl border border-purple-400/30"
            >
              <NavIcon name="contact" />
              Contact Me
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
