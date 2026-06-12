const testimonials = [
  {
    quote:
      "Planning our trip became incredibly easy. We discovered places we never knew existed.",
    author: "— Sarah M.",
  },
  {
    quote: "The itinerary recommendations matched our budget perfectly.",
    author: "— Nuwan P.",
  },
];

const stats = [
  { value: "10,000+", label: "Trips Planned" },
  { value: "500+", label: "Verified Vendors" },
];

export default function SocialProof() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7 space-y-4">
          <span className="text-xs font-extrabold text-[#ac683f] uppercase tracking-widest block">
            Testimonials
          </span>
          <h3 className="text-2xl font-extrabold text-neutral-900 mb-6">
            Stories From Fellow Explorers
          </h3>
          <div className="space-y-4 max-w-xl">
            {testimonials.map((t) => (
              <div
                key={t.author}
                className="p-5 bg-white border border-neutral-100 rounded-3xl shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="text-amber-400 text-xs mb-2">★★★★★</div>
                <p className="text-neutral-600 italic text-xs">{t.quote}</p>
                <span className="block font-bold text-[11px] text-neutral-400 mt-3">
                  {t.author}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-5 bg-white border border-neutral-100 p-8 rounded-[2rem] shadow-xl space-y-6">
          <span className="text-xs font-extrabold text-[#ac683f] uppercase tracking-widest block">
            Platform Metrics
          </span>
          <h3 className="text-xl font-extrabold text-neutral-900">
            Growing Travel Community
          </h3>
          <div className="grid grid-cols-2 gap-6 pt-2">
            {stats.map((s) => (
              <div key={s.label} className="group">
                <span className="block text-3xl font-extrabold text-neutral-900 group-hover:text-[#ac683f] transition-colors duration-300">
                  {s.value}
                </span>
                <span className="text-[11px] font-semibold text-neutral-400 uppercase tracking-wide">
                  {s.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
