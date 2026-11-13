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
      {/* 1. Greeting Area */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <span className="text-xs font-semibold tracking-wider text-sky-500 uppercase">
            YOUR TRAVEL SPACE
          </span>
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 mt-1">
            Ayubowan, Amaya. Where to next?
          </h1>
          <p className="text-sm text-slate-500 mt-1">
            A little inspiration, a smarter plan, and a whole island waiting for you.
          </p>
        </div>

        {/* Plan a new trip button */}
        <div>
          <button className="flex items-center gap-2 bg-sky-500 hover:bg-sky-600 text-white font-medium px-5 py-2.5 rounded-xl shadow-xs transition cursor-pointer text-sm whitespace-nowrap">
            <Sparkles className="w-4 h-4" />
            <span>Plan a new trip</span>
          </button>
        </div>
      </div>

      {/* 2. Quick Stats Grid (Cards 4) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((item, index) => {
          const Icon = item.icon;
          return (
            <div
              key={index}
              className="bg-white rounded-2xl p-5 border border-sky-100 shadow-xs hover:shadow-md transition"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-medium text-slate-500">
                  {item.title}
                </span>
                <div className="w-8 h-8 rounded-lg bg-sky-50 flex items-center justify-center text-sky-500">
                  <Icon className="w-4 h-4" />
                </div>
              </div>

              <div className="mt-3">
                <span className="text-3xl font-bold text-slate-900 tracking-tight">
                  {item.value}
                </span>
                <p className="text-xs text-slate-400 mt-1">
                  {item.subtext}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}