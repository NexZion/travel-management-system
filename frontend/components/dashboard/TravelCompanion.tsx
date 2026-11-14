import Link from "next/link";
import {
  Sparkles,
  ArrowRight,
  Bed,
  UserCheck,
  Car,
  Train,
  CheckCircle2,
} from "lucide-react";

export default function TravelCompanion() {
  const checklistItems = [
    {
      title: "Ella Green Stay",
      subtitle: "3 nights · Verified stay",
      icon: Bed,
      completed: true,
    },
    {
      title: "Sunrise walk with Nimal",
      subtitle: "19 Oct · Verified local guide",
      icon: UserCheck,
      completed: true,
    },
    {
      title: "Colombo to Kandy transfer",
      subtitle: "18 Oct · Verified transport",
      icon: Car,
      completed: true,
    },
    {
      title: "Kandy → Ella train",
      subtitle: "Choose your seats to finish",
      icon: Train,
      completed: false,
    },
  ];

  return (
    <div className="space-y-4">
      {/* 1. AI Travel Companion Card */}
      <div className="bg-white rounded-2xl border border-sky-100 p-5 shadow-xs space-y-3">
        <div className="flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-sky-500 stroke-[2.2]" />
          <h3 className="text-sm font-bold text-slate-900">
            Your AI travel companion
          </h3>
        </div>

        <p className="text-xs text-slate-600 leading-relaxed font-medium">
          Love scenic routes? Let&apos;s find a quieter sunrise walk and a tea stop for your Ella escape.
        </p>

        <Link
          href="#"
          className="inline-flex items-center gap-1 group"
        >
          <span className="text-xs font-bold text-sky-600 group-hover:text-sky-700 transition">
            Ask Xplore AI
          </span>
          <ArrowRight className="w-3.5 h-3.5 stroke-[2.2] text-sky-600 group-hover:text-sky-700 transition" />
        </Link>
      </div>

      {/* 2. Before You Go Checklist Card */}
      <div className="bg-white rounded-2xl border border-sky-100 p-5 shadow-xs space-y-4">
        {/* Checklist header */}
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-bold text-slate-900">Before you go</h3>
          <span className="text-xs font-bold text-sky-600">1 thing left</span>
        </div>

        {/* Checklist list */}
        <div className="space-y-3">
          {checklistItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="flex items-center justify-between py-1"
              >
                {/* Left: Icon and title */}
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-sky-50 flex items-center justify-center text-sky-600 shrink-0">
                    <Icon className="w-4 h-4 stroke-[2]" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-800">
                      {item.title}
                    </h4>
                    <p className="text-[11px] font-medium text-slate-400 mt-0.5">
                      {item.subtitle}
                    </p>
                  </div>
                </div>

                {/* Right: Completed check or Action button */}
                <div>
                  {item.completed ? (
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 stroke-[2.2]" />
                  ) : (
                    <button className="bg-sky-50 hover:bg-sky-100 border border-sky-200 px-2.5 py-1 rounded-md transition cursor-pointer">
                      <span className="text-[11px] font-bold text-sky-600">
                        To book
                      </span>
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}