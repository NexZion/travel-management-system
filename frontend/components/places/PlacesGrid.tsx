import {
  Star,
  Heart,
  Plus,
  ArrowRight,
  ArrowDownWideNarrow,
  Map,
  Sparkles,
  ChevronDown,
  CheckCircle2,
  Navigation,
} from "lucide-react";

export default function PlacesGrid() {
  const places = [
    {
      title: "Ella",
      district: "Badulla district · Hill country",
      category: "Nature & trails",
      rating: "4.8",
      reviews: "1.2k",
      description: "Tea-covered hills, scenic train rides and a sunrise worth waking up for.",
      timeToExplore: "1–2 days",
      entry: "Free viewpoints",
      tip: "Best for: sunrise walks & scenic routes",
      visited: false,
      image: "https://images.unsplash.com/photo-1586861635167-e5223aadc9fe?w=700&auto=format&fit=crop&q=80",
    },
    {
      title: "Mirissa Beach",
      district: "Matara district · South coast",
      category: "Beaches",
      rating: "4.7",
      reviews: "986",
      description: "Palm-lined shores, gentle beach days and golden-hour walks by the sea.",
      timeToExplore: "Half a day",
      entry: "Free entry",
      tip: "Best time: November–April",
      visited: true,
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=700&auto=format&fit=crop&q=80",
    },
    {
      title: "Sigiriya Rock Fortress",
      district: "Matale district · Cultural triangle",
      category: "Heritage",
      rating: "4.9",
      reviews: "2.4k",
      description: "Ancient gardens, a remarkable climb and island views from the Lion Rock.",
      timeToExplore: "2–3 hours",
      entry: "Entry fee applies",
      tip: "Go early: cooler climbs, quieter paths",
      visited: false,
      image: "https://images.unsplash.com/photo-1588598198321-9735fd52455b?w=700&auto=format&fit=crop&q=80",
    },
    {
      title: "Horton Plains",
      district: "Nuwara Eliya district · Hill country",
      category: "Nature & trails",
      rating: "4.8",
      reviews: "754",
      description: "Misty trails, cool mountain air and sweeping views at World's End.",
      timeToExplore: "3–4 hours",
      entry: "Entry fee applies",
      tip: "Go before 9 am for clearer views",
      visited: true,
      image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=700&auto=format&fit=crop&q=80",
    },
    {
      title: "Polonnaruwa Ancient City",
      district: "Polonnaruwa · Cultural triangle",
      category: "Heritage",
      rating: "4.7",
      reviews: "862",
      description: "Cycle past ancient temples and stone-carved stories in the old royal city.",
      timeToExplore: "Half a day",
      entry: "Entry fee applies",
      tip: "Bring: water, a hat & temple-ready attire",
      visited: true,
      image: "https://images.unsplash.com/photo-1588598198321-9735fd52455b?w=700&auto=format&fit=crop&q=80",
    },
    {
      title: "Galle Fort",
      district: "Galle district · South coast",
      category: "Heritage",
      rating: "4.8",
      reviews: "1.6k",
      description: "Wander cobbled lanes, find a little café and watch the sunset from the ramparts.",
      timeToExplore: "2–3 hours",
      entry: "Free to explore",
      tip: "Best for: late-afternoon wandering",
      visited: false,
      image: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=700&auto=format&fit=crop&q=80",
    },
  ];

  return (
    <section className="space-y-5">
      {/* Grid Subheader (Title, Count, Sort, Map view) */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-2">
        <div>
          <h2 className="text-lg font-bold text-slate-900 tracking-tight">
            Find a place that feels like you.
          </h2>
          <p className="text-[11px] text-slate-400 font-medium mt-0.5">
            Showing 6 of 48 places · a little inspiration for your next journey
          </p>
        </div>

        {/* Sort & Map View Toggle */}
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-1.5 text-[11px] font-bold text-slate-700 hover:text-slate-900 transition cursor-pointer">
            <ArrowDownWideNarrow className="w-3.5 h-3.5 text-slate-500 stroke-[2]" />
            <span>Sort: Recommended</span>
            <ChevronDown className="w-3 h-3 text-slate-400 stroke-[2.2]" />
          </button>

          <button className="h-8.5 flex items-center gap-1.5 bg-white border border-sky-100 hover:bg-sky-50/60 rounded-xl px-3 shadow-2xs transition cursor-pointer">
            <Map className="w-3.5 h-3.5 text-sky-600 stroke-[2]" />
            <span className="text-[11px] font-bold text-sky-600">Map view</span>
          </button>
        </div>
      </div>

      {/* 6 Places Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {places.map((place, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl border border-sky-100 overflow-hidden shadow-2xs hover:shadow-sm transition flex flex-col justify-between"
          >
            {/* Cover Image & Badges */}
            <div className="relative h-48 w-full">
              <img
                src={place.image}
                alt={place.title}
                className="w-full h-full object-cover"
              />

              {/* Visited / Not yet visited Badge */}
              <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-xs px-2.5 py-0.5 rounded-full flex items-center gap-1 shadow-2xs">
                {place.visited ? (
                  <>
                    <CheckCircle2 className="w-3 h-3 text-emerald-600 stroke-[2.2]" />
                    <span className="text-[10px] font-bold text-emerald-700">Visited</span>
                  </>
                ) : (
                  <>
                    <Navigation className="w-3 h-3 text-sky-500 fill-sky-500" />
                    <span className="text-[10px] font-bold text-sky-700">Not yet visited</span>
                  </>
                )}
              </div>

              {/* Heart bookmark button */}
              <button className="absolute top-3 right-3 w-7 h-7 bg-white/90 backdrop-blur-xs rounded-full flex items-center justify-center text-slate-600 hover:text-rose-500 transition shadow-2xs cursor-pointer">
                <Heart className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Card Content Body */}
            <div className="p-5 flex flex-col flex-1 justify-between space-y-4">
              <div>
                {/* Category tag & Rating */}
                <div className="flex items-center justify-between">
                  <span className="bg-sky-50 text-sky-600 text-[10px] font-bold px-2 py-0.5 rounded-md">
                    {place.category}
                  </span>
                  <div className="flex items-center gap-1 text-[11px]">
                    <Star className="w-3 h-3 text-amber-400 fill-amber-400" />
                    <span className="font-bold text-slate-800">{place.rating}</span>
                    <span className="text-slate-400 text-[10px] font-medium">({place.reviews})</span>
                  </div>
                </div>

                {/* Place Title & Location */}
                <h3 className="text-base font-bold text-slate-900 mt-2">
                  {place.title}
                </h3>
                <p className="text-[11px] font-medium text-slate-400 mt-0.5">
                  {place.district}
                </p>

                {/* Description */}
                <p className="text-xs text-slate-500 font-normal mt-2 line-clamp-2">
                  {place.description}
                </p>

                {/* Exploration & Entry details box */}
                <div className="bg-sky-50/50 border border-sky-100/60 rounded-xl p-3 flex items-center justify-between mt-3">
                  <div>
                    <span className="text-slate-400 text-[9.5px] block font-normal">
                      Time to explore
                    </span>
                    <span className="font-bold text-slate-800 text-xs">
                      {place.timeToExplore}
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="text-slate-400 text-[9.5px] block font-normal">
                      Entry
                    </span>
                    <span className="font-bold text-slate-800 text-xs">
                      {place.entry}
                    </span>
                  </div>
                </div>

                {/* Tip note */}
                <p className="text-[10.5px] text-slate-400 font-medium mt-2">
                  {place.tip}
                </p>
              </div>

              {/* Bottom Actions Row */}
              <div className="pt-3 border-t border-sky-100 flex items-center justify-between">
                {/* Add to trip button */}
                <button className="flex items-center gap-1.5 bg-sky-500 hover:bg-sky-600 px-3.5 py-1.5 rounded-xl shadow-xs transition cursor-pointer">
                  <Plus className="w-3.5 h-3.5 stroke-[2.5] text-white" />
                  <span className="text-xs font-bold text-white">Add to trip</span>
                </button>

                {/* View details link */}
                <button className="flex items-center gap-1 group text-sky-600 hover:text-sky-700 transition cursor-pointer">
                  <span className="text-xs font-bold text-sky-600 group-hover:text-sky-700">
                    View details
                  </span>
                  <ArrowRight className="w-3.5 h-3.5 stroke-[2.5] text-sky-600 group-hover:text-sky-700" />
                </button>
              </div>

            </div>
          </div>
        ))}
      </div>

      {/* 4. Bottom Note & Pagination Bar */}
      <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Inspiration note */}
        <div className="flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-sky-500 stroke-[2] shrink-0" />
          <span className="text-xs font-medium text-slate-500">
            A place you love? Add it to a trip or save it for another day.
          </span>
        </div>

        {/* Pagination Controls */}
        <div className="flex items-center gap-3">
          <span className="text-[11px] font-medium text-slate-400">Page 1 of 8</span>
          <span className="w-6.5 h-6.5 rounded-lg bg-sky-100/80 text-sky-700 font-bold text-xs flex items-center justify-center">
            1
          </span>
          <button className="flex items-center gap-1 bg-white border border-sky-100 hover:bg-slate-50 px-3 py-1 rounded-xl shadow-2xs transition cursor-pointer">
            <span className="text-xs font-bold text-slate-700">Next</span>
            <ArrowRight className="w-3 h-3 stroke-[2.2] text-slate-600" />
          </button>
        </div>
      </div>
    </section>
  );
}
