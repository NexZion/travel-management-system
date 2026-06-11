"use client";

import { useEffect, useState } from "react";
import { FaCompass, FaBars, FaXmark } from "react-icons/fa6";

const links = [
  { label: "Home", href: "#" },
  { label: "Discover", href: "#discover" },
  { label: "Experiences", href: "#experiences" },
  { label: "Vendors", href: "#vendors" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
        scrolled
          ? "bg-[#FAF9F5]/0 border-b border-neutral-200/0 pt-3"
          : "bg-[#FAF9F5]/80 backdrop-blur-md border-b border-neutral-200/40"
      }`}
    >
      <div
        className={`flex items-center justify-between rounded-full border transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          scrolled
            ? "max-w-5xl mx-4 lg:mx-auto h-16 px-6 bg-[#FAF9F5]/50 backdrop-blur-xl border-white/50 shadow-lg shadow-black/5"
            : "max-w-7xl mx-auto h-20 px-4 sm:px-6 lg:px-8 bg-[#FAF9F5]/0 border-white/0"
        }`}
      >
        <div className="flex items-center gap-10">
          <a
            href="#"
            className="text-2xl font-extrabold tracking-tight text-neutral-900 flex items-center gap-2 group"
          >
            <span className="w-8 h-8 rounded-full bg-[#ac683f] text-white flex items-center justify-center text-sm shadow-md shadow-[#ac683f]/20 group-hover:rotate-45 transition-transform duration-500">
              <FaCompass />
            </span>
            Xplore
          </a>
          <nav className="hidden lg:flex items-center gap-8 text-sm font-semibold text-neutral-600">
            {links.map((link, i) => (
              <a
                key={link.label}
                href={link.href}
                className={`nav-link-interact transition-colors ${
                  i === 0 ? "text-[#ac683f]" : "hover:text-[#ac683f]"
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="hidden lg:flex items-center gap-4">
          <button className="text-sm font-semibold text-neutral-700 hover:text-[#ac683f] transition-colors cursor-pointer nav-link-interact">
            Sign In
          </button>
          <a
            href="#search-bar"
            className="bg-[#ac683f] hover:bg-[#925430] text-white text-sm font-semibold px-6 py-2.5 rounded-full shadow-md hover:shadow-lg shadow-[#ac683f]/10 hover:shadow-[#ac683f]/20 transition-all transform hover:-translate-y-0.5 cursor-pointer"
          >
            Get Started
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((o) => !o)}
          className="lg:hidden flex items-center justify-center w-10 h-10 rounded-full text-neutral-800 hover:bg-black/5 transition-colors text-lg"
        >
          {menuOpen ? <FaXmark /> : <FaBars />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <nav className="lg:hidden border-t border-neutral-200/40 bg-[#FAF9F5]/95 backdrop-blur-md px-4 sm:px-6 py-4">
          <ul className="flex flex-col gap-1 text-sm font-semibold text-neutral-700">
            {links.map((link, i) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className={`block px-3 py-2.5 rounded-lg hover:bg-black/5 transition-colors ${
                    i === 0 ? "text-[#ac683f]" : "hover:text-[#ac683f]"
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex flex-col gap-2 mt-3 pt-3 border-t border-neutral-200/60">
            <button className="text-sm font-semibold text-neutral-700 hover:text-[#ac683f] transition-colors text-left px-3 py-2">
              Sign In
            </button>
            <a
              href="#search-bar"
              onClick={() => setMenuOpen(false)}
              className="bg-[#ac683f] hover:bg-[#925430] text-white text-sm font-semibold px-6 py-2.5 rounded-full text-center transition-colors"
            >
              Get Started
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
