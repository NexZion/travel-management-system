"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import Button from "@/components/ui/Button";
import { NAV_LINKS } from "@/lib/constants";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-30 border-b border-line bg-bg/90 backdrop-blur">
      <div className="container-x flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2 text-lg font-bold">
          <span aria-hidden className="grid h-7 w-7 place-items-center rounded-lg bg-primary text-xs font-extrabold text-white">X</span> Xplore
        </Link>
        <nav aria-label="Main" className="hidden gap-6 text-xs font-medium text-muted md:flex">
          {NAV_LINKS.map((l) => <Link key={l.label} href={l.href} className="hover:text-ink">{l.label}</Link>)}
        </nav>
        <div className="hidden gap-2 md:flex">
          <Button href="/login" variant="outline">Sign In</Button>
          <Button href="/register">Get Started</Button>
        </div>
        <button type="button" aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"} aria-expanded={menuOpen} onClick={() => setMenuOpen((open) => !open)} className="grid h-10 w-10 place-items-center rounded-lg text-ink hover:bg-sky-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 md:hidden">
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>
      {menuOpen && (
        <div className="border-t border-line bg-white px-6 py-4 md:hidden">
          <nav aria-label="Mobile" className="container-x grid gap-1 text-sm font-medium text-muted">
            {NAV_LINKS.map((link) => <Link key={link.label} href={link.href} onClick={() => setMenuOpen(false)} className="rounded-lg px-3 py-2 hover:bg-sky-50 hover:text-ink">{link.label}</Link>)}
            <div className="mt-2 grid grid-cols-2 gap-2">
              <Button href="/login" variant="outline">Sign In</Button>
              <Button href="/register">Get Started</Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
