const experiences = [
  { emoji: "🏡", label: "Village Experiences" },
  { emoji: "🍲", label: "Food Trails" },
  { emoji: "🐆", label: "Wildlife Safaris" },
  { emoji: "⛺", label: "Camping Experiences" },
  { emoji: "💦", label: "Waterfall Adventures" },
  { emoji: "🛕", label: "Cultural Tours" },
  { emoji: "🥾", label: "Hiking Expeditions" },
  { emoji: "📸", label: "Photography Tours" },
];

export default function Experiences() {
  return (
    <section id="experiences" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center max-w-xl mx-auto mb-14">
        <span className="text-xs font-extrabold text-[#ac683f] uppercase tracking-widest">
          Off The Beaten Path
        </span>
        <h2 className="text-3xl font-extrabold tracking-tight text-neutral-900 mt-1 mb-2">
          Go Beyond The Tourist Trail
        </h2>
        <p className="text-neutral-400 text-xs">
          Discover experiences that most travelers never find through authentic local
          adventures.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {experiences.map((exp, i) => (
          <div
            key={exp.label}
            className="p-[1.125rem] bg-white rounded-full border border-neutral-100 flex items-center gap-3 interactive-card font-bold text-xs text-neutral-800 cursor-pointer group anim-fade-in-up"
            style={{ animationDelay: `${i * 0.1}s` }}
          >
            <span className="text-base group-hover:scale-125 transition-transform">
              {exp.emoji}
            </span>{" "}
            {exp.label}
          </div>
        ))}
      </div>
    </section>
  );
}
