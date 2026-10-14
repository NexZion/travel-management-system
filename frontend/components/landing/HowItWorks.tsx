import { processSteps } from "@/lib/constants";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="section-space"
      aria-labelledby="how-it-works-title"
    >
      <Container>
        <SectionHeading
          titleId="how-it-works-title"
          eyebrow="HOW IT WORKS"
          title="Plan. Book. Explore."
          description="Four simple steps take you from an idea to a bookable itinerary with trusted partners every step of the way."
        />
        <ol className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {processSteps.map(({ title, description, icon: Icon }, index) => (
            <li key={title} className="surface-card p-5">
              <span className="flex size-9 items-center justify-center rounded-full bg-sky-500 text-xs font-bold text-white">
                {index + 1}
              </span>
              <span className="mt-3 flex size-8 items-center justify-center rounded-lg bg-sky-50 text-sm text-sky-500">
                <Icon aria-hidden="true" />
              </span>
              <h3 className="mt-3 text-[13px] font-bold text-[#172b43]">
                {title}
              </h3>
              <p className="mt-2 text-[11px] leading-5 text-[#526579]">
                {description}
              </p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
