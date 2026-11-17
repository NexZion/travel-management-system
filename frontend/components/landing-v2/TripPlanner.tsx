"use client";

import { useState } from "react";
import SectionHead from "@/components/ui/SectionHead";

const VIBES = ["Day outs", "City Visit", "Camping", "Adventure & Nature"];

type PlanFieldProps = {
  label: string;
  id: string;
  value: string;
  onChange: (value: string) => void;
  options?: string[];
  type?: "date";
};

function PlanField({ label, id, value, onChange, options, type }: PlanFieldProps) {
  return (
    <div>
      <label htmlFor={id} className="block text-xs font-semibold text-slate-700">{label}</label>
      {options ? (
        <select id={id} value={value} onChange={(event) => onChange(event.target.value)} className="field mt-1.5">
          {options.map((option) => <option key={option}>{option}</option>)}
        </select>
      ) : (
        <input id={id} type={type} value={value} onChange={(event) => onChange(event.target.value)} className="field mt-1.5" />
      )}
    </div>
  );
}

export default function TripPlanner() {
  const [vibe, setVibe] = useState<string | null>(null);
  const [form, setForm] = useState({
    tripType: "Fun Trip",
    startingLocation: "Colombo",
    fromDate: "2026-10-12",
    toDate: "2026-10-19",
    personCount: "2 Adults",
    budget: "Moderate Framework",
  });
  const [status, setStatus] = useState("");

  const update = (field: keyof typeof form) => (value: string) => setForm((current) => ({ ...current, [field]: value }));

  function processSuggestions() {
    // Placeholder for the trip recommendation service.
    console.info("Trip planning request", { ...form, vibe });
    setStatus("Your suggestions are being prepared.");
  }

  return (
    <section className="container-x section" id="planner">
      <SectionHead label="Trip planner" title="Plan your Sri Lanka adventure in minutes" text="Choose a vibe, set your dates, and let Xplore suggest the right mix of experiences, stays, and transport for your budget." />
      <form onSubmit={(event) => { event.preventDefault(); processSuggestions(); }} className="card space-y-5 p-5 shadow-sm sm:p-6">
        <div className="grid gap-4 md:grid-cols-4">
          <PlanField label="Trip type" id="trip-type" value={form.tripType} onChange={update("tripType")} options={["Fun Trip", "Family", "Honeymoon", "Solo"]} />
          <PlanField label="Starting location" id="starting-location" value={form.startingLocation} onChange={update("startingLocation")} options={["Colombo", "Kandy", "Galle"]} />
          <PlanField label="From date" id="from-date" value={form.fromDate} onChange={update("fromDate")} type="date" />
          <PlanField label="To date" id="to-date" value={form.toDate} onChange={update("toDate")} type="date" />
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          <PlanField label="Person count" id="person-count" value={form.personCount} onChange={update("personCount")} options={["2 Adults", "1 Adult", "3 Adults", "4+ Adults"]} />
          <PlanField label="Budget range" id="budget-range" value={form.budget} onChange={update("budget")} options={["Moderate Framework", "Budget", "Luxury"]} />
        </div>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap gap-2" aria-label="Travel style">
            {VIBES.map((item) => (
              <button key={item} type="button" aria-pressed={vibe === item} onClick={() => setVibe(vibe === item ? null : item)} className={`rounded-full px-3 py-1.5 text-[11px] font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2 ${vibe === item ? "bg-primary text-white" : "bg-primary/10 text-primary hover:bg-primary/20"}`}>{item}</button>
            ))}
          </div>
          <button type="submit" className="h-10 rounded-lg bg-primary px-6 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-primary-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2">Process Suggestions</button>
        </div>
        {status && <p role="status" className="text-xs font-medium text-primary">{status}</p>}
      </form>
    </section>
  );
}
