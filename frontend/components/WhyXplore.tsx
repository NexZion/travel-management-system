import { FaSliders, FaShieldHalved, FaWallet, FaLayerGroup } from "react-icons/fa6";
import SectionDivider from "./SectionDivider";

const features = [
  {
    icon: FaSliders,
    title: "Personalized Recommendations",
    body: "Get travel suggestions tailored to your interests, budget, and travel style.",
    bg: "bg-[#FAF9F5]/40",
  },
  {
    icon: FaShieldHalved,
    title: "Verified Vendors",
    body: "Book confidently through trusted and verified service providers.",
    bg: "bg-white",
  },
  {
    icon: FaWallet,
    title: "Budget-Friendly Planning",
    body: "Find the best experiences without exceeding your budget metrics.",
    bg: "bg-white",
  },
  {
    icon: FaLayerGroup,
    title: "One Seamless Experience",
    body: "Plan, book, and manage your entire journey from a single platform.",
    bg: "bg-white",
  },
];

export default function WhyXplore() {
  return (
    <section id="about" className="relative py-28 bg-white px-4 sm:px-6 lg:px-8">
      <SectionDivider fill="#FFFFFF" />
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-xl mx-auto mb-16">
          <span className="text-xs font-extrabold text-[#ac683f] uppercase tracking-widest">
            Why Xplore
          </span>
          <h2 className="text-3xl font-extrabold tracking-tight text-neutral-900 mt-2 mb-4">
            Travel Smarter. Travel Better.
          </h2>
          <p className="text-neutral-500 text-sm leading-relaxed">
            Planning a trip shouldn&apos;t mean spending hours searching across dozens of
            websites. Xplore brings together destinations, accommodations, transportation,
            local experiences, and trusted vendors into one intelligent travel platform.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map(({ icon: Icon, title, body, bg }) => (
            <div
              key={title}
              className={`p-6 ${bg} rounded-3xl border border-neutral-100 shadow-sm interactive-card`}
            >
              <div className="w-10 h-10 rounded-full bg-[#ac683f]/10 text-[#ac683f] flex items-center justify-center text-lg mb-4">
                <Icon />
              </div>
              <h4 className="font-bold text-neutral-900 text-sm mb-2">{title}</h4>
              <p className="text-neutral-400 text-xs leading-relaxed">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
