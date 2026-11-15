"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Search,
  MapPin,
  ChevronDown,
  ArrowRight,
  Bed,
  Utensils,
  Car,
  Map,
  Compass,
  Mountain,
} from "lucide-react";
import PlanTripButton from "@/components/ui/PlanTripButton";

export default function VendorsHero() {
  const [selectedCategory, setSelectedCategory] = useState("accommodation");

  const categories = [
    {
      id: "accommodation",
      label: "Accommodation",
      count: "186 vendors",
      icon: Bed,
    },
    {
      id: "food",
      label: "Food & Dining",
      count: "94 vendors",
      icon: Utensils,
    },
    {
      id: "transport",
      label: "Transportation",
      count: "78 vendors",
      icon: Car,
    },
    {
      id: "tours",
      label: "Tour Services",
      count: "62 vendors",
      icon: Map,
    },
    {
      id: "guides",
      label: "Guides",
      count: "53 vendors",
      icon: Compass,
    },
    {
      id: "activities",
      label: "Activities",
      count: "89 vendors",
      icon: Mountain,
    },
  ];

  return (
    <section className="space-y-7">
      {/* 1. Header Banner */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <span className="text-[11px] font-bold tracking-wider text-sky-500 uppercase">
            YOUR TRAVEL SPACE
          </span>
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 mt-0.5 tracking-tight">
            Find your trusted travel partners.
          </h1>
          <p className="text-xs sm:text-sm font-medium text-slate-500 mt-1 max-w-2xl">
            Great stays, local experts and everything in between. Connect with the people who make your Sri Lankan journey unforgettable.
          </p>
        </div>

        {/* Plan new trip button */}
        <div>
          <PlanTripButton />
        </div>
      </div>

      {/* 2. Integrated Search & Location Bar */}
      <div className="bg-white border border-sky-100 rounded-2xl shadow-xs p-1.5 pl-4 flex flex-col md:flex-row items-stretch md:items-center gap-2 justify-between">
        {/* Search Input Box */}
        <div className="flex items-center gap-3 flex-1 py-1.5">
          <Search className="w-4 h-4 text-sky-500 shrink-0 stroke-[2]" />
          <input
            type="text"
            placeholder="Search by vendor name, service or keyword"
            className="w-full text-xs font-medium text-slate-700 placeholder:text-slate-400 focus:outline-none"
          />
        </div>

        {/* Location Dropdown and Search Button */}
        <div className="flex items-center gap-2 border-t md:border-t-0 md:border-l border-slate-100 pt-2 md:pt-0 pl-0 md:pl-3">
          {/* Location selector */}
          <button className="flex items-center gap-2 px-3 py-2 transition cursor-pointer whitespace-nowrap">
            <MapPin className="w-3.5 h-3.5 text-sky-500 shrink-0 stroke-[2]" />
            <span className="text-xs font-bold text-slate-700">All Sri Lanka</span>
            <ChevronDown className="w-3 h-3 text-slate-400 ml-1 stroke-[2.2]" />
          </button>

          {/* Search CTA Button */}
          <button className="bg-sky-500 hover:bg-sky-600 px-5 py-2.5 rounded-xl shadow-xs flex items-center gap-2 transition cursor-pointer whitespace-nowrap">
            <span className="text-xs font-bold text-white">Search vendors</span>
            <ArrowRight className="w-3.5 h-3.5 stroke-[2.5] text-white" />
          </button>
        </div>
      </div>

      {/* 3. Browse by Category Section */}
      <div className="space-y-4">
        {/* Section title & All vendors link */}
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold text-slate-900 tracking-tight">
            Browse by category
          </h2>
          <Link
            href="#"
            className="flex items-center gap-1 group transition"
          >
            <span className="text-xs font-bold text-sky-600 group-hover:text-sky-700">
              All vendors
            </span>
            <ArrowRight className="w-3.5 h-3.5 stroke-[2.5] text-sky-600 group-hover:text-sky-700 transition" />
          </Link>
        </div>

        {/* 6 Category Cards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3.5">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isSelected = selectedCategory === cat.id;

            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`p-4 rounded-2xl flex flex-col justify-between text-left transition cursor-pointer ${
                  isSelected
                    ? "bg-white border-2 border-sky-400 shadow-xs"
                    : "bg-white border border-sky-100 hover:border-sky-200 shadow-2xs hover:shadow-xs"
                }`}
              >
                {/* Icon box */}
                <div
                  className={`w-9 h-9 rounded-xl flex items-center justify-center transition ${
                    isSelected
                      ? "bg-sky-500 text-white shadow-xs"
                      : "bg-sky-50 text-sky-500"
                  }`}
                >
                  <Icon className="w-4 h-4 stroke-[2]" />
                </div>

                {/* Title & Count */}
                <div className="mt-4">
                  <span
                    className={`text-xs font-bold leading-tight block ${
                      isSelected ? "text-sky-600" : "text-slate-800"
                    }`}
                  >
                    {cat.label}
                  </span>
                  <span className="text-[10.5px] font-medium text-slate-400 mt-0.5 block">
                    {cat.count}
                  </span>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
