import SectionDivider from "./SectionDivider";

const steps = [
  {
    title: "Configure Parameters",
    body: "Input dates, group sizes, starting matrix nodes, and budget options.",
  },
  {
    title: "Receive Recommendations",
    body: "Get customized travel plans and personalized suggestions.",
  },
  {
    title: "Book Trusted Services",
    body: "Reserve accommodations, transportation, and premium experiences.",
  },
  {
    title: "Enjoy The Journey",
    body: "Travel confidently with everything organized beautifully in one place.",
  },
];

export default function HowItWorks() {
  return (
    <section className="relative py-28 bg-white px-4 sm:px-6 lg:px-8">
      <SectionDivider fill="#FFFFFF" />
      <div className="max-w-7xl mx-auto text-center">
        <div className="max-w-md mx-auto mb-16">
          <span className="text-xs font-extrabold text-[#ac683f] uppercase tracking-widest">
            Workflow Operations
          </span>
          <h2 className="text-3xl font-extrabold text-neutral-900 mt-1">
            Plan. Book. Explore.
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {steps.map((step, i) => (
            <div key={step.title} className="text-center space-y-2 group">
              <div className="w-10 h-10 rounded-full bg-[#ac683f]/10 text-[#ac683f] flex items-center justify-center text-xs font-bold mx-auto mb-4 group-hover:bg-[#ac683f] group-hover:text-white transition-all duration-300">
                {i + 1}
              </div>
              <h4 className="font-bold text-sm text-neutral-900">{step.title}</h4>
              <p className="text-neutral-400 text-xs leading-relaxed max-w-xs mx-auto">
                {step.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
