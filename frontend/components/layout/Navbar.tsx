
"use client";

import { useState } from "react";
import Link from "next/link";
import { FaCompass, FaBars, FaXmark } from "react-icons/fa6";

const links = [
  { label: "Home", href: "#home" },
  { label: "Discover", href: "#discover" },
  { label: "Experiences", href: "#experiences" },
  { label: "Vendors", href: "#vendors" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-sky-100 bg-white/90 backdrop-blur-xl">
      <div className="container-xplore flex h-[66px] items-center justify-between gap-5">
        <Link
          href="#home"
          className="flex shrink-0 items-center gap-2 text-[19px] font-extrabold tracking-tight text-[#172b43]"
          onClick={() => setMenuOpen(false)}
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-sky-500 text-white">
            <FaCompass className="text-sm" />
          </span>
          Xplore
        </Link>

        <nav className="hidden items-center gap-5 xl:flex">
          {links.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-[11px] font-semibold text-slate-600 transition-colors hover:text-sky-600"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden shrink-0 items-center gap-2 sm:flex">
          <Link
            href="/login"
            className="rounded-lg px-3 py-2 text-xs font-bold text-slate-700 transition-colors hover:bg-sky-50"
          >
            Sign In
          </Link>
          <Link href="#trip-planner" className="btn-primary min-h-9 px-4">
            Get Started
          </Link>
        </div>

        <button
          type="button"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
          className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-700 xl:hidden"
        >
          {menuOpen ? <FaXmark /> : <FaBars />}
        </button>
      </div>

      {menuOpen && (
        <div className="border-t border-sky-100 bg-white px-5 py-4 xl:hidden">
          <nav className="container-xplore flex flex-col gap-1">
            {links.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="rounded-lg px-3 py-2.5 text-sm font-semibold text-slate-700 hover:bg-sky-50 hover:text-sky-600"
              >
                {link.label}
              </Link>
            ))}

            <div className="mt-2 flex gap-2 border-t border-slate-100 pt-3 sm:hidden">
              <Link
                href="/login"
                onClick={() => setMenuOpen(false)}
                className="btn-secondary flex-1"
              >
                Sign In
              </Link>
              <Link
                href="#trip-planner"
                onClick={() => setMenuOpen(false)}
                className="btn-primary flex-1"
              >
                Get Started
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
