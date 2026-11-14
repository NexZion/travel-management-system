import Link from "next/link";
import { ArrowRight, ArrowUpRight, Heart, Sparkles } from "lucide-react";

export default function RecommendedPlaces() {
  const recommendations = [
    {
      title: "Misty mountain trails",
      category: "Hill country · Nature",
      description: "Fresh air, hidden waterfalls and a slower pace in the hills.",
      tag: "Adventure",
      match: "98% match",
      image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=600&auto=format&fit=crop&q=80",
    },
    {
      title: "A slow day by the sea",
      category: "South coast · Beaches",
      description: "Palm-lined shores and golden-hour walks, just your style.",
      tag: "Relaxation",
      match: "96% match",
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&auto=format&fit=crop&q=80",
    },
    {
      title: "Stories carved in stone",
      category: "Cultural triangle · Heritage",
      description: "Ancient landmarks, local stories and a little wonder.",
      tag: "Culture",
      match: "94% match",
      image: "https://images.unsplash.com/photo-1588598198321-9735fd52455b?w=600&auto=format&fit=crop&q=80",
    },
  ];

  return (
    <div className="space-y-4">
      {/* Section Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-lg font-bold text-slate-900">
            A little more your kind of Sri Lanka
          </h2>
          <p className="text-xs text-slate-400 font-medium mt-0.5">
            Handpicked for your love of nature, culture and quiet escapes.
          </p>
        </div>
        <Link
          href="/places"
          className="flex items-center gap-1 group shrink-0"
        >
          <span className="text-xs font-bold text-sky-600 group-hover:text-sky-700 transition">
            Explore places
          </span>
          <ArrowRight className="w-3.5 h-3.5 stroke-[2.5] text-sky-600 group-hover:text-sky-700 transition" />
        </Link>
      </div>

      {/* 3 Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {recommendations.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl border border-sky-100 overflow-hidden shadow-2xs hover:shadow-sm transition flex flex-col justify-between"
          >
            {/* Image container */}
            <div className="relative h-40 w-full overflow-hidden">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              />
              {/* Match badge */}
              <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-xs px-2.5 py-0.5 rounded-full text-[10px] font-bold text-slate-800 shadow-2xs">
                {item.match}
              </div>
              {/* Favorite button */}
              <button className="absolute top-3 right-3 w-7 h-7 bg-white/90 backdrop-blur-xs rounded-full flex items-center justify-center text-slate-600 hover:text-rose-500 transition shadow-2xs cursor-pointer">
                <Heart className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Content area */}
            <div className="p-4 flex flex-col flex-1 justify-between space-y-3">
              <div>
                <span className="text-[11px] font-semibold text-slate-400">
                  {item.category}
                </span>
                <h3 className="text-sm font-bold text-slate-900 mt-0.5">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-500 font-medium mt-1 line-clamp-2">
                  {item.description}
                </p>
              </div>

              {/* Tag and Arrow icon */}
              <div className="flex items-center justify-between pt-2 border-t border-slate-50">
                <span className="bg-sky-50 text-sky-600 text-[10px] font-bold px-2 py-0.5 rounded-md">
                  {item.tag}
                </span>
                <button className="text-sky-500 hover:text-sky-600 transition cursor-pointer">
                  <ArrowUpRight className="w-4 h-4 stroke-[2.2]" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Footer inspiration note */}
      <div className="flex items-center gap-2 pt-1">
        <Sparkles className="w-4 h-4 text-sky-500 shrink-0 stroke-[2]" />
        <span className="text-xs font-medium text-slate-500">
          Inspired by your travel preferences. Your next discovery gets smarter with every trip.
        </span>
      </div>
    </div>
  );
}
