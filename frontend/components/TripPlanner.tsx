"use client";

import { useState } from "react";
import {
  FaArrowRight,
  FaCalendarDays,
  FaCircleNotch,
  FaLocationDot,
  FaSliders,
  FaUsers,
  FaWandMagicSparkles,
} from "react-icons/fa6";

const tripTypes = [
  { label: "Fun Trip", emoji: "🎉" },
  { label: "Day Out", emoji: "🌴" },
  { label: "City Visit", emoji: "🏙️" },
  { label: "Camping", emoji: "⛺" },
  { label: "Adventure & Nature", emoji: "🥾" },
];

const vibes = [
  "Adventure",
  "Relaxation",
  "Nature",
  "Culture",
  "Family",
  "Romantic",
];

export default function TripPlanner() {
  const [mode, setMode] = useState<"automatic" | "manual">("automatic");
  const [selectedType, setSelectedType] = useState("Fun Trip");
  const [selectedVibe, setSelectedVibe] = useState("Adventure");
  const [submitting, setSubmitting] = useState(false);

  const isAutomatic = mode === "automatic";

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setSubmitting(true);

    setTimeout(() => {
      alert(
        isAutomatic
          ? "Your personalized trip planning request is ready!"
          : "Your curated travel search is ready!",
      );

      setSubmitting(false);
    }, 1200);
  };

  return (
    <section
      id="trip-planner"
      className="relative py-20 sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Section heading */}
        <div className="mx-auto max-w-2xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-[#ac683f]/10 px-4 py-2 text-xs font-bold text-[#ac683f]">
            <FaWandMagicSparkles />
            Personalized Trip Planning
          </div>

          <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-neutral-900 sm:text-4xl lg:text-5xl">
            Plan a journey made
            <span className="text-[#ac683f]"> for you.</span>
          </h2>

          <p className="mt-4 text-sm leading-6 text-neutral-500 sm:text-base">
            Tell us what kind of experience you want and let Xplore help
            you discover the right destinations, vendors and experiences.
          </p>
        </div>

        {/* Planner card */}
        <div className="premium-glass mt-10 rounded-[2rem] border border-white/80 p-4 shadow-2xl shadow-black/5 sm:p-6 lg:p-8">
          {/* Mode selector */}
          <div className="mx-auto flex max-w-md rounded-full bg-neutral-100 p-1.5">
            <button
              type="button"
              onClick={() => setMode("automatic")}
              className={`flex-1 rounded-full px-4 py-3 text-xs font-bold transition-all ${
                isAutomatic
                  ? "bg-white text-[#ac683f] shadow-md"
                  : "text-neutral-500 hover:text-neutral-700"
              }`}
            >
              <span className="flex items-center justify-center gap-2">
                <FaWandMagicSparkles />
                AI Trip Planner
              </span>
            </button>

            <button
              type="button"
              onClick={() => setMode("manual")}
              className={`flex-1 rounded-full px-4 py-3 text-xs font-bold transition-all ${
                !isAutomatic
                  ? "bg-white text-[#ac683f] shadow-md"
                  : "text-neutral-500 hover:text-neutral-700"
              }`}
            >
              <span className="flex items-center justify-center gap-2">
                <FaSliders />
                Explore Yourself
              </span>
            </button>
          </div>

          {/* Mode description */}
          <div className="mt-6 text-center">
            <p className="text-sm font-bold text-neutral-800">
              {isAutomatic
                ? "Let us build a personalized journey"
                : "Choose your travel preferences"}
            </p>

            <p className="mt-1 text-xs text-neutral-400">
              {isAutomatic
                ? "Give us a few details and we'll help you discover suitable options."
                : "Browse and filter destinations and experiences yourself."}
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="mt-8 space-y-8"
          >
            {/* Trip type */}
            <div>
              <label className="mb-3 block text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-400">
                What type of trip?
              </label>

              <div className="flex flex-wrap gap-2">
                {tripTypes.map((type) => (
                  <button
                    key={type.label}
                    type="button"
                    onClick={() => setSelectedType(type.label)}
                    className={`rounded-full border px-4 py-2.5 text-xs font-bold transition-all hover:-translate-y-0.5 ${
                      selectedType === type.label
                        ? "border-[#ac683f] bg-[#ac683f] text-white shadow-md"
                        : "border-neutral-200 bg-white text-neutral-600 hover:border-[#ac683f]/30 hover:text-[#ac683f]"
                    }`}
                  >
                    <span className="mr-1.5">{type.emoji}</span>
                    {type.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Main inputs */}
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {/* Destination */}
              <div>
                <label className="mb-2 block text-[10px] font-bold uppercase tracking-widest text-neutral-400">
                  Destination
                </label>

                <div className="relative">
                  <FaLocationDot className="absolute left-4 top-1/2 -translate-y-1/2 text-[#ac683f]" />

                  <input
                    type="text"
                    required
                    placeholder="Where are you going?"
                    className="modern-input w-full rounded-2xl py-3.5 pl-10 pr-4 text-xs font-medium outline-none"
                  />
                </div>
              </div>

              {/* From date */}
              <div>
                <label className="mb-2 block text-[10px] font-bold uppercase tracking-widest text-neutral-400">
                  Start Date
                </label>

                <div className="relative">
                  <FaCalendarDays className="absolute left-4 top-1/2 -translate-y-1/2 text-[#ac683f]" />

                  <input
                    type="date"
                    required
                    className="modern-input w-full rounded-2xl py-3.5 pl-10 pr-4 text-xs font-medium text-neutral-600 outline-none"
                  />
                </div>
              </div>

              {/* End date */}
              <div>
                <label className="mb-2 block text-[10px] font-bold uppercase tracking-widest text-neutral-400">
                  End Date
                </label>

                <div className="relative">
                  <FaCalendarDays className="absolute left-4 top-1/2 -translate-y-1/2 text-[#ac683f]" />

                  <input
                    type="date"
                    required
                    className="modern-input w-full rounded-2xl py-3.5 pl-10 pr-4 text-xs font-medium text-neutral-600 outline-none"
                  />
                </div>
              </div>

              {/* Travelers */}
              <div>
                <label className="mb-2 block text-[10px] font-bold uppercase tracking-widest text-neutral-400">
                  Travelers
                </label>

                <div className="relative">
                  <FaUsers className="absolute left-4 top-1/2 -translate-y-1/2 text-[#ac683f]" />

                  <input
                    type="number"
                    min="1"
                    defaultValue="2"
                    required
                    className="modern-input w-full rounded-2xl py-3.5 pl-10 pr-4 text-xs font-medium outline-none"
                  />
                </div>
              </div>
            </div>

            {/* Vibe */}
            <div>
              <label className="mb-3 block text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-400">
                What's your travel vibe?
              </label>

              <div className="flex flex-wrap gap-2">
                {vibes.map((vibe) => (
                  <button
                    key={vibe}
                    type="button"
                    onClick={() => setSelectedVibe(vibe)}
                    className={`rounded-full border px-4 py-2.5 text-xs font-semibold transition-all ${
                      selectedVibe === vibe
                        ? "border-[#ac683f] bg-[#ac683f]/10 text-[#ac683f]"
                        : "border-neutral-200 bg-white text-neutral-500 hover:border-[#ac683f]/30 hover:text-[#ac683f]"
                    }`}
                  >
                    {vibe}
                  </button>
                ))}
              </div>
            </div>

            {/* Budget */}
            <div>
              <label className="mb-2 block text-[10px] font-bold uppercase tracking-widest text-neutral-400">
                Budget
              </label>

              <select
                defaultValue=""
                className="modern-input w-full rounded-2xl bg-white px-4 py-3.5 text-xs font-semibold text-neutral-600 outline-none"
              >
                <option value="" disabled>
                  Select your budget range
                </option>
                <option value="ECONOMY">Economy</option>
                <option value="MODERATE">Moderate</option>
                <option value="PREMIUM">Premium</option>
              </select>
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={submitting}
              className="group flex w-full items-center justify-center gap-3 rounded-2xl bg-[#ac683f] py-4 text-sm font-bold text-white shadow-lg shadow-[#ac683f]/20 transition-all hover:-translate-y-0.5 hover:bg-[#925430] hover:shadow-xl disabled:pointer-events-none disabled:opacity-70"
            >
              {submitting ? (
                <>
                  <FaCircleNotch className="animate-spin" />
                  Preparing your journey...
                </>
              ) : (
                <>
                  <FaWandMagicSparkles className="transition-transform group-hover:rotate-12" />

                  {isAutomatic
                    ? "Create My Trip"
                    : "Explore Destinations"}

                  <FaArrowRight className="text-xs transition-transform group-hover:translate-x-1" />
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}