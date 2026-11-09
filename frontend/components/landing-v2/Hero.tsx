import Image from "next/image";
import Button from "@/components/ui/Button";

export default function Hero() {
  return (
    <section className="container-x grid items-center gap-10 py-16 md:grid-cols-2">
      <div>
        <span className="inline-block rounded-full bg-primary/10 px-3 py-1 text-[11px] font-medium text-primary">Intelligent Sri Lankan Travel Platform</span>
        <h1 className="mt-5 text-4xl font-bold leading-tight tracking-tight md:text-5xl">Explore Sri Lanka Like Never Before</h1>
        <p className="mt-4 max-w-md text-sm text-muted md:text-base">Discover hidden waterfalls, beaches, and secret routes with trusted guides and personalized itineraries built around your vibe, budget, and travel style.</p>
        <div className="mt-6 flex gap-3">
          <Button href="/trips/new">Start Planning</Button>
          <Button href="/register?role=vendor" variant="outline">Become a Vendor</Button>
        </div>
        <ul className="mt-6 flex flex-wrap gap-2 text-[11px]">
          {["Verified vendors", "Budget-aware planning", "Hidden gems"].map((t) => <li key={t} className="rounded-full border border-line bg-white px-3 py-1">{t}</li>)}
        </ul>
      </div>
      <Image src="/images/landing-hero.jpg" alt="Winding road through Sri Lankan tea hills" width={640} height={520} priority className="h-[320px] w-full rounded-2xl object-cover shadow-lg md:h-[420px]" />
    </section>
  );
}
