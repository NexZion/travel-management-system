"use client";

import {
  FaArrowRight,
  FaCompass,
  FaLocationDot,
} from "react-icons/fa6";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-10 pb-20 sm:pt-16 lg:min-h-[calc(100vh-80px)] lg:pt-20">
      {/* Background atmosphere */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-[-10%] top-10 h-72 w-72 rounded-full bg-[#eedcc5]/40 blur-3xl" />

        <div className="absolute right-[-5%] top-1/3 h-96 w-96 rounded-full bg-[#ac683f]/5 blur-3xl" />

        <div className="absolute bottom-[-20%] left-1/3 h-80 w-80 rounded-full bg-[#eedcc5]/30 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-8">
          {/* LEFT CONTENT */}
          <div className="lg:col-span-7">
            {/* Trust badge */}
            <div className="anim-fade-in inline-flex items-center gap-2 rounded-full border border-[#ac683f]/10 bg-white/70 px-4 py-2 shadow-sm backdrop-blur-md">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#ac683f]/10 text-[#ac683f]">
                <FaCompass className="text-xs" />
              </span>

              <span className="text-xs font-bold tracking-wide text-neutral-600 sm:text-sm">
                Discover Sri Lanka your way
              </span>
            </div>

            {/* Main heading */}
            <h1 className="anim-fade-in-up anim-delay-1 mt-6 max-w-3xl text-5xl font-extrabold leading-[1.05] tracking-tight text-neutral-900 sm:text-6xl lg:text-7xl">
              Explore Sri Lanka
              <span className="block text-[#ac683f]">
                like never before.
              </span>
            </h1>

            {/* Description */}
            <p className="anim-fade-in-up anim-delay-2 mt-6 max-w-2xl text-base leading-7 text-neutral-500 sm:text-lg">
              Discover breathtaking destinations, unique experiences, trusted
              local vendors, and personalized travel packages — all in one
              place.
            </p>

            {/* Main actions */}
            <div className="anim-fade-in-up anim-delay-3 mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#trip-planner"
                className="group inline-flex items-center justify-center gap-3 rounded-full bg-[#ac683f] px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-[#ac683f]/20 transition-all duration-300 hover:-translate-y-1 hover:bg-[#925430] hover:shadow-xl"
              >
                Plan My Trip

                <FaArrowRight className="text-xs transition-transform duration-300 group-hover:translate-x-1" />
              </a>

              <a
                href="#discover"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-neutral-200 bg-white/70 px-7 py-3.5 text-sm font-bold text-neutral-700 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-[#ac683f]/30 hover:text-[#ac683f]"
              >
                Explore Destinations
              </a>
            </div>

            {/* Trust points */}
            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-xs font-semibold text-neutral-400">
              <span>✓ Trusted local vendors</span>
              <span>✓ Personalized journeys</span>
              <span>✓ Authentic experiences</span>
            </div>
          </div>

          {/* RIGHT VISUAL */}
          <div className="relative flex justify-center lg:col-span-5">
            <div className="absolute inset-0 dotted-path opacity-30" />

            <div className="relative">
              {/* Main image */}
              <div className="hero-circle-mask relative h-80 w-80 overflow-hidden border-4 border-white shadow-2xl sm:h-[430px] sm:w-[430px]">
                <img
                  src="https://images.unsplash.com/photo-1546708973-b339540b5162?auto=format&fit=crop&w=1200&q=85"
                  alt="Beautiful Sri Lanka Highlands"
                  className="h-full w-full scale-105 object-cover transition-transform duration-1000 ease-out hover:scale-110"
                />
              </div>

              {/* Location card */}
              <div className="premium-glass absolute bottom-5 left-[-10px] max-w-[190px] rounded-3xl border border-white/80 p-4 shadow-xl sm:left-[-25px]">
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#ac683f]/10 text-[#ac683f]">
                    <FaLocationDot className="text-sm" />
                  </div>

                  <div>
                    <p className="text-xs font-extrabold text-neutral-800">
                      Ella
                    </p>

                    <p className="text-[10px] font-semibold text-neutral-400">
                      Sri Lanka
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating card */}
              <div className="premium-glass absolute right-[-5px] top-8 rounded-2xl border border-white/80 px-4 py-3 shadow-xl sm:right-[-20px]">
                <p className="text-[10px] font-bold uppercase tracking-wider text-neutral-400">
                  Discover
                </p>

                <p className="mt-1 text-sm font-extrabold text-neutral-800">
                  New experiences
                </p>
              </div>

              {/* Small decorative card */}
              <div className="premium-glass absolute bottom-24 right-[-5px] hidden rounded-2xl border border-white/80 px-4 py-3 shadow-xl sm:block sm:right-[-30px]">
                <p className="text-[10px] font-semibold text-neutral-400">
                  Travel your way
                </p>

                <p className="mt-1 text-xs font-extrabold text-[#ac683f]">
                  Plan • Explore • Experience
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}