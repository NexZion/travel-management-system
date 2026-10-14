
"use client";

import { useState } from "react";
import {
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaWallet,
  FaBed,
} from "react-icons/fa";

const destinations = [
  "Ella",
  "Kandy",
  "Sigiriya",
  "Galle",
  "Nuwara Eliya",
  "Trincomalee",
  "Yala",
  "Mirissa",
];

const preferences = [
  "Nature",
  "Culture",
  "Adventure",
  "Relaxation",
];

const inputClass =
  "mt-1.5 h-9 w-full rounded-lg border border-slate-200 bg-white px-2.5 text-[11px] text-slate-700 outline-none focus:border-sky-400 focus:ring-2 focus:ring-sky-100";

type TripDraft = {
  destination: string;
  startDate: string;
  endDate: string;
  budget: string;
  accommodation: string;
  preferences: string[];
};

export default function TripPlanner() {
  const [destination, setDestination] = useState("Ella");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [budget, setBudget] = useState("Moderate");
  const [accommodation, setAccommodation] = useState("Any accommodation");
  const [selectedPreferences, setSelectedPreferences] = useState<string[]>([
    "Nature",
  ]);
  const [message, setMessage] = useState("");
  const [draft, setDraft] = useState<TripDraft | null>(null);

  const now = new Date();
  const today = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(
    2,
    "0"
  )}-${String(now.getDate()).padStart(2, "0")}`;

  function togglePreference(item: string) {
    setSelectedPreferences((current) =>
      current.includes(item)
        ? current.filter((value) => value !== item)
        : [...current, item]
    );
    setMessage("");
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!startDate || !endDate || startDate < today || endDate < startDate) {
      setDraft(null);
      setMessage("Please choose valid travel dates. The end date must be on or after the start date.");
      return;
    }

    const trip: TripDraft = {
      destination,
      startDate,
      endDate,
      budget,
      accommodation,
      preferences: selectedPreferences,
    };

    setDraft(trip);
    setMessage("Your local trip preview is ready.");
  }

  return (
    <section id="trip-planner" className="pb-10 pt-5 sm:pb-12">
      <div className="container-xplore">
        <div className="mb-4">
          <span className="eyebrow">PLAN AHEAD</span>

          <h2 className="text-[23px] font-extrabold leading-tight tracking-[-0.04em] text-[#172b43] sm:text-[27px]">
            Plan your Sri Lanka adventure in minutes
          </h2>

          <p className="mt-2 max-w-3xl text-[11px] leading-5 text-slate-500 sm:text-xs">
            Choose your destination, dates and preferences to create a
            personalized itinerary that fits your travel style and budget.
          </p>
        </div>

        <div className="surface-card rounded-2xl p-4 sm:p-5">
          <form onSubmit={handleSubmit}>
            {/* First row: four fields */}
            <div className="grid grid-cols-1 gap-x-4 gap-y-3 sm:grid-cols-2 lg:grid-cols-4">
              <div>
                <label
                  htmlFor="trip-destination"
                  className="text-[10px] font-bold text-slate-700"
                >
                  Destination
                </label>

                <div className="relative">
                  <FaMapMarkerAlt className="absolute left-2.5 top-1/2 -translate-y-1/2 text-[10px] text-sky-500" />
                  <select
                    id="trip-destination"
                    value={destination}
                    onChange={(e) => setDestination(e.target.value)}
                    className={`${inputClass} pl-7`}
                  >
                    {destinations.map((place) => (
                      <option key={place} value={place}>
                        {place}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label
                  htmlFor="trip-start"
                  className="text-[10px] font-bold text-slate-700"
                >
                  Start Date
                </label>

                <div className="relative">
                  <input
                    id="trip-start"
                    type="date"
                    min={today}
                    required
                    value={startDate}
                    onChange={(e) => {
                      setStartDate(e.target.value);
                      setMessage("");
                    }}
                    className={inputClass}
                  />
                  <FaCalendarAlt className="pointer-events-none absolute right-2.5 top-1/2 -translate-y-1/2 text-[10px] text-sky-500" />
                </div>
              </div>

              <div>
                <label
                  htmlFor="trip-end"
                  className="text-[10px] font-bold text-slate-700"
                >
                  End Date
                </label>

                <div className="relative">
                  <input
                    id="trip-end"
                    type="date"
                    min={startDate || today}
                    required
                    value={endDate}
                    onChange={(e) => {
                      setEndDate(e.target.value);
                      setMessage("");
                    }}
                    className={inputClass}
                  />
                  <FaCalendarAlt className="pointer-events-none absolute right-2.5 top-1/2 -translate-y-1/2 text-[10px] text-sky-500" />
                </div>
              </div>

              <div>
                <label
                  htmlFor="trip-budget"
                  className="text-[10px] font-bold text-slate-700"
                >
                  Budget
                </label>

                <div className="relative">
                  <FaWallet className="absolute left-2.5 top-1/2 -translate-y-1/2 text-[10px] text-sky-500" />
                  <select
                    id="trip-budget"
                    value={budget}
                    onChange={(e) => setBudget(e.target.value)}
                    className={`${inputClass} pl-7`}
                  >
                    <option>Budget-friendly</option>
                    <option>Moderate</option>
                    <option>Premium</option>
                    <option>Luxury</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Second row: preferences and accommodation */}
            <div className="mt-4 grid grid-cols-1 gap-x-4 gap-y-3 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="trip-preferences"
                  className="text-[10px] font-bold text-slate-700"
                >
                  Preferences
                </label>

                <select
                  id="trip-preferences"
                  value={selectedPreferences[0] || ""}
                  onChange={(e) => {
                    setSelectedPreferences(
                      e.target.value ? [e.target.value] : []
                    );
                    setMessage("");
                  }}
                  className={inputClass}
                >
                  <option value="">Choose preferences</option>
                  {preferences.map((item) => (
                    <option key={item} value={item}>
                      {item}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label
                  htmlFor="trip-accommodation"
                  className="flex items-center gap-1.5 text-[10px] font-bold text-slate-700"
                >
                  <FaBed className="text-sky-500" />
                  Accommodation
                </label>

                <select
                  id="trip-accommodation"
                  value={accommodation}
                  onChange={(e) => setAccommodation(e.target.value)}
                  className={inputClass}
                >
                  <option>Any accommodation</option>
                  <option>Hotel</option>
                  <option>Villa</option>
                  <option>Guesthouse</option>
                  <option>Camping</option>
                </select>
              </div>
            </div>

            {/* Preference chips */}
            <div className="mt-4 flex flex-wrap justify-center gap-2">
              {preferences.map((item) => {
                const active = selectedPreferences.includes(item);

                return (
                  <button
                    key={item}
                    type="button"
                    aria-pressed={active}
                    onClick={() => togglePreference(item)}
                    className={`rounded-full border px-3 py-1.5 text-[9px] font-semibold transition ${
                      active
                        ? "border-sky-200 bg-sky-100 text-sky-700"
                        : "border-slate-200 bg-sky-50 text-slate-600 hover:border-sky-300"
                    }`}
                  >
                    {item}
                  </button>
                );
              })}
            </div>

            {/* Bottom action */}
            <div className="mt-4 flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-center">
              <p aria-live="polite" className="text-[10px] text-slate-500">
                {message}
              </p>

              <button
                type="submit"
                className="btn-primary min-h-9 w-full shrink-0 px-4 text-[10px] sm:w-auto"
              >
                Process Suggestions
              </button>
            </div>

            {draft && (
              <aside
                aria-label="Local trip preview"
                className="mt-4 rounded-xl border border-sky-100 bg-sky-50/70 p-4"
              >
                <h3 className="text-xs font-bold text-[#172b43]">
                  Your trip draft
                </h3>
                <p className="mt-1.5 text-[11px] leading-5 text-[#526579]">
                  {draft.destination} · {draft.startDate} to {draft.endDate} ·{" "}
                  {draft.budget} budget · {draft.accommodation}
                </p>
                <p className="mt-1 text-[10px] leading-5 text-[#526579]">
                  Interests: {draft.preferences.length ? draft.preferences.join(", ") : "No preferences selected"}
                </p>
                <p className="mt-2 text-[9px] font-medium text-sky-700">
                  This is a local planning preview only; it does not generate
                  an AI itinerary or make bookings.
                </p>
              </aside>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
