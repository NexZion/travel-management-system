"use client";

import { useState } from "react";
import {
  FaWandMagicSparkles,
  FaMapLocationDot,
  FaSliders,
  FaQuoteLeft,
  FaCircleNotch,
} from "react-icons/fa6";

const tripTypes = [
  "🎉 Fun Trip",
  "🌴 Dayouts",
  "🏙️ City Visit",
  "⛺ Camping",
  "🏔️ Adventure & Nature",
];

export default function TripPlanner() {
  const [mode, setMode] = useState<"automatic" | "manual">("automatic");
  const [selectedType, setSelectedType] = useState(tripTypes[0]);
  const [submitting, setSubmitting] = useState(false);

  const isAutomatic = mode === "automatic";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      alert(
        isAutomatic
          ? "Intelligent generation module executed! Routing your optimized local travel suggestions..."
          : "Manual exploration indexes filtered!"
      );
      setSubmitting(false);
    }, 2200);
  };

  const tabBase =
    "flex-1 py-3 px-4 rounded-full text-xs font-bold text-neutral-500 transition-all cursor-pointer text-center flex items-center justify-center gap-1.5";

  return (
    <section id="search-bar" className="relative px-4 sm:px-6 lg:px-8 pb-28 z-20">
      <div className="max-w-5xl mx-auto premium-glass rounded-[2rem] shadow-2xl border p-6 sm:p-8 relative anim-fade-in-up">
        <div className="flex justify-center mb-8">
          <div className="bg-neutral-200/50 p-1.5 rounded-full flex max-w-md w-full">
            <button
              type="button"
              onClick={() => setMode("automatic")}
              className={`${tabBase} ${isAutomatic ? "tab-active" : ""}`}
            >
              <FaWandMagicSparkles /> Automatic Suggestion
            </button>
            <button
              type="button"
              onClick={() => setMode("manual")}
              className={`${tabBase} ${!isAutomatic ? "tab-active" : ""}`}
            >
              <FaMapLocationDot /> Manual Selection
            </button>
          </div>
        </div>

        <h3 className="text-xl font-bold text-neutral-900 mb-6 flex items-center gap-2">
          <FaSliders className="text-[#ac683f] text-base animate-pulse" /> Configure Trip
          Specifications
        </h3>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-[10px] font-bold uppercase tracking-widest text-neutral-400 mb-2.5">
              Select Trip Type Matrix
            </label>
            <div className="flex flex-wrap gap-2">
              {tripTypes.map((type) => (
                <button
                  key={type}
                  type="button"
                  onClick={() => setSelectedType(type)}
                  className={`px-5 py-2.5 rounded-full text-xs font-bold border border-neutral-200 bg-white text-neutral-700 transition-all transform hover:-translate-y-0.5 cursor-pointer ${
                    selectedType === type ? "vibe-active" : ""
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>

          {isAutomatic && (
            <div className="transition-all duration-500 ease-out">
              <label className="block text-[10px] font-bold uppercase tracking-widest text-neutral-400 mb-1.5">
                What kind of places or vibe do you want?
              </label>
              <div className="relative">
                <span className="absolute left-4 top-3.5 text-neutral-400 text-xs">
                  <FaQuoteLeft />
                </span>
                <input
                  type="text"
                  required
                  placeholder="e.g., I want serene waterfalls with minimal trekking, or historical temples near coastal lines..."
                  className="w-full pl-10 pr-4 py-3 text-xs font-medium modern-input rounded-full focus:outline-none"
                />
              </div>
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div>
              <label className="block text-[10px] font-bold uppercase tracking-widest text-neutral-400 mb-1.5">
                Starting Location
              </label>
              <input
                type="text"
                required
                placeholder="e.g., Colombo, Galle, Kandy"
                className="w-full px-4 py-3 text-xs font-medium modern-input rounded-full focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-[10px] font-bold uppercase tracking-widest text-neutral-400 mb-1.5">
                From Date
              </label>
              <input
                type="date"
                required
                className="w-full px-4 py-3 text-xs font-medium modern-input rounded-full focus:outline-none text-neutral-500"
              />
            </div>
            <div>
              <label className="block text-[10px] font-bold uppercase tracking-widest text-neutral-400 mb-1.5">
                To Date
              </label>
              <input
                type="date"
                required
                className="w-full px-4 py-3 text-xs font-medium modern-input rounded-full focus:outline-none text-neutral-500"
              />
            </div>
            <div>
              <label className="block text-[10px] font-bold uppercase tracking-widest text-neutral-400 mb-1.5">
                Person Count
              </label>
              <input
                type="number"
                min="1"
                required
                placeholder="Number of guests"
                className="w-full px-4 py-3 text-xs font-medium modern-input rounded-full focus:outline-none"
              />
            </div>
            <div className="sm:col-span-2 lg:col-span-2">
              <label className="block text-[10px] font-bold uppercase tracking-widest text-neutral-400 mb-1.5">
                Budget Range
              </label>
              <select className="w-full px-5 py-3 text-xs font-semibold modern-input rounded-full focus:outline-none text-neutral-600 bg-white cursor-pointer">
                <option>Economy Explorer (Local Transport &amp; Backpacker Stays)</option>
                <option>Moderate Framework (Comfort Private Vehicles &amp; Hotels)</option>
                <option>Premium Luxury Elite (Luxury Resorts &amp; All-Inclusive Guides)</option>
              </select>
            </div>
          </div>

          <button
            type="submit"
            disabled={submitting}
            className="w-full bg-[#ac683f] hover:bg-[#925430] text-white font-bold text-xs uppercase tracking-widest py-4 rounded-full shadow-lg hover:shadow-[#ac683f]/30 transition-all transform hover:-translate-y-0.5 cursor-pointer flex items-center justify-center gap-2 group relative overflow-hidden disabled:opacity-80 disabled:pointer-events-none"
          >
            <span className="flex items-center gap-2">
              {submitting ? (
                <FaCircleNotch className="animate-spin" />
              ) : (
                <FaWandMagicSparkles className="group-hover:rotate-12 transition-transform" />
              )}
            </span>
            <span>
              {submitting
                ? "Calculating Coordinates..."
                : isAutomatic
                  ? "Process Suggestions"
                  : "Search Curated Places"}
            </span>
          </button>
        </form>
      </div>
    </section>
  );
}
