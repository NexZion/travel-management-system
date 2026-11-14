import {
  ArrowRight,
  Pencil,
  MoreHorizontal,
  MapPin,
  Route,
  Sparkles,
} from "lucide-react";

export default function PlannedTripCard() {
  return (
    <section className="space-y-3">
      {/* Section Header */}
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold text-slate-900">Your next adventure</h2>
        <span className="text-xs text-slate-400 font-medium">
          1 planned trip · a little closer to getting away
        </span>
      </div>

      {/* Main 3-column Card */}
      <div className="bg-white rounded-2xl border border-sky-100 shadow-xs overflow-hidden grid grid-cols-1 md:grid-cols-12">
        
        {/* 1. Left: Cover Image (4 cols on desktop) */}
        <div className="relative md:col-span-4 min-h-[240px] md:min-h-full">
          <img
            src="https://images.unsplash.com/photo-1586861635167-e5223aadc9fe?w=800&auto=format&fit=crop&q=80"
            alt="Ella landscape"
            className="absolute inset-0 w-full h-full object-cover"
          />
          {/* Dark gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />

          {/* Days to go badge */}
          <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-xs px-3 py-1 rounded-full text-[11px] font-bold text-slate-800 shadow-xs">
            12 days to go
          </div>

          {/* Bottom text overlay */}
          <div className="absolute bottom-4 left-4 right-4 text-white">
            <h3 className="text-xl font-bold leading-snug">
              The hills are calling.
            </h3>
            <p className="text-xs text-white/90 flex items-center gap-1 mt-0.5 font-medium">
              <MapPin className="w-3.5 h-3.5 text-sky-300" />
              <span className="font-medium text-white/90">Sri Lanka&apos;s hill country</span>
            </p>
          </div>
        </div>

        {/* 2. Middle: Trip Info & Actions (5 cols on desktop) */}
        <div className="p-6 md:col-span-5 flex flex-col justify-between space-y-5">
          {/* Status badge & Travelers */}
          <div>
            <div className="flex items-center justify-between">
              <span className="bg-sky-50 text-sky-600 font-bold text-xs px-2.5 py-0.5 rounded-full">
                Planned · Upcoming
              </span>
              <span className="text-slate-400 text-xs font-medium">2 travelers</span>
            </div>

            <h3 className="text-xl font-bold text-slate-900 mt-2">
              A little escape to Ella
            </h3>
            <p className="text-xs text-slate-500 font-medium mt-0.5">
              18–21 Oct 2026 · 4 days, 3 nights
            </p>
          </div>

          {/* Route Info */}
          <div className="bg-sky-50/70 border border-sky-100 rounded-xl p-3 flex items-center gap-2.5">
            <Route className="w-4 h-4 text-sky-500 shrink-0" />
            <span className="text-xs font-semibold text-slate-700">
              Colombo → Kandy → Ella
            </span>
          </div>

          {/* Booking Progress */}
          <div className="space-y-1.5">
            <div className="flex justify-between items-center">
              <span className="text-xs font-semibold text-slate-700">
                3 of 4 bookings confirmed
              </span>
              <span className="text-xs font-bold text-sky-600">
                75%
              </span>
            </div>
            <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
              <div className="h-full bg-sky-500 rounded-full w-[75%]" />
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex items-center gap-2 pt-1">
            {/* Continue planning */}
            <button className="flex items-center gap-1.5 bg-sky-500 hover:bg-sky-600 text-white px-4 py-2.5 rounded-xl shadow-xs transition cursor-pointer">
              <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
              <span className="text-xs font-bold text-white">Continue planning</span>
            </button>

            {/* Edit trip */}
            <button className="flex items-center gap-1.5 bg-white border border-slate-200 hover:bg-slate-50 px-3.5 py-2.5 rounded-xl transition cursor-pointer">
              <Pencil className="w-3.5 h-3.5 stroke-[2.2] text-slate-600" />
              <span className="text-xs font-bold text-slate-700">Edit trip</span>
            </button>

            {/* Options button */}
            <button className="p-2.5 bg-white border border-slate-200 hover:bg-slate-50 text-slate-500 rounded-xl transition cursor-pointer">
              <MoreHorizontal className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* 3. Right: Mini Budget Panel (3 cols on desktop) */}
        <div className="p-6 md:col-span-3 border-t md:border-t-0 md:border-l border-slate-100 bg-slate-50/40 flex flex-col justify-between space-y-4">
          {/* Budget status */}
          <div>
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold text-slate-500">Trip budget</span>
              <span className="bg-emerald-50 text-emerald-700 text-[11px] font-bold px-2 py-0.5 rounded-full">
                On budget
              </span>
            </div>

            <div className="mt-2">
              <h4 className="text-xl font-bold text-slate-900 tracking-tight">
                LKR 90,000
              </h4>
              <p className="text-[11px] text-slate-400 font-medium mt-0.5">
                For 2 travelers · LKR 45,000 each
              </p>
            </div>
          </div>

          {/* Estimated cost bar */}
          <div className="space-y-1.5">
            <div className="flex justify-between items-center">
              <span className="text-xs font-medium text-slate-600">Estimated cost</span>
              <span className="text-xs font-bold text-slate-900">LKR 70,000</span>
            </div>
            <div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden">
              <div className="h-full bg-sky-500 rounded-full w-[78%]" />
            </div>
          </div>

          {/* Savings highlight & Booking link */}
          <div className="space-y-3 pt-2">
            <div className="flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5 text-sky-500 shrink-0" />
              <span className="text-xs font-bold text-sky-600">
                LKR 20,000 left for little extras.
              </span>
            </div>

            <div className="pt-2 border-t border-slate-200/60">
              <p className="text-[11px] text-slate-400 font-medium">
                One thing left: Kandy → Ella train
              </p>
              <button className="text-xs font-bold text-sky-600 hover:text-sky-700 mt-1 cursor-pointer">
                Manage bookings →
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}