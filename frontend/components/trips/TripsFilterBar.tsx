"use client";

import { useState } from "react";
import {
  Sparkles,
  Search,
  Calendar,
  Wallet,
  ArrowDownWideNarrow,
  ChevronDown,
} from "lucide-react";

export default function TripsFilterBar() {
  const [activeTab, setActiveTab] = useState("all");

  const tabs = [
    { id: "all", label: "All trips", count: "04" },
    { id: "planned", label: "Planned", count: "01" },
    { id: "completed", label: "Completed", count: "03" },
  ];

  return (
    <section className="space-y-5">
      {/* 1. Header Banner */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <span className="text-[11px] font-bold tracking-wider text-sky-500 uppercase">
            YOUR TRAVEL SPACE
          </span>
          <h1 className="text-3xl font-bold text-slate-900 mt-0.5 tracking-tight">
            Your journeys, all in one place.
          </h1>
          <p className="text-xs text-slate-500 font-medium mt-1">
            From the next little escape to the places you&apos;ll never forget.
          </p>
        </div>

        {/* Plan new trip button */}
        <div>
          <button className="flex items-center gap-2 bg-sky-500 hover:bg-sky-600 px-4 py-2 rounded-xl shadow-xs transition cursor-pointer whitespace-nowrap">
            <Sparkles className="w-3.5 h-3.5 stroke-[2.2] text-white" />
            <span className="text-xs font-bold text-white">Plan new trip</span>
          </button>
        </div>
      </div>

      {/* 2. Compact Search & Filter Buttons Row */}
      <div className="flex flex-col lg:flex-row gap-2.5 items-stretch">
        {/* Search Input Box */}
        <div className="relative flex-1">
          <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
          <input
            type="text"
            placeholder="Search by trip name or destination"
            className="w-full h-9.5 bg-white border border-sky-100 rounded-xl pl-9 pr-3 text-[11.5px] font-medium text-slate-700 placeholder:text-slate-400 shadow-2xs focus:outline-none focus:ring-1 focus:ring-sky-400 focus:border-sky-300 transition"
          />
        </div>

        {/* 3 Compact Filter Dropdowns */}
        <div className="flex flex-wrap items-center gap-2">
          {/* Dates Filter */}
          <button className="h-9.5 flex items-center gap-2 bg-white border border-sky-100 hover:bg-slate-50 rounded-xl px-3 shadow-2xs transition cursor-pointer">
            <Calendar className="w-3.5 h-3.5 text-slate-600 shrink-0 stroke-[2]" />
            <span className="text-[11px] font-bold text-slate-700">All dates</span>
            <ChevronDown className="w-3 h-3 text-slate-400 ml-0.5 stroke-[2.2]" />
          </button>

          {/* Budget Filter */}
          <button className="h-9.5 flex items-center gap-2 bg-white border border-sky-100 hover:bg-slate-50 rounded-xl px-3 shadow-2xs transition cursor-pointer">
            <Wallet className="w-3.5 h-3.5 text-slate-600 shrink-0 stroke-[2]" />
            <span className="text-[11px] font-bold text-slate-700">Any budget</span>
            <ChevronDown className="w-3 h-3 text-slate-400 ml-0.5 stroke-[2.2]" />
          </button>

          {/* Sort Filter */}
          <button className="h-9.5 flex items-center gap-2 bg-white border border-sky-100 hover:bg-slate-50 rounded-xl px-3 shadow-2xs transition cursor-pointer">
            <ArrowDownWideNarrow className="w-3.5 h-3.5 text-slate-600 shrink-0 stroke-[2]" />
            <span className="text-[11px] font-bold text-slate-700">Sort: Newest first</span>
            <ChevronDown className="w-3 h-3 text-slate-400 ml-0.5 stroke-[2.2]" />
          </button>
        </div>
      </div>

      {/* 3. Sleek Tabs Row & Thin Divider Line */}
      <div className="flex items-center justify-between pb-3 border-b border-sky-100 pt-0.5">
        {/* Tabs with explicit span styles */}
        <div className="flex items-center gap-6">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-1.5 transition cursor-pointer ${
                  isActive
                    ? "bg-sky-100/80 px-2.5 py-1 rounded-lg"
                    : "px-1 py-1"
                }`}
              >
                <span
                  className={`text-[11px] ${
                    isActive
                      ? "font-bold text-sky-700"
                      : "font-semibold text-slate-600 hover:text-slate-900"
                  }`}
                >
                  {tab.label}
                </span>
                <span
                  className={`text-[10px] ${
                    isActive
                      ? "font-bold text-sky-600"
                      : "font-medium text-slate-400"
                  }`}
                >
                  {tab.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Counter */}
        <span className="text-[10.5px] font-medium text-slate-400 hidden sm:inline-block">
          Showing all 4 journeys
        </span>
      </div>
    </section>
  );
}