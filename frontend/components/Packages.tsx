import SectionDivider from "./SectionDivider";

const packages = [
  {
    title: "Room Package",
    vendor: "Hilltop Retreat",
    description: "Private room, breakfast, and pool access.",
    price: "₹7,500/night",
    rating: "4.8",
    category: "Hotels",
    accent: "from-[#FAE8D8] to-white",
  },
  {
    title: "Night Stay Package",
    vendor: "Ceylon Comfort",
    description: "Cozy stay with dinner and transport pickup.",
    price: "₹6,200/night",
    rating: "4.6",
    category: "Hotels",
    accent: "from-[#EDE8FF] to-white",
  },
  {
    title: "Buffet Package",
    vendor: "Spice Garden",
    description: "Unlimited local specialties in a scenic dining room.",
    price: "₹2,400/person",
    rating: "4.9",
    category: "Restaurants",
    accent: "from-[#E9F8F2] to-white",
  },
  {
    title: "Event Catering",
    vendor: "Coastal Kitchen",
    description: "Custom menus for special celebrations.",
    price: "₹35,000/event",
    rating: "4.7",
    category: "Restaurants",
    accent: "from-[#FFF3E0] to-white",
  },
  {
    title: "Daily Rental",
    vendor: "Island Drive",
    description: "Comfort car with GPS and unlimited kilometers.",
    price: "₹9,500/day",
    rating: "4.7",
    category: "Vehicle Rentals",
    accent: "from-[#E8F3FF] to-white",
  },
  {
    title: "Weekly Rental",
    vendor: "Route Riders",
    description: "Flexible rental for longer journeys.",
    price: "₹55,000/week",
    rating: "4.6",
    category: "Vehicle Rentals",
    accent: "from-[#F5E4D8] to-white",
  },
  {
    title: "City Tour",
    vendor: "Heritage Guides",
    description: "Half-day guided city exploration.",
    price: "₹4,200/trip",
    rating: "4.8",
    category: "Guides",
    accent: "from-[#F4EEF8] to-white",
  },
  {
    title: "Full-Day Tour",
    vendor: "Island Guides",
    description: "A complete adventure across key highlights.",
    price: "₹11,000/day",
    rating: "4.9",
    category: "Guides",
    accent: "from-[#FFEFF1] to-white",
  },
];

const groupedPackages = Object.entries(
  packages.reduce<Record<string, typeof packages>>((acc, item) => {
    acc[item.category] = acc[item.category] || [];
    acc[item.category].push(item);
    return acc;
  }, {}),
);

export default function Packages() {
  return (
    <section id="packages" className="relative py-28 bg-white px-4 sm:px-6 lg:px-8">
      <SectionDivider fill="#FFFFFF" />
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-12 gap-4">
          <div>
            <span className="text-xs font-extrabold text-[#ac683f] uppercase tracking-widest">
              Vendor Packages
            </span>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-neutral-900 sm:text-4xl">
              Packages Tailored For Every Sri Lanka Journey
            </h2>
          </div>
          <a
            href="#vendors"
            className="bg-neutral-900 hover:bg-neutral-800 text-white font-bold text-xs uppercase tracking-wider px-6 py-3.5 rounded-full shadow-sm hover:shadow-md transition-all transform hover:-translate-y-0.5 whitespace-nowrap"
          >
            Explore Vendors
          </a>
        </div>

        <div className="space-y-16">
          {groupedPackages.map(([category, items]) => (
            <div key={category} className="space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
                <div>
                  <span className="text-xs font-extrabold text-[#ac683f] uppercase tracking-widest">
                    {category}
                  </span>
                  <h3 className="mt-3 text-2xl font-extrabold text-neutral-900">
                    {category} Packages
                  </h3>
                </div>
                <p className="max-w-2xl text-sm text-neutral-500 leading-relaxed">
                  Discover the best packages from trusted {category.toLowerCase()} vendors, designed to fit your Sri Lanka travel style.
                </p>
              </div>

              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {items.map((item) => (
                  <div
                    key={item.title}
                    className="group relative overflow-hidden rounded-[2rem] border border-neutral-200 bg-white shadow-sm interactive-card transition-all duration-500 hover:-translate-y-2 hover:shadow-xl"
                  >
                    <div className={`h-32 bg-gradient-to-br ${item.accent} p-6`}>
                      <p className="text-xs font-semibold uppercase tracking-[0.32em] text-neutral-500">
                        {item.category}
                      </p>
                      <p className="mt-5 text-xl font-bold text-neutral-900">{item.title}</p>
                    </div>
                    <div className="p-6">
                      <p className="text-sm text-neutral-500 leading-relaxed">{item.description}</p>
                      <div className="mt-5 flex items-center justify-between gap-4 text-sm">
                        <div>
                          <p className="text-neutral-900 font-semibold">{item.vendor}</p>
                          <p className="text-[11px] uppercase tracking-[0.24em] text-neutral-400">Rating {item.rating}</p>
                        </div>
                        <p className="text-[#ac683f] font-bold">{item.price}</p>
                      </div>
                      <div className="mt-5 grid gap-2 text-[11px] text-neutral-500">
                        <p className="inline-flex items-center gap-2">
                          <span className="text-[#ac683f]">•</span> Best for comfort
                        </p>
                        <p className="inline-flex items-center gap-2">
                          <span className="text-[#ac683f]">•</span> Verified vendor
                        </p>
                      </div>
                      <button className="mt-6 w-full rounded-full bg-[#ac683f] px-5 py-3 text-sm font-bold text-white transition-all hover:bg-[#925430]">
                        View Package
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
