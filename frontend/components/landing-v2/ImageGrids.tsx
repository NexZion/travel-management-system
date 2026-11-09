import Image from "next/image";
import SectionHead from "@/components/ui/SectionHead";
import { DESTINATIONS, EXPERIENCES } from "@/lib/constants";

export function Destinations() {
  return (
    <section className="container-x section">
      <SectionHead label="Destinations" title="Explore the best of Sri Lanka" text="From mountains and coastlines to wildlife and culture, discover the experiences that make every trip unforgettable." />
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {DESTINATIONS.map((d) => (
          <article key={d.title} className="card p-3 shadow-sm">
            <Image src={d.img} alt={d.title} width={300} height={200} className="h-36 w-full rounded-xl object-cover" />
            <h3 className="mt-3 px-1 text-sm font-semibold">{d.title}</h3>
            <p className="mt-1 px-1 pb-2 text-xs text-muted">{d.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export function Experiences() {
  return (
    <section id="experiences" className="container-x section">
      <SectionHead label="Local experiences" title="Immerse yourself in authentic Sri Lanka" text="Choose the experiences that bring your trip to life, from village stays and food trails to wildlife and adventure." />
      <div className="grid grid-cols-2 gap-5 lg:grid-cols-4">
        {EXPERIENCES.map((e) => (
          <article key={e.title} className="card p-3 shadow-sm">
            <Image src={e.img} alt={e.title} width={260} height={180} className="h-32 w-full rounded-xl object-cover" />
            <h3 className="mt-3 px-1 pb-1 text-sm font-semibold">{e.title}</h3>
          </article>
        ))}
      </div>
    </section>
  );
}
