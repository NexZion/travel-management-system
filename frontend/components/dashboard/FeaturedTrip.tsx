import Link from "next/link";
import { ArrowRight, MapPin, Route } from "lucide-react";

export default function FeaturedTrip() {
  return (
    <div className="space-y-3">
      {/* 1. Header (Title & All trips link) */}
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-bold text-slate-900">
          Your next adventure
        </h2>
        <Link
          href="#"
          className="text-xs font-semibold text-sky-600 hover:text-sky-700 flex items-center gap-1"
        >
          <span className="text-sky-600">All trips</span>
          <ArrowRight className="w-3.5 h-3.5 text-sky-600" />
        </Link>
      </div>

      {/* 2. Main Card (Image + Details) */}
      <div className="bg-white rounded-2xl border border-sky-100 shadow-xs overflow-hidden grid grid-cols-1 md:grid-cols-2">
        
        
        <div className="relative min-h-[240px] md:min-h-full">
          <img
            src="https://images.unsplash.com/photo-1586861635167-e5223aadc9fe?w=800&auto=format&fit=crop&q=80"
            alt="Ella Sri Lanka"
            className="absolute inset-0 w-full h-full object-cover"
          />
         
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

          {/* 12 days to go Badge */}
          <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-xs px-3 py-1 rounded-full text-[11px] font-semibold text-slate-800 shadow-xs">
            12 days to go
          </div>

          {/* Image එක යටින් තියෙන Text */}
          <div className="absolute bottom-4 left-4 right-4 text-white">
            <h3 className="text-xl font-bold leading-snug">
              The hills are calling.
            </h3>
            <p className="text-xs text-white/80 flex items-center gap-1 mt-0.5">
              <MapPin className="w-3.5 h-3.5 text-sky-300" />
              <span>Sri Lanka&apos;s hill country</span>
            </p>
          </div>
        </div>

        {/* දකුණු පැත්ත: Trip Details */}
        <div className="p-6 flex flex-col justify-between space-y-5">
          {/* Top badges */}
          <div>
            <div className="flex items-center justify-between text-xs">
              <span className="bg-sky-50 text-sky-600 font-semibold px-2.5 py-0.5 rounded-full">
                Upcoming trip
              </span>
              <span className="text-slate-400">2 travelers</span>
            </div>

            <h3 className="text-xl font-bold text-slate-900 mt-2">
              A little escape to Ella
            </h3>
            <p className="text-xs text-slate-500 mt-0.5">
              18–21 Oct 2026 · 4 days, 3 nights
            </p>
          </div>

          {/* Route Box */}
          <div className="bg-sky-50/70 border border-sky-100 rounded-xl p-3 flex items-center gap-2.5 text-xs text-slate-700">
            <Route className="w-4 h-4 text-sky-500 shrink-0" />
            <span className="font-medium">Colombo → Kandy → Ella</span>
          </div>

          {/* Progress Bar (75%) */}
          <div className="space-y-1.5">
            <div className="flex justify-between text-xs">
              <span className="text-slate-600 font-medium">
                Your itinerary is almost ready
              </span>
              <span className="text-sky-600 font-bold">75%</span>
            </div>
            {/* Progress track */}
            <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
              <div className="h-full bg-sky-500 rounded-full w-[75%]" />
            </div>
          </div>

          {/* Action button & booking status */}
          <div className="pt-1">
            <button className="w-full sm:w-auto flex items-center justify-center gap-2 bg-sky-500 hover:bg-sky-600 text-white font-medium text-xs px-5 py-2.5 rounded-xl shadow-xs transition cursor-pointer">
              <ArrowRight className="w-3.5 h-3.5" />
              <span>Continue planning</span>
            </button>
            <p className="text-[11px] text-slate-400 mt-2">
              3 of 4 bookings confirmed
            </p>
          </div>

        </div>

      </div>
    </div>
  );
}