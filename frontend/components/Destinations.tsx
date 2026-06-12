import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import SectionDivider from "./SectionDivider";

const destinations = [
  {
    title: "Mountains & Nature",
    body: "Explore breathtaking landscapes, hiking trails, waterfalls, and misty mountains.",
    img: "https://images.unsplash.com/photo-1546708973-b339540b5162?auto=format&fit=crop&w=600&q=80",
    delay: "",
  },
  {
    title: "Beaches & Islands",
    body: "Relax on golden sands, surf world-class waves, and discover coastal beauty.",
    img: "https://images.unsplash.com/photo-1586861635167-e5223aadc9fe?auto=format&fit=crop&w=600&q=80",
    delay: "anim-delay-1",
  },
  {
    title: "Wildlife & Adventure",
    body: "Experience safaris, camping, trekking, and thrilling outdoor activities.",
    img: "https://images.unsplash.com/photo-1563294389-9852261761ef?auto=format&fit=crop&w=600&q=80",
    delay: "anim-delay-2",
  },
  {
    title: "Heritage & Culture",
    body: "Visit ancient cities, temples, and cultural landmarks rich with history.",
    img: "https://images.unsplash.com/photo-1608958416711-574323be0188?auto=format&fit=crop&w=600&q=80",
    delay: "anim-delay-3",
  },
];

export default function Destinations() {
  return (
    <section id="discover" className="relative py-28 bg-white px-4 sm:px-6 lg:px-8">
      <SectionDivider fill="#FFFFFF" />
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-12 gap-4">
          <div>
            <span className="text-xs font-extrabold text-[#ac683f] uppercase tracking-widest">
              Curated Hubs
            </span>
            <h2 className="text-3xl font-extrabold tracking-tight text-neutral-900 mt-1">
              Discover Sri Lanka&apos;s Most Incredible Destinations
            </h2>
          </div>
          <a
            href="#search-bar"
            className="bg-neutral-900 hover:bg-neutral-800 text-white font-bold text-xs uppercase tracking-wider px-6 py-3.5 rounded-full shadow-sm hover:shadow-md transition-all transform hover:-translate-y-0.5 whitespace-nowrap cursor-pointer"
          >
            Explore Destinations
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {destinations.map((d) => (
            <div
              key={d.title}
              className={`group relative rounded-[2rem] overflow-hidden h-80 shadow-md interactive-card cursor-pointer anim-fade-in-up ${d.delay}`}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={d.img}
                alt={d.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-90 group-hover:opacity-100 transition-opacity" />
              <div className="absolute bottom-6 left-6 right-6 text-white transform group-hover:translate-y-[-2px] transition-transform">
                <h4 className="font-bold text-sm flex items-center gap-1.5">
                  {d.title}{" "}
                  <FaArrowUpRightFromSquare className="text-[10px] opacity-0 group-hover:opacity-100 transition-opacity ml-1" />
                </h4>
                <p className="text-neutral-300 text-[11px] mt-1.5 line-clamp-2 leading-relaxed">
                  {d.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
