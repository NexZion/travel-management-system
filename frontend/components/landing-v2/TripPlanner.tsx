"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import SectionHead from "@/components/ui/SectionHead";

const VIBES = ["Day outs", "City Visit", "Camping", "Adventure & Nature"];
const Select = ({ label, options }: { label: string; options: string[] }) => (
  <label className="block text-xs font-medium">{label}
    <select className="field mt-1 font-normal">{options.map((o) => <option key={o}>{o}</option>)}</select>
  </label>
);
const DateField = ({ label, value }: { label: string; value: string }) => (
  <label className="block text-xs font-medium">{label}
    <input type="date" defaultValue={value} className="field mt-1 font-normal" />
  </label>
);

export default function TripPlanner() {
  const router = useRouter();
  const [vibe, setVibe] = useState<string | null>(null);

  return (
    <section className="container-x section">
      <SectionHead label="Trip planner" title="Plan your Sri Lanka adventure in minutes" text="Choose a vibe, set your dates, and let Xplore suggest the right mix of experiences, stays, and transport for your budget." />
      <form onSubmit={(e) => { e.preventDefault(); router.push(`/trips/new${vibe ? `?vibe=${encodeURIComponent(vibe)}` : ""}`); }} className="card space-y-4 p-6 shadow-sm">
        <div className="grid gap-4 md:grid-cols-4">
          <Select label="Trip type" options={["Fun Trip", "Family", "Honeymoon", "Solo"]} />
          <Select label="Starting location" options={["Colombo", "Kandy", "Galle"]} />
          <DateField label="From date" value="2026-10-12" />
          <DateField label="To date" value="2026-10-19" />
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          <Select label="Person count" options={["2 Adults", "1 Adult", "3 Adults", "4+ Adults"]} />
          <Select label="Budget range" options={["Moderate Framework", "Budget", "Luxury"]} />
        </div>
        <div className="flex flex-wrap justify-center gap-2">
          {VIBES.map((v) => (
            <button key={v} type="button" aria-pressed={vibe === v} onClick={() => setVibe(vibe === v ? null : v)}
              className={`rounded-full px-3 py-1 text-[11px] ${vibe === v ? "bg-primary text-white" : "bg-primary/10 text-primary"}`}>{v}</button>
          ))}
        </div>
        <div className="flex justify-end"><button className="h-10 rounded-lg bg-primary px-6 text-sm font-semibold text-white hover:bg-primary-dark">Process Suggestions</button></div>
      </form>
    </section>
  );
}
