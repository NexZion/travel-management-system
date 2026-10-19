"use client";

import Link from "next/link";
import { useState } from "react";
import { FiCompass, FiMenu, FiX } from "react-icons/fi";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Destinations", href: "#destinations" },
  { label: "Experiences", href: "#experiences" },
  { label: "About Us", href: "#about" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="relative z-50 w-full bg-[#F0FCFD]">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8 lg:px-12"
        aria-label="Main navigation"
      >
        <Link href="/" className="flex items-center gap-2">
          <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#0EA5E9] text-white">
            <FiCompass size={18} />
          </span>
          <span className="text-xl font-bold tracking-tight text-[#172B45]">
            Xplore
          </span>
        </Link>

        <div className="hidden items-center gap-5 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-xs font-medium text-[#334155] transition-colors hover:text-[#0EA5E9]"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden items-center gap-2 md:flex">
          <Link
            href="/login"
            className="rounded-lg border border-[#D9E9EF] bg-white px-4 py-2 text-xs font-semibold text-[#172B45] transition-colors hover:bg-[#E8F8FC]"
          >
            Sign In
          </Link>
          <Link
            href="/register"
            className="rounded-lg bg-[#0EA5E9] px-4 py-2 text-xs font-semibold text-white transition-colors hover:bg-[#0284C7]"
          >
            Get Started
          </Link>
        </div>

        <button
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
          className="rounded-lg p-2 text-[#172B45] hover:bg-[#E0F5FA] md:hidden"
        >
          {menuOpen ? <FiX size={22} /> : <FiMenu size={22} />}
        </button>
      </nav>

      {menuOpen && (
        <div className="border-t border-[#D9E9EF] bg-[#F0FCFD] px-5 py-4 md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="rounded-lg px-3 py-3 text-sm font-medium text-[#334155] hover:bg-[#E0F5FA]"
              >
                {link.label}
              </Link>
            ))}

            <Link
              href="/login"
              onClick={() => setMenuOpen(false)}
              className="rounded-lg px-3 py-3 text-sm font-semibold text-[#172B45] hover:bg-[#E0F5FA]"
            >
              Sign In
            </Link>

            <Link
              href="/register"
              onClick={() => setMenuOpen(false)}
              className="mt-2 rounded-lg bg-[#0EA5E9] px-5 py-3 text-center text-sm font-semibold text-white hover:bg-[#0284C7]"
            >
              Get Started
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}