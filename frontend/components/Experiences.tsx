const experiences = [
  {
    label: "Hiking Adventures",
    description: "Explore tea trails, misty peaks, and mountain views.",
    accent: "bg-gradient-to-br from-[#E9F8F2] via-white to-[#E9F8F2]",
    emoji: "🥾",
  },
  {
    label: "Surfing Excursions",
    description: "Catch waves on Sri Lanka’s world-class beaches.",
    accent: "bg-gradient-to-br from-[#E8F3FF] via-white to-[#E8F3FF]",
    emoji: "🏄‍♂️",
  },
  {
    label: "Wildlife Safaris",
    description: "Spot elephants, leopards, and native wildlife.",
    accent: "bg-gradient-to-br from-[#FFF3E0] via-white to-[#FFF3E0]",
    emoji: "🐘",
  },
  {
    label: "Cultural Tours",
    description: "Visit temples, heritage sites, and local rituals.",
    accent: "bg-gradient-to-br from-[#F4EEF8] via-white to-[#F4EEF8]",
    emoji: "🛕",
  },
  {
    label: "Food Experiences",
    description: "Taste street food, traditional curries, and seafood.",
    accent: "bg-gradient-to-br from-[#FFEFF1] via-white to-[#FFEFF1]",
    emoji: "🍲",
  },
  {
    label: "Waterfall Journeys",
    description: "Chase tropical waterfalls and natural swimming pools.",
    accent: "bg-gradient-to-br from-[#DFF3FF] via-white to-[#DFF3FF]",
    emoji: "💦",
  },
  {
    label: "Train Routes",
    description: "Ride scenic railways through lush valleys and forests.",
    accent: "bg-gradient-to-br from-[#F5E4D8] via-white to-[#F5E4D8]",
    emoji: "🚆",
  },
  {
    label: "Camping & Glamping",
    description: "Sleep under stars beside lakes, forests, and beaches.",
    accent: "bg-gradient-to-br from-[#F3F3FF] via-white to-[#F3F3FF]",
    emoji: "⛺",
  },
];

export default function Experiences() {
  return (
    <section id="experiences" className="relative py-28 bg-neutral-50 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-start gap-6 md:flex-row md:items-end md:justify-between mb-12">
          <div>
            <span className="text-xs font-extrabold text-[#ac683f] uppercase tracking-widest">
              Off The Beaten Path
            </span>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-neutral-900 sm:text-4xl">
              Discover Experiences Worth Remembering
            </h2>
          </div>
          <p className="max-w-xl text-sm text-neutral-500 leading-relaxed">
            Browse immersive Sri Lanka experiences designed for adventure, culture, relaxation, and local discovery.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {experiences.map((exp) => (
            <div
              key={exp.label}
              className="interactive-card overflow-hidden rounded-[2rem] border border-neutral-200 bg-white p-8 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className={`${exp.accent} mb-6 flex h-20 w-20 items-center justify-center rounded-3xl text-3xl`}> 
                {exp.emoji}
              </div>
              <h3 className="text-xl font-bold text-neutral-900 mb-3">{exp.label}</h3>
              <p className="text-sm leading-relaxed text-neutral-500">{exp.description}</p>
              <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#ac683f]">
                <span>Explore</span>
                <span aria-hidden="true">→</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
