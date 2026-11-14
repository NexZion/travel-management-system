"use client";

import { useState } from "react";
import {
  Sparkles,
  Search,
  MapPin,
  CreditCard,
  SlidersHorizontal,
  ChevronDown,
  CheckCircle2,
} from "lucide-react";

export default function PlacesFilterBar() {
  const [activeTab, setActiveTab] = useState("all");

  const tabs = [
    { id: "all", label: "All places" },
    { id: "nature", label: "Nature & trails" },
    { id: "beaches", label: "Beaches" },
    { id: "heritage", label: "Heritage" },
    { id: "wildlife", label: "Wildlife" },
  ];

  return (
    <section className="space-y-6">
      {/* 1. Header Banner */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <span className="text-[11px] font-bold tracking-wider text-sky-500 uppercase">
            YOUR TRAVEL SPACE
          </span>
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 mt-0.5 tracking-tight">
            A whole island of places to fall for.
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 font-medium mt-1">
            Find your next little escape, revisit a favorite, and make it part of your journey.
          </p>
        </div>

        {/* Plan new trip button */}
        <div>
          <button className="flex items-center gap-2 bg-sky-500 hover:bg-sky-600 px-4.5 py-2.5 rounded-2xl shadow-xs transition cursor-pointer whitespace-nowrap">
            <Sparkles className="w-3.5 h-3.5 stroke-[2.2] text-white" />
            <span className="text-xs font-bold text-white">Plan new trip</span>
          </button>
        </div>
      </div>

      {/* 2. Search & Filter Dropdowns Row */}
      <div className="flex flex-col lg:flex-row gap-2.5 items-stretch">
        {/* Search Input Box */}
        <div className="relative flex-1">
          <Search className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none stroke-[1.8]" />
          <input
            type="text"
            placeholder="Search by place name, town or district"
            className="w-full h-11 bg-white border border-sky-100 rounded-2xl pl-11 pr-4 text-xs font-medium text-slate-700 placeholder:text-slate-400 shadow-2xs focus:outline-none focus:ring-1 focus:ring-sky-400 focus:border-sky-300 transition"
          />
        </div>

        {/* 3 Dropdown Filters */}
        <div className="flex flex-wrap items-center gap-2">
          {/* Region Filter */}
          <button className="h-11 flex items-center gap-2 bg-white border border-sky-100 hover:bg-slate-50 rounded-2xl px-4 shadow-2xs transition cursor-pointer">
            <MapPin className="w-3.5 h-3.5 text-slate-600 shrink-0 stroke-[2]" />
            <span className="text-xs font-bold text-slate-700">All regions</span>
            <ChevronDown className="w-3 h-3 text-slate-400 ml-0.5 stroke-[2.2]" />
          </button>

          {/* Entry Fee Filter */}
          <button className="h-11 flex items-center gap-2 bg-white border border-sky-100 hover:bg-slate-50 rounded-2xl px-4 shadow-2xs transition cursor-pointer">
            <CreditCard className="w-3.5 h-3.5 text-slate-600 shrink-0 stroke-[2]" />
            <span className="text-xs font-bold text-slate-700">Any entry fee</span>
            <ChevronDown className="w-3 h-3 text-slate-400 ml-0.5 stroke-[2.2]" />
          </button>

          {/* More Filters */}
          <button className="h-11 flex items-center gap-2 bg-white border border-sky-100 hover:bg-slate-50 rounded-2xl px-4 shadow-2xs transition cursor-pointer">
            <SlidersHorizontal className="w-3.5 h-3.5 text-slate-600 shrink-0 stroke-[2]" />
            <span className="text-xs font-bold text-slate-700">More filters</span>
            <ChevronDown className="w-3 h-3 text-slate-400 ml-0.5 stroke-[2.2]" />
          </button>
        </div>
      </div>

      {/* 3. Category Tabs & Visits Dropdown Row (Matching the screenshot) */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2 pb-4 border-b border-sky-100">
        {/* Category Tabs with 32px (gap-8) spacing */}
        <div className="flex items-center gap-8 overflow-x-auto pb-1 sm:pb-0">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`transition cursor-pointer whitespace-nowrap ${
                  isActive
                    ? "bg-sky-100/90 px-3.5 py-1.5 rounded-2xl shadow-2xs"
                    : "px-1 py-1"
                }`}
              >
                <span
                  className={`text-xs ${
                    isActive
                      ? "font-bold text-sky-600"
                      : "font-semibold text-slate-700 hover:text-slate-900"
                  }`}
                >
                  {tab.label}
                </span>
              </button>
            );
          })}
        </div>

        {/* Your visits filter dropdown */}
        <div className="flex items-center gap-2 self-start sm:self-auto">
          <span className="text-[11px] font-medium text-slate-400">Your visits</span>
          <button className="h-9 flex items-center gap-2 bg-white border border-sky-100 hover:bg-slate-50 rounded-xl px-3 shadow-2xs transition cursor-pointer">
            <CheckCircle2 className="w-3.5 h-3.5 text-slate-600 stroke-[2]" />
            <span className="text-[11px] font-bold text-slate-700">
              Visited & not yet visited
            </span>
            <ChevronDown className="w-3 h-3 text-slate-400 stroke-[2.2]" />
          </button>
        </div>
      </div>
    </section>
  );
}