import { Sparkles, Route, MapPin, Sun, Heart } from "lucide-react";

export default function WelcomeStats() {
  const stats = [
    {
      title: "Your journeys",
      value: "04",
      subtext: "3 explored · 1 upcoming",
      icon: Route,
    },
    {
      title: "Places discovered",
      value: "12",
      subtext: "Across 5 districts",
      icon: MapPin,
    },
    {
      title: "Days of adventure",
      value: "18",
      subtext: "Memories made this year",
      icon: Sun,
    },
    {
      title: "Saved for later",
      value: "08",
      subtext: "Your next little escapes",
      icon: Heart,
    },
  ];

  return (
    <section className="space-y-6">
      {/* 1. Header Area */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <span className="text-[11px] font-bold tracking-wider text-sky-500 uppercase">
            YOUR TRAVEL SPACE
          </span>
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 mt-0.5 tracking-tight">
            Ayubowan, Amaya. Where to next?
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 font-medium mt-1">
            A little inspiration, a smarter plan, and a whole island waiting for you.
          </p>
        </div>

        {/* Plan a new trip button */}
        <div>
          <button className="flex items-center gap-2 bg-sky-500 hover:bg-sky-600 px-4.5 py-2.5 rounded-2xl shadow-xs transition cursor-pointer whitespace-nowrap">
            <Sparkles className="w-3.5 h-3.5 stroke-[2.2] text-white" />
            <span className="text-xs font-bold text-white">
              Plan a new trip
            </span>
          </button>
        </div>
      </div>

      {/* 2. Quick Stats Grid (4 Cards matching the screenshot) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((item, index) => {
          const Icon = item.icon;
          return (
            <div
              key={index}
              className="bg-white rounded-[22px] p-5 border border-sky-100 shadow-2xs hover:shadow-xs transition"
            >
              {/* Top Row: Title and clean floating Icon */}
              <div className="flex items-center justify-between">
                <span className="text-[11.5px] font-semibold text-slate-700">
                  {item.title}
                </span>
                <Icon className="w-4 h-4 text-sky-500 stroke-[2]" />
              </div>

              {/* Bottom Row: Big Number and inline Subtext */}
              <div className="mt-3.5 flex items-baseline gap-2.5">
                <span className="text-3xl font-bold text-slate-900 tracking-tight">
                  {item.value}
                </span>
                <span className="text-[11px] font-medium text-slate-400">
                  {item.subtext}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}