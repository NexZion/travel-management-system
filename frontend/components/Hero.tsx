import { FaStar, FaLocationDot } from "react-icons/fa6";

export default function Hero() {
  return (
    <section className="relative pt-12 pb-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-6 space-y-6 text-left relative z-10">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold bg-[#ac683f]/10 text-[#ac683f] border border-[#ac683f]/20 anim-fade-in">
            <FaStar className="text-[10px] animate-spin-slow" /> Trusted by Travelers Across Sri Lanka
          </span>
          <h1 className="text-4xl sm:text-6xl font-extrabold text-neutral-900 tracking-tight leading-[1.1] anim-fade-in-up">
            Explore Sri Lanka <br />
            Like <span className="text-[#ac683f]">Never Before</span>
          </h1>
          <p className="text-neutral-500 max-w-xl text-sm sm:text-base font-medium leading-relaxed anim-fade-in-up anim-delay-1">
            From hidden waterfalls and breathtaking beaches to trusted guides and
            personalized itineraries, Xplore helps you plan, book, and experience
            unforgettable journeys—all in one place.
          </p>
          <div className="flex flex-wrap gap-4 pt-2">
            <a
              href="#search-bar"
              className="bg-[#ac683f] hover:bg-[#925430] text-white font-bold text-xs uppercase tracking-wider px-8 py-4 rounded-full shadow-lg hover:shadow-[#ac683f]/30 shadow-[#ac683f]/10 transition-all transform hover:-translate-y-1 cursor-pointer anim-fade-in-up anim-delay-2"
            >
              Start Planning
            </a>
            <a
              href="#vendors"
              className="bg-white hover:bg-neutral-50 text-neutral-800 border border-neutral-200 font-bold text-xs uppercase tracking-wider px-8 py-4 rounded-full shadow-sm hover:shadow-md transition-all transform hover:-translate-y-1 cursor-pointer anim-fade-in-up anim-delay-2"
            >
              Become a Vendor
            </a>
          </div>
        </div>

        <div className="lg:col-span-6 relative flex justify-center items-center">
          <div className="absolute inset-0 dotted-path opacity-40 -z-10" />
          <div className="w-80 h-80 sm:w-[420px] sm:h-[420px] hero-circle-mask relative overflow-hidden shadow-2xl border-4 border-white transform hover:scale-[1.02] transition-transform duration-700 anim-zoom-in">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://images.unsplash.com/photo-1546708973-b339540b5162?auto=format&fit=crop&w=1000&q=80"
              alt="Beautiful Sri Lanka Highlands"
              className="w-full h-full object-cover scale-105 hover:scale-110 transition-transform duration-1000 ease-out"
            />
          </div>
          <div className="absolute bottom-6 left-4 sm:left-12 premium-glass p-4 rounded-3xl shadow-xl border border-white/80 max-w-[180px] transition-all duration-300 hover:scale-105 anim-fade-in anim-delay-3">
            <div className="flex items-center gap-2 mb-1">
              <span className="text-xs font-bold text-[#ac683f] flex items-center gap-1">
                <FaLocationDot className="animate-bounce" /> Ella, Sri Lanka
              </span>
            </div>
            <span className="text-[10px] text-neutral-400 block font-semibold">
              Micro-itineraries mapped natively in seconds.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
