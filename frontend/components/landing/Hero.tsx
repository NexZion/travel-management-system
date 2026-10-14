
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";

const highlights = [
  "Verified vendors",
  "Explore scenic journeys",
  "Hidden gems",
];

export default function Hero() {
  return (
    <section id="home" className="overflow-hidden pb-12 pt-9 sm:pb-16 sm:pt-14">
      <div className="container-xplore grid items-center gap-9 lg:grid-cols-[1fr_0.96fr] lg:gap-12">
        <div>
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-sky-100 bg-white/80 px-3 py-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-sky-500" />
            <span className="text-[10px] font-bold text-sky-700">
              INTELLIGENT SRI LANKA TRAVEL PLATFORM
            </span>
          </div>

          <h1 className="max-w-[570px] text-[38px] font-extrabold leading-[1.08] tracking-[-0.055em] text-[#172b43] sm:text-5xl lg:text-[54px]">
            Explore Sri Lanka
            <br />
            Like Never Before
          </h1>

          <p className="mt-5 max-w-[480px] text-sm leading-7 text-slate-600 sm:text-[15px]">
            Discover breathtaking destinations, authentic local experiences,
            trusted vendors, and personalized travel packages — all in one
            place.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="#trip-planner" className="btn-primary">
              Start Planning
              <FaArrowRight className="text-[10px]" />
            </Link>

            <Link href="#discover" className="btn-secondary">
              Explore Destinations
            </Link>
          </div>

          <div className="mt-6 flex flex-wrap gap-2">
            {highlights.map((item) => (
              <span
                key={item}
                className="rounded-full border border-sky-100 bg-white px-2.5 py-1 text-[9px] font-semibold text-slate-600"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="relative aspect-[1.12/1] overflow-hidden rounded-2xl border-4 border-white shadow-[0_15px_45px_rgba(23,43,67,0.10)]">
            <Image
              src="https://images.unsplash.com/photo-1546708973-b339540b5162?auto=format&fit=crop&w=1200&q=85"
              alt="Beautiful green mountains and tea country in Sri Lanka"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 48vw"
              className="object-cover"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
