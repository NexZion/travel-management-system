import { FaGear, FaCircleCheck } from "react-icons/fa6";

const checks = [
  "Personalized itineraries",
  "Budget-aware recommendations",
  "Hidden gem discoveries",
  "Smart travel suggestions",
];

export default function AICompanion() {
  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-5 relative flex justify-center">
          <div className="absolute w-72 h-[21rem] bg-[#EEDCC5]/20 rounded-[2rem] -rotate-6 transform translate-x-4" />
          <div className="relative w-72 h-[21rem] bg-white border border-neutral-100 rounded-[2rem] shadow-xl p-6 flex flex-col justify-between transform hover:rotate-0 transition-transform duration-500 anim-fade-in">
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="text-xs font-bold text-neutral-400 uppercase tracking-wider">
                  Live AI Generation
                </span>
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 relative flex">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
                </span>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full shimmer-anim shrink-0" />
                  <div className="h-4 rounded-full shimmer-anim w-2/3" />
                </div>
                <div className="space-y-2.5 pl-11">
                  <div className="h-3 rounded-full shimmer-anim w-full" />
                  <div className="h-3 rounded-full shimmer-anim w-5/6" />
                  <div className="h-3 rounded-full shimmer-anim w-3/4" />
                </div>
                <div className="pt-2 pl-11">
                  <div className="h-6 rounded-full shimmer-anim w-1/3" />
                </div>
              </div>
            </div>
            <div className="border-t border-neutral-100 pt-4 flex items-center justify-between">
              <span className="text-[10px] font-bold text-[#ac683f] block uppercase tracking-wider animate-pulse">
                Optimizing Travel Node...
              </span>
              <FaGear className="text-neutral-300 animate-spin text-xs" />
            </div>
          </div>
        </div>

        <div className="lg:col-span-7 space-y-6">
          <span className="text-xs font-extrabold text-[#ac683f] uppercase tracking-widest block">
            AI Trip Companion Engine
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-900 tracking-tight">
            Meet Your AI Travel Companion
          </h2>
          <p className="text-neutral-500 text-sm leading-relaxed">
            Tell us your destination, travel style, and budget. Our intelligent planning
            engine creates a personalized travel itinerary in seconds. Whether you&apos;re
            looking for adventure, relaxation, luxury, or cultural experiences, Xplore helps
            you discover the perfect journey.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm font-semibold text-neutral-700">
            {checks.map((c) => (
              <div key={c} className="flex items-center gap-2 group cursor-default">
                <FaCircleCheck className="text-[#ac683f] group-hover:scale-110 transition-transform" />{" "}
                {c}
              </div>
            ))}
          </div>
          <div className="pt-2">
            <a
              href="#search-bar"
              className="inline-block bg-[#ac683f] hover:bg-[#925430] text-white font-bold text-xs uppercase tracking-wider px-8 py-4 rounded-full shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 cursor-pointer"
            >
              Try AI Trip Planning
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
