"use client";

import { useState } from "react";
import {
  Star,
  ShieldCheck,
  MapPin,
  Heart,
  ChevronDown,
  ArrowRight,
  Sparkles,
  Check,
  CheckCircle2,
} from "lucide-react";

export default function VendorsDirectory() {
  const [minRating, setMinRating] = useState("4+");
  const [verifiedOnly, setVerifiedOnly] = useState(true);

  const vendors = [
    {
      name: "Palm Cove Retreat",
      category: "Resort",
      location: "Mirissa, Southern Province",
      rating: "4.9",
      reviews: "124",
      price: "LKR 24,000",
      description: "Oceanfront stays, a palm-fringed pool and warm island hospitality.",
      saved: true,
      image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=700&auto=format&fit=crop&q=80",
    },
    {
      name: "The Ella Hideaway",
      category: "Guesthouse",
      location: "Ella, Uva Province",
      rating: "4.8",
      reviews: "86",
      price: "LKR 8,500",
      description: "A family-run hill-country stay with sweeping views and home cooking.",
      saved: false,
      image: "https://images.unsplash.com/photo-1586861635167-e5223aadc9fe?w=700&auto=format&fit=crop&q=80",
    },
    {
      name: "Fort Courtyard House",
      category: "Hotel",
      location: "Galle, Southern Province",
      rating: "4.9",
      reviews: "203",
      price: "LKR 18,000",
      description: "Boutique comfort in a restored heritage home inside Galle Fort.",
      saved: false,
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=700&auto=format&fit=crop&q=80",
    },
    {
      name: "Lakeview Villa Kandy",
      category: "Villa",
      location: "Kandy, Central Province",
      rating: "4.7",
      reviews: "67",
      price: "LKR 32,000",
      description: "A peaceful private villa for families, nestled in the green hills of Kandy.",
      saved: false,
      image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=700&auto=format&fit=crop&q=80",
    },
    {
      name: "Weligama Social Stay",
      category: "Hostel",
      location: "Weligama, Southern Province",
      rating: "4.8",
      reviews: "152",
      price: "LKR 3,500",
      description: "Friendly shared spaces and relaxed rooms, just a stroll from the surf.",
      saved: false,
      image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=700&auto=format&fit=crop&q=80",
    },
    {
      name: "Sigiriya Garden Lodge",
      category: "Hotel",
      location: "Sigiriya, Central Province",
      rating: "4.8",
      reviews: "98",
      price: "LKR 12,500",
      description: "Garden cottages and local hospitality in the heart of the cultural triangle.",
      saved: true,
      image: "https://images.unsplash.com/photo-1588598198321-9735fd52455b?w=700&auto=format&fit=crop&q=80",
    },
  ];

  return (
    <section className="space-y-6 pt-4">
      {/* 1. Header Row */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
            Accommodation vendors
          </h2>
          <p className="text-xs font-medium text-slate-400 mt-0.5">
            128 of 186 vendors match your filters
          </p>
        </div>

        {/* Sort by dropdown */}
        <div className="flex items-center gap-2">
          <span className="text-xs font-medium text-slate-400">Sort by</span>
          <button className="h-9 flex items-center gap-2 bg-white border border-sky-100 hover:bg-slate-50 rounded-xl px-3.5 shadow-2xs transition cursor-pointer">
            <span className="text-xs font-bold text-slate-700">Recommended</span>
            <ChevronDown className="w-3.5 h-3.5 text-slate-400 stroke-[2.2]" />
          </button>
        </div>
      </div>

      {/* 2. Selected Filter Pills Row */}
      <div className="flex flex-wrap items-center gap-2 text-xs">
        <span className="text-xs font-medium text-slate-400 mr-1">Selected:</span>
        
        {/* Pill 1 */}
        <div className="bg-sky-100/80 px-2.5 py-1 rounded-lg flex items-center gap-1.5 shadow-2xs">
          <span className="text-xs font-bold text-sky-700">Accommodation</span>
          <span className="text-[13px] font-bold text-sky-700 leading-none cursor-pointer hover:text-sky-900">×</span>
        </div>

        {/* Pill 2 */}
        <div className="bg-sky-100/80 px-2.5 py-1 rounded-lg flex items-center gap-1.5 shadow-2xs">
          <span className="text-xs font-bold text-sky-700">Rating 4+</span>
          <span className="text-[13px] font-bold text-sky-700 leading-none cursor-pointer hover:text-sky-900">×</span>
        </div>

        {/* Pill 3 */}
        <div className="bg-sky-100/80 px-2.5 py-1 rounded-lg flex items-center gap-1.5 shadow-2xs">
          <span className="text-xs font-bold text-sky-700">Verified only</span>
          <span className="text-[13px] font-bold text-sky-700 leading-none cursor-pointer hover:text-sky-900">×</span>
        </div>

        {/* Clear all */}
        <button className="ml-2 transition cursor-pointer">
          <span className="text-xs font-bold text-sky-600 hover:text-sky-700">
            Clear all
          </span>
        </button>
      </div>

      {/* 3. Main Content: Sidebar + Cards Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 items-start">
        
        {/* Left Column: Filter Sidebar */}
        <div className="lg:col-span-1 space-y-4">
          <div className="bg-white rounded-2xl border border-sky-100 p-5 shadow-xs space-y-5">
            {/* Sidebar header */}
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <span className="text-sm font-bold text-slate-900">Filters</span>
              <button className="cursor-pointer">
                <span className="text-xs font-bold text-sky-600 hover:text-sky-700">
                  Reset all
                </span>
              </button>
            </div>

            {/* Subcategory */}
            <div className="space-y-1.5">
              <span className="text-xs font-bold text-slate-700 block">
                Subcategory
              </span>
              <button className="w-full h-9 flex items-center justify-between bg-white border border-slate-200 hover:border-slate-300 rounded-xl px-3 shadow-2xs cursor-pointer">
                <span className="text-xs font-semibold text-slate-700">All accommodation types</span>
                <ChevronDown className="w-3.5 h-3.5 text-slate-400 stroke-[2.2]" />
              </button>
              <p className="text-[10px] font-medium text-slate-400">
                Hotel, Resort, Villa, Guesthouse, Hostel
              </p>
            </div>

            {/* Province */}
            <div className="space-y-1.5">
              <span className="text-xs font-bold text-slate-700 block">
                Province
              </span>
              <button className="w-full h-9 flex items-center justify-between bg-white border border-slate-200 hover:border-slate-300 rounded-xl px-3 shadow-2xs cursor-pointer">
                <span className="text-xs font-semibold text-slate-700">All provinces</span>
                <ChevronDown className="w-3.5 h-3.5 text-slate-400 stroke-[2.2]" />
              </button>
            </div>

            {/* Price per night */}
            <div className="space-y-1.5">
              <span className="text-xs font-bold text-slate-700 block">
                Price per night
              </span>
              <button className="w-full h-9 flex items-center justify-between bg-white border border-slate-200 hover:border-slate-300 rounded-xl px-3 shadow-2xs cursor-pointer">
                <span className="text-xs font-semibold text-slate-700">Any budget</span>
                <ChevronDown className="w-3.5 h-3.5 text-slate-400 stroke-[2.2]" />
              </button>
            </div>

            {/* Minimum rating */}
            <div className="space-y-1.5">
              <span className="text-xs font-bold text-slate-700 block">
                Minimum rating
              </span>
              <div className="grid grid-cols-4 gap-1.5">
                {["Any", "3+", "4+", "4.5+"].map((rating) => {
                  const isActive = minRating === rating;
                  return (
                    <button
                      key={rating}
                      onClick={() => setMinRating(rating)}
                      className={`h-8 rounded-lg transition cursor-pointer border ${
                        isActive
                          ? "bg-sky-100/90 border-sky-300"
                          : "bg-white border-slate-200 hover:bg-slate-50"
                      }`}
                    >
                      <span
                        className={`text-xs font-bold ${
                          isActive ? "text-sky-700" : "text-slate-600"
                        }`}
                      >
                        {rating}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Verified vendors only checkbox */}
            <div className="pt-1">
              <label
                onClick={() => setVerifiedOnly(!verifiedOnly)}
                className="flex items-center gap-2.5 cursor-pointer select-none"
              >
                <div
                  className={`w-4 h-4 rounded flex items-center justify-center transition ${
                    verifiedOnly
                      ? "bg-sky-500 text-white"
                      : "border border-slate-300 bg-white"
                  }`}
                >
                  {verifiedOnly && <Check className="w-3 h-3 stroke-[3]" />}
                </div>
                <span className="text-xs font-bold text-slate-700">
                  Verified vendors only
                </span>
              </label>
            </div>

            {/* Amenities Checkboxes */}
            <div className="space-y-2 pt-2 border-t border-slate-100">
              <span className="text-xs font-bold text-slate-700 block">
                Amenities
              </span>
              <div className="space-y-2">
                {["Wi-Fi", "Swimming pool", "Free parking", "Breakfast included"].map(
                  (amenity) => (
                    <label
                      key={amenity}
                      className="flex items-center gap-2.5 cursor-pointer"
                    >
                      <input
                        type="checkbox"
                        className="w-3.5 h-3.5 rounded border-slate-300 text-sky-500 focus:ring-sky-400"
                      />
                      <span className="text-xs font-medium text-slate-600">
                        {amenity}
                      </span>
                    </label>
                  )
                )}
              </div>
            </div>
          </div>

          {/* Local partners trust badge */}
          <div className="bg-sky-50/70 rounded-2xl border border-sky-100 p-4 space-y-2">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-sky-600 stroke-[2.2]" />
              <span className="text-xs font-bold text-slate-900">
                Local partners. More trust.
              </span>
            </div>
            <p className="text-[11px] font-medium text-slate-500 leading-relaxed">
              Verified badges identify vendors whose business details have been checked by Xplore.
            </p>
            <button className="flex items-center gap-1 cursor-pointer">
              <span className="text-xs font-bold text-sky-600 hover:text-sky-700">
                About verification
              </span>
              <ArrowRight className="w-3 h-3 stroke-[2.5] text-sky-600" />
            </button>
          </div>
        </div>

        {/* Right Column: 6 Vendor Cards Grid */}
        <div className="lg:col-span-3 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
            {vendors.map((vendor, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl border border-sky-100 overflow-hidden shadow-2xs hover:shadow-sm transition flex flex-col justify-between"
              >
                {/* Cover Image & Badges */}
                <div className="relative h-44 w-full">
                  <img
                    src={vendor.image}
                    alt={vendor.name}
                    className="w-full h-full object-cover"
                  />

                  {/* Verified Badge */}
                  <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-xs px-2.5 py-0.5 rounded-full flex items-center gap-1 shadow-2xs">
                    <CheckCircle2 className="w-3 h-3 text-sky-600 stroke-[2.2]" />
                    <span className="text-[10px] font-bold text-sky-700">Verified</span>
                  </div>

                  {/* Saved to your favorites banner */}
                  {vendor.saved && (
                    <div className="absolute bottom-3 left-3 bg-white/95 backdrop-blur-xs px-2.5 py-0.5 rounded-full shadow-2xs">
                      <span className="text-[10px] font-bold text-slate-700">
                        Saved to your favorites
                      </span>
                    </div>
                  )}

                  {/* Bookmark heart button */}
                  <button className="absolute top-3 right-3 w-7 h-7 bg-white/90 backdrop-blur-xs rounded-full flex items-center justify-center transition shadow-2xs cursor-pointer">
                    <Heart
                      className={`w-3.5 h-3.5 ${
                        vendor.saved
                          ? "text-sky-500 fill-sky-500"
                          : "text-slate-600 hover:text-rose-500"
                      }`}
                    />
                  </button>
                </div>

                {/* Content Body */}
                <div className="p-4 flex flex-col flex-1 justify-between space-y-3.5">
                  <div>
                    {/* Category tag & Rating */}
                    <div className="flex items-center justify-between">
                      <span className="bg-sky-50 text-sky-600 text-[10px] font-bold px-2 py-0.5 rounded-md">
                        {vendor.category}
                      </span>
                      <div className="flex items-center gap-1 text-[11px]">
                        <Star className="w-3 h-3 text-amber-400 fill-amber-400" />
                        <span className="text-xs font-bold text-slate-800">{vendor.rating}</span>
                        <span className="text-[10px] font-medium text-slate-400">
                          ({vendor.reviews})
                        </span>
                      </div>
                    </div>

                    {/* Vendor Name */}
                    <h3 className="text-sm font-bold text-slate-900 mt-1.5 leading-snug">
                      {vendor.name}
                    </h3>

                    {/* Location */}
                    <p className="flex items-center gap-1 mt-0.5">
                      <MapPin className="w-3 h-3 text-sky-500 shrink-0" />
                      <span className="text-[10.5px] font-medium text-slate-400">
                        {vendor.location}
                      </span>
                    </p>

                    {/* Description */}
                    <p className="text-xs font-normal text-slate-500 mt-1.5 line-clamp-2">
                      {vendor.description}
                    </p>
                  </div>

                  {/* Price & Action Row */}
                  <div className="pt-3 border-t border-sky-100 flex items-center justify-between">
                    <div>
                      <span className="text-[9.5px] font-normal text-slate-400 block">
                        From / night
                      </span>
                      <span className="text-xs font-bold text-slate-900">
                        {vendor.price}
                      </span>
                    </div>

                    <button className="flex items-center gap-1 group transition cursor-pointer">
                      <span className="text-xs font-bold text-sky-600 group-hover:text-sky-700">
                        View vendor
                      </span>
                      <ArrowRight className="w-3 h-3 stroke-[2.5] text-sky-600 group-hover:text-sky-700" />
                    </button>
                  </div>

                </div>
              </div>
            ))}
          </div>

          {/* 4. Bottom Counter & Pagination Row */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4">
            {/* Counter */}
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-sky-500 stroke-[2] shrink-0" />
              <span className="text-xs font-medium text-slate-500">
                Showing 1–6 of 128 vendors
              </span>
            </div>

            {/* Pagination Controls */}
            <div className="flex items-center gap-1.5">
              <button className="w-7 h-7 rounded-lg border border-sky-100 bg-white hover:bg-slate-50 flex items-center justify-center shadow-2xs cursor-pointer">
                <span className="text-xs font-bold text-slate-400">‹</span>
              </button>
              <button className="w-7 h-7 rounded-lg bg-sky-500 flex items-center justify-center shadow-xs">
                <span className="text-xs font-bold text-white">1</span>
              </button>
              <button className="w-7 h-7 rounded-lg border border-sky-100 bg-white hover:bg-slate-50 flex items-center justify-center shadow-2xs cursor-pointer">
                <span className="text-xs font-bold text-slate-700">2</span>
              </button>
              <button className="w-7 h-7 rounded-lg border border-sky-100 bg-white hover:bg-slate-50 flex items-center justify-center shadow-2xs cursor-pointer">
                <span className="text-xs font-bold text-slate-700">3</span>
              </button>
              <span className="text-xs font-bold text-slate-400 px-1">...</span>
              <button className="w-7 h-7 rounded-lg border border-sky-100 bg-white hover:bg-slate-50 flex items-center justify-center shadow-2xs cursor-pointer">
                <span className="text-xs font-bold text-slate-700">22</span>
              </button>
              <button className="flex items-center gap-1 px-2.5 h-7 rounded-lg border border-sky-100 bg-white hover:bg-slate-50 shadow-2xs cursor-pointer">
                <span className="text-xs font-bold text-slate-700">Next</span>
                <span className="text-xs font-bold text-slate-700">›</span>
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
