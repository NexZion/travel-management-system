"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Bell, LogOut } from "lucide-react";

export default function DashboardHeader() {
  // Current active URL path (e.g. "/dashboard" or "/trips")
  const pathname = usePathname();

  const navLinks = [
    { label: "Dashboard", href: "/dashboard" },
    { label: "Trips", href: "/trips" },
    { label: "Places", href: "#" },
    { label: "Vendors", href: "#" },
    { label: "Experiences", href: "#" },
    { label: "Saved", href: "#" },
  ];

  return (
    <header className="bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-sky-100 shadow-xs">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <Link href="/dashboard" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-sky-500 flex items-center justify-center text-white font-bold text-xl shadow-sm">
              X
            </div>
            <span className="text-2xl font-bold tracking-tight text-slate-800">
              Xplore
            </span>
          </Link>

          {/* Dynamic Navigation Links */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => {
              // Check if current page matches link href
              const isActive = pathname === link.href;

              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`text-sm font-medium transition-colors relative pb-1 ${
                    isActive
                      ? "text-sky-600 font-semibold border-b-2 border-sky-500"
                      : "text-slate-600 hover:text-sky-600"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* User Profile & Actions */}
          <div className="flex items-center gap-4">
            <button className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-slate-50 transition">
              <Bell className="w-4 h-4" />
            </button>

            <div className="flex items-center gap-3 pl-2">
              <img
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=80"
                alt="Amaya Perera"
                className="w-10 h-10 rounded-full object-cover border border-sky-200"
              />
              <div className="hidden sm:block text-left">
                <p className="text-sm font-semibold text-slate-800 leading-tight">
                  Amaya Perera
                </p>
                <p className="text-xs text-slate-400">Explorer</p>
              </div>
            </div>

            <button className="flex items-center gap-1.5 px-3 py-2 rounded-lg border border-slate-200 text-xs font-medium text-slate-600 hover:bg-slate-50 transition ml-2">
              <LogOut className="w-3.5 h-3.5" />
              <span>Logout</span>
            </button>
          </div>

        </div>
      </div>
    </header>
  );
}