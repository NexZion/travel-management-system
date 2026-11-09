import Image from "next/image";
import { Sparkles, ShieldCheck, Wallet, CircleCheck, Bot, LineChart, Users, type LucideIcon } from "lucide-react";
import SectionHead from "@/components/ui/SectionHead";
import Button from "@/components/ui/Button";

type Item = { icon: LucideIcon; title: string; text: string };

const IconCard = ({ icon: Icon, title, text }: Item) => (
  <div className="card p-6 shadow-sm">
    <span className="grid h-9 w-9 place-items-center rounded-lg bg-primary/10 text-primary"><Icon size={18} aria-hidden /></span>
    <h3 className="mt-4 font-semibold">{title}</h3>
    <p className="mt-2 text-xs text-muted">{text}</p>
  </div>
);

export const IconCards = ({ items }: { items: Item[] }) => (
  <div className="grid gap-5 md:grid-cols-3">{items.map((i) => <IconCard key={i.title} {...i} />)}</div>
);

export function WhyXplore() {
  return (
    <section className="container-x section">
      <SectionHead label="Why Xplore" title="Travel Smarter. Travel Better." text="Personalized recommendations, verified vendors, and budget-friendly planning come together in one seamless experience." />
      <IconCards items={[
        { icon: Sparkles, title: "Personalized Recommendations", text: "Get tailored itinerary ideas that match your interests, pace, and budget from the moment you start planning." },
        { icon: ShieldCheck, title: "Verified Vendors", text: "Book trusted accommodation, guides, transport, and experiences with partners that have been vetted for quality and reliability." },
        { icon: Wallet, title: "Budget-Friendly Planning", text: "Compare options, adjust your budget range, and refine your itinerary without losing the experiences that matter most." },
      ]} />
    </section>
  );
}

export function AICompanion() {
  return (
    <section id="about" className="container-x section grid items-center gap-10 md:grid-cols-2">
      <div>
        <p className="text-xs font-semibold text-primary">Meet Your AI Travel Companion</p>
        <h2 className="mt-2 text-3xl font-bold tracking-tight md:text-4xl">Your itinerary, smarter from day one</h2>
        <p className="mt-3 text-sm text-muted">Xplore helps you discover hidden gems, balance budget with quality, and turn vague travel ideas into a practical, bookable plan.</p>
        <ul className="mt-5 space-y-3 text-sm">
          {["Personalized itineraries built around your interests", "Budget-aware recommendations that stay realistic", "Hidden gems and smart suggestions for every route"].map((t) => (
            <li key={t} className="flex items-center gap-2"><CircleCheck size={18} className="text-primary" aria-hidden />{t}</li>
          ))}
        </ul>
        <Button href="/trips/new" className="mt-6">Try AI Trip Planning</Button>
      </div>
      <Image src="/images/destinations/ai-planner.jpg" alt="Laptop showing a Sri Lanka trip map" width={640} height={460} className="h-[320px] w-full rounded-2xl object-cover shadow-lg md:h-[380px]" />
    </section>
  );
}

export function Future() {
  return (
    <section className="container-x section">
      <SectionHead label="Future vision" title="Building The Future Of Travel" text="We're shaping smarter planning tools, more accurate budgeting, and a community that makes every trip feel more personal." />
      <IconCards items={[
        { icon: Bot, title: "AI Travel Assistant", text: "Smarter itinerary suggestions that learn from your preferences and adapt to every stage of planning." },
        { icon: LineChart, title: "Budget Forecasting", text: "Clearer cost estimates and budget-aware recommendations that help you plan with confidence." },
        { icon: Users, title: "Travel Community", text: "A space for travelers to share tips, discover new routes, and inspire better journeys together." },
      ]} />
    </section>
  );
}
