"use client";

import { useState } from "react";

const locations = [
  {
    id: "colombo",
    name: "Colombo",
    highlight: "City life, shopping, and coastal dining.",
    stats: ["Popular attractions", "Vendor marketplace", "City tours"],
  },
  {
    id: "kandy",
    name: "Kandy",
    highlight: "Temple visits, tea plantations, and cultural heritage.",
    stats: ["Cultural tours", "Nature hikes", "Local vendors"],
  },
  {
    id: "ella",
    name: "Ella",
    highlight: "Hill country hikes, waterfalls, and scenic train rides.",
    stats: ["Hiking", "Waterfalls", "Eco stays"],
  },
  {
    id: "mirissa",
    name: "Mirissa",
    highlight: "Beaches, whale watching, and coastal dining.",
    stats: ["Beach experiences", "Ocean-view stays", "Water sports"],
  },
  {
    id: "galle",
    name: "Galle",
    highlight: "Heritage forts, boutique hotels, and seaside restaurants.",
    stats: ["Heritage tours", "Dining", "Historic sites"],
  },
];

export default function TravelMap() {
  const [active, setActive] = useState(locations[0].id);
  const current = locations.find((location) => location.id === active);

  return (
    <section id="map" className="relative py-28 bg-neutral-50 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-extrabold text-[#ac683f] uppercase tracking-widest">
            Interactive Map
          </span>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-neutral-900 sm:text-4xl">
            Explore Sri Lanka By Region
          </h2>
          <p className="mt-4 text-sm leading-7 text-neutral-500 sm:text-base">
            Select a destination to see popular attractions, experiences, vendors, and package ideas.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] items-start">
          <div className="relative rounded-[2rem] border border-neutral-200 bg-white overflow-hidden shadow-sm">
            <div className="h-[420px] bg-[radial-gradient(circle_at_20%_30%,rgba(172,104,63,0.12),transparent_25%),radial-gradient(circle_at_80%_20%,rgba(172,104,63,0.08),transparent_18%),url('https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1200&q=80')] bg-cover bg-center"></div>
            <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(180deg,rgba(255,255,255,0.1),rgba(0,0,0,0.18))]" />
            <div className="absolute left-6 top-6 grid gap-3">
              {locations.map((location) => (
                <button
                  key={location.id}
                  type="button"
                  onClick={() => setActive(location.id)}
                  className={`rounded-3xl px-4 py-3 text-left text-sm font-semibold transition-all duration-300 ${
                    active === location.id
                      ? "bg-white text-neutral-900 shadow-2xl"
                      : "bg-white/90 text-neutral-500 hover:bg-white"
                  }`}
                >
                  {location.name}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-[2rem] border border-neutral-200 bg-white p-8 shadow-sm">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#ac683f]">
                {current?.name}
              </span>
              <h3 className="mt-4 text-2xl font-extrabold text-neutral-900">
                {current?.highlight}
              </h3>
              <div className="mt-6 space-y-4 text-sm text-neutral-500">
                {current?.stats.map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-2xl bg-[#ac683f]/10 text-[#ac683f] font-bold">
                      ✓
                    </span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[2rem] border border-neutral-200 bg-[#fcf7f0] p-6 shadow-sm">
              <h4 className="font-bold text-neutral-900">See what’s available</h4>
              <p className="mt-3 text-sm text-neutral-500 leading-relaxed">
                Popular attractions, vendor services and recommended packages for your selected region are surfaced instantly.
              </p>
              <div className="mt-6 grid gap-3">
                <div className="rounded-3xl bg-white p-4 text-sm text-neutral-700 shadow-sm">
                  <strong>Attractions:</strong> Temple tours, scenic viewpoints, and beaches.
                </div>
                <div className="rounded-3xl bg-white p-4 text-sm text-neutral-700 shadow-sm">
                  <strong>Experiences:</strong> Cultural tours, wildlife safaris, coastal adventures.
                </div>
                <div className="rounded-3xl bg-white p-4 text-sm text-neutral-700 shadow-sm">
                  <strong>Vendors:</strong> Hotels, restaurants, rentals and local guides.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
