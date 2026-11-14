import {
    MapPin,
    CheckCircle2,
    MoreHorizontal,
    ArrowRight,
    RotateCcw,
} from "lucide-react";

export default function CompletedTrips() {
    const completedList = [
        {
            title: "A slow weekend by the sea",
            location: "Mirissa · Weligama",
            dates: "12–14 Sep 2026 · 3 days, 2 nights",
            travelers: "2 travelers",
            budget: "LKR 60,000",
            spent: "LKR 54,500",
            note: "Sunset walks, salty air and no alarms.",
            image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=700&auto=format&fit=crop&q=80",
        },
        {
            title: "Stories of the ancient cities",
            location: "Anuradhapura · Polonnaruwa",
            dates: "15–20 Jul 2026 · 6 days, 5 nights",
            travelers: "4 travelers",
            budget: "LKR 150,000",
            spent: "LKR 138,000",
            note: "Ancient wonders and a little perspective.",
            image: "https://images.unsplash.com/photo-1588598198321-9735fd52455b?w=700&auto=format&fit=crop&q=80",
        },
        {
            title: "Into the misty mountains",
            location: "Haputale · Horton Plains",
            dates: "03–07 May 2026 · 5 days, 4 nights",
            travelers: "2 travelers",
            budget: "LKR 85,000",
            spent: "LKR 79,200",
            note: "Early trails, tea stops and endless views.",
            image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=700&auto=format&fit=crop&q=80",
        },
    ];

    return (
        <section className="space-y-4">
            {/* Section Header */}
            <div className="flex items-center justify-between">
                <div>
                    <h2 className="text-lg font-bold text-slate-900 tracking-tight">
                        Places you&apos;ve been. Memories you&apos;ve made.
                    </h2>
                    <p className="text-[11px] text-slate-400 mt-0.5">
                        Revisit the details, look back on your spending, or do it all again.
                    </p>
                </div>
                <span className="text-[11px] text-slate-400 font-normal hidden sm:inline-block">
                    3 completed trips
                </span>
            </div>

            {/* 3 Completed Trip Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {completedList.map((trip, index) => (
                    <div
                        key={index}
                        className="bg-white rounded-2xl border border-sky-100 overflow-hidden shadow-2xs hover:shadow-sm transition flex flex-col justify-between"
                    >
                        {/* Top Cover Image */}
                        <div className="relative h-40 w-full">
                            <img
                                src={trip.image}
                                alt={trip.title}
                                className="w-full h-full object-cover"
                            />
                            {/* Completed badge */}
                            <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-xs px-2 py-0.5 rounded-full flex items-center gap-1 text-[10px] font-medium text-emerald-700 shadow-2xs">
                                <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                                <span>Completed</span>
                            </div>
                            {/* Options button */}
                            <button className="absolute top-3 right-3 w-6.5 h-6.5 bg-white/90 backdrop-blur-xs rounded-full flex items-center justify-center text-slate-600 hover:bg-white shadow-2xs transition cursor-pointer">
                                <MoreHorizontal className="w-3.5 h-3.5" />
                            </button>
                        </div>

                        {/* Content Body */}
                        <div className="p-4 flex flex-col flex-1 justify-between space-y-3.5">
                            <div>
                                {/* Location */}
                                <p className="text-[10.5px] font-medium text-sky-600 flex items-center gap-1">
                                    <MapPin className="w-3 h-3 text-sky-500" />
                                    <span>{trip.location}</span>
                                </p>

                                {/* Title */}
                                <h3 className="text-[13.5px] font-bold text-slate-900 mt-1 leading-snug">
                                    {trip.title}
                                </h3>

                                {/* Dates & Travelers */}
                                <p className="text-[10.5px] text-slate-400 mt-0.5">
                                    {trip.dates}
                                </p>
                                <p className="text-[10px] text-slate-400">
                                    {trip.travelers}
                                </p>
                            </div>

                            {/* Budget vs Spent Box */}
                            <div className="bg-sky-50/50 border border-sky-100/60 rounded-xl px-3 py-2 flex items-center justify-between">
                                <div>
                                    <span className="text-slate-400 text-[9.5px] block font-normal">
                                        Trip budget
                                    </span>
                                    <span className="font-bold text-slate-900 text-xs">
                                        {trip.budget}
                                    </span>
                                </div>
                                <div className="text-right">
                                    <span className="text-slate-400 text-[9.5px] block font-normal">
                                        Total spent
                                    </span>
                                    <span className="font-bold text-emerald-600 text-xs">
                                        {trip.spent}
                                    </span>
                                </div>
                            </div>

                            {/* Memory Note Quote */}
                            <p className="text-[10.5px] text-slate-500">
                                {trip.note}
                            </p>

                            {/* Action Buttons Row */}
                            <div className="pt-3 border-t border-sky-100 flex items-center justify-between">
                                {/* View trip pill button */}
                                {/* View trip pill button */}
                                <button className="flex items-center gap-2 bg-white hover:bg-sky-50/50 border border-sky-200 hover:border-sky-300 text-sky-600 text-xs font-bold px-4 py-2 rounded-2xl shadow-2xs transition cursor-pointer">
                                    <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
                                    <span className="font-bold text-[11.5px] ">View trip</span>
                                </button>
                                {/* Plan again link button */}
                                <button className="flex items-center gap-1 text-sky-600 hover:text-sky-700 text-[10.5px] font-medium transition cursor-pointer">
                                    <RotateCcw className="w-3 h-3 stroke-[2] text-sky-500" />
                                    <span className="font-bold text-[11.5px]">Plan again</span>
                                </button>
                            </div>

                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}