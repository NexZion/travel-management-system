import { FaRobot, FaChartLine, FaUsers } from "react-icons/fa6";
import SectionDivider from "./SectionDivider";

const visionItems = [
  { icon: FaRobot, label: "AI Travel Assistant", pulse: true },
  { icon: FaChartLine, label: "Budget Forecasting", pulse: false },
  { icon: FaUsers, label: "Travel Community", pulse: false },
];

export default function FutureVision() {
  return (
    <section className="relative py-28 bg-neutral-50 px-4 sm:px-6 lg:px-8">
      <SectionDivider fill="#FAF9F5" />
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-6 space-y-4">
          <span className="text-xs font-extrabold text-[#ac683f] uppercase tracking-widest block">
            The Horizon
          </span>
          <h2 className="text-3xl font-extrabold text-neutral-900 tracking-tight">
            Building The Future Of Travel
          </h2>
          <p className="text-neutral-500 text-sm leading-relaxed">
            We&apos;re creating more than a booking platform. Our vision is to become Sri
            Lanka&apos;s most intelligent travel ecosystem where travelers, local
            businesses, and communities connect seamlessly.
          </p>
        </div>
        <div className="lg:col-span-6 grid grid-cols-2 sm:grid-cols-3 gap-3">
          {visionItems.map(({ icon: Icon, label, pulse }) => (
            <div
              key={label}
              className="p-4 bg-white border border-neutral-100 rounded-2xl font-bold text-xs text-neutral-700 shadow-sm hover:border-[#ac683f]/20 transition-all flex items-center gap-1.5"
            >
              <Icon className={`text-[#ac683f] ${pulse ? "animate-pulse" : ""}`} /> {label}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
