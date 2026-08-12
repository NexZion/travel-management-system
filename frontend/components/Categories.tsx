const categories = [
  {
    label: "Destinations",
    description: "Iconic beaches, hill country, and heritage cities.",
    accent: "bg-[#F5E4D8]",
  },
  {
    label: "Hotels",
    description: "Stay in resorts, villas, and boutique guesthouses.",
    accent: "bg-[#F3F3FF]",
  },
  {
    label: "Restaurants",
    description: "Taste authentic Sri Lankan cuisine and fusion dining.",
    accent: "bg-[#E9F8F2]",
  },
  {
    label: "Vehicle Rentals",
    description: "Cars, scooters, and private transfers for every route.",
    accent: "bg-[#FFF3E0]",
  },
  {
    label: "Tour Guides",
    description: "Local experts who bring stories and secrets to life.",
    accent: "bg-[#F4EEF8]",
  },
  {
    label: "Experiences",
    description: "Surf lessons, cultural tours, wildlife safaris and more.",
    accent: "bg-[#FFEFF1]",
  },
  {
    label: "Travel Packages",
    description: "Curated itineraries for every travel style.",
    accent: "bg-[#E8F3FF]",
  },
];

export default function Categories() {
  return (
    <section id="categories" className="py-24 px-4 sm:px-6 lg:px-8 bg-neutral-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-extrabold text-[#ac683f] uppercase tracking-widest">
            Quick Discovery
          </span>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-neutral-900 sm:text-4xl">
            Discover what makes Sri Lanka unforgettable
          </h2>
          <p className="mt-3 text-sm leading-6 text-neutral-500 sm:text-base">
            Browse popular categories and jump right into curated travel experiences,
            local vendors, and trusted services.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category) => (
            <div
              key={category.label}
              className="interactive-card group overflow-hidden rounded-[2rem] border border-neutral-200 bg-white p-6 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-[#ac683f]/20"
            >
              <div
                className={`mb-5 h-14 w-14 rounded-3xl ${category.accent} flex items-center justify-center text-2xl`}
              >
                <span aria-hidden="true">✦</span>
              </div>
              <h3 className="text-lg font-bold text-neutral-900 mb-2">{category.label}</h3>
              <p className="text-sm text-neutral-500 leading-relaxed mb-6">
                {category.description}
              </p>
              <button className="inline-flex items-center gap-2 text-sm font-semibold text-[#ac683f] transition-colors hover:text-[#925430]">
                Explore
                <span aria-hidden="true">→</span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
