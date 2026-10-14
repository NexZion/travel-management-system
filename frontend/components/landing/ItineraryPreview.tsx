import Image from "next/image";
import Link from "next/link";
import { FaArrowRight, FaCheck } from "react-icons/fa6";
import Container from "@/components/ui/Container";
import {
  itineraryHighlights,
  itineraryImage,
  mapIcon as MapIcon,
} from "@/lib/constants";

export default function ItineraryPreview() {
  return (
    <section className="section-space" aria-labelledby="itinerary-title">
      <Container>
        <div className="grid items-center gap-9 lg:grid-cols-2 lg:gap-14">
          <div className="order-2 lg:order-1">
            <span className="eyebrow">PLAN YOUR JOURNEY</span>
            <h2
              id="itinerary-title"
              className="section-title max-w-xl"
            >
              Your itinerary, smarter from day one
            </h2>
            <p className="section-description">
              Bring your destinations, travel ideas, and trip details into one
              easy-to-follow preview. Your choices stay yours—Xplore helps you
              organize what you want to explore.
            </p>
            <ul className="mt-5 space-y-3">
              {itineraryHighlights.map((highlight) => (
                <li
                  key={highlight}
                  className="flex items-start gap-2.5 text-[12px] font-medium leading-5 text-[#526579]"
                >
                  <FaCheck className="mt-1 shrink-0 text-[11px] text-sky-500" />
                  {highlight}
                </li>
              ))}
            </ul>
            <Link href="#trip-planner" className="btn-primary mt-6">
              Try AI Trip Planning <FaArrowRight aria-hidden="true" />
            </Link>
          </div>

          <div className="relative order-1 min-w-0 lg:order-2">
            <div className="relative aspect-[1.2/1] overflow-hidden rounded-2xl border-4 border-white shadow-[0_15px_45px_rgba(23,43,67,0.10)]">
              <Image
                src={itineraryImage}
                alt="Traveler exploring a map while planning a journey"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#102b3b]/35 to-transparent" />
            </div>
            <div className="absolute -bottom-4 left-4 right-4 flex items-center gap-3 rounded-xl border border-slate-100 bg-white p-3 shadow-lg sm:left-6 sm:right-auto sm:min-w-64">
              <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-sky-50 text-sky-500">
                <MapIcon aria-hidden="true" />
              </span>
              <span>
                <span className="block text-[9px] font-semibold uppercase tracking-wider text-slate-400">
                  Your next stop
                </span>
                <span className="mt-0.5 block text-xs font-bold text-[#172b43]">
                  Discover Sri Lanka
                </span>
              </span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
