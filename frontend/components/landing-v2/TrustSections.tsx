import Image from "next/image";
import { Building2, MapPin, Bus, Star } from "lucide-react";
import SectionHead from "@/components/ui/SectionHead";
import Button from "@/components/ui/Button";
import { IconCards } from "./FeatureSections";
import { TESTIMONIALS } from "@/lib/constants";

export function Partners() {
  return (
    <section id="vendors" className="container-x section">
      <SectionHead label="Trusted travel partners" title="Every part of your journey, backed by trusted providers" text="From stays and guides to transport and activities, Xplore connects you with reliable partners who make travel easier." />
      <IconCards items={[
        { icon: Building2, title: "Accommodation Providers", text: "Boutique hotels, villas, and stays that match your style and budget." },
        { icon: MapPin, title: "Tour Guides", text: "Local experts who know the hidden routes, stories, and best moments." },
        { icon: Bus, title: "Transportation Services", text: "Reliable transfers, private cars, and transport options that keep your trip moving smoothly." },
      ]} />
      <div className="card mt-6 flex flex-col items-start justify-between gap-4 p-6 shadow-sm sm:flex-row sm:items-center">
        <div>
          <h3 className="font-semibold">Become a Vendor</h3>
          <p className="mt-1 text-xs text-muted">Join a network of trusted accommodation, guide, transport, and experience providers helping travelers plan better trips.</p>
        </div>
        <Button href="/register?role=vendor">Apply Now</Button>
      </div>
    </section>
  );
}

const STEPS = [
  ["Configure parameters", "Share your dates, interests, budget, and travel style to create a foundation for your trip."],
  ["Receive recommendations", "Get personalized itinerary ideas, hidden gems, and budget-aware suggestions tailored to your preferences."],
  ["Book trusted services", "Secure stays, guides, transport, and activities with verified partners who help your trip run smoothly."],
  ["Enjoy the journey", "Relax knowing your itinerary is built for discovery, flexibility, and the freedom to explore."],
];

export function HowItWorks() {
  return (
    <section className="container-x section">
      <SectionHead label="How it works" title="Plan. Book. Explore." text="Four simple steps turn your travel ideas into a real, bookable itinerary with trusted partners every step of the way." />
      <ol className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {STEPS.map(([t, d], i) => (
          <li key={t} className="card p-6 shadow-sm">
            <span className="grid h-7 w-7 place-items-center rounded-full bg-primary text-xs font-bold text-white">{i + 1}</span>
            <h3 className="mt-4 font-semibold">{t}</h3>
            <p className="mt-2 text-xs text-muted">{d}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}

export function Testimonials() {
  return (
    <section className="container-x section">
      <SectionHead label="Testimonials" title="Travelers love planning with Xplore" />
      <div className="grid gap-5 md:grid-cols-3">
        {TESTIMONIALS.map((t) => (
          <figure key={t.name} className="card p-6 shadow-sm">
            <blockquote className="text-sm font-medium">“{t.quote}”</blockquote>
            <figcaption className="mt-4 flex items-center gap-3 text-xs">
              <Image src={t.img} alt="" width={32} height={32} className="h-8 w-8 rounded-full object-cover" />
              <span>
                <span className="block font-semibold">{t.name}</span>
                <span className="flex items-center gap-0.5 text-muted">5.0 {Array.from({ length: 5 }).map((_, i) => <Star key={i} size={10} className="fill-primary text-primary" aria-hidden />)}</span>
              </span>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}

export function Stats() {
  return (
    <section className="container-x pb-8">
      <dl className="grid grid-cols-2 gap-5 lg:grid-cols-4">
        {[["10,000+", "Trips Planned"], ["500+", "Verified Vendors"], ["AI", "Travel Assistant"], ["Budget", "Forecasting"]].map(([n, l]) => (
          <div key={l} className="card flex flex-col-reverse p-6 shadow-sm">
            <dt className="text-xs text-muted">{l}</dt>
            <dd className="text-3xl font-bold">{n}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
