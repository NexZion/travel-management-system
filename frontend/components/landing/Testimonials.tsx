import { testimonials } from "@/lib/constants";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

export default function Testimonials() {
  return (
    <section
      className="section-space"
      aria-labelledby="testimonials-title"
    >
      <Container>
        <SectionHeading
          titleId="testimonials-title"
          eyebrow="TESTIMONIALS"
          title="Travelers love planning with Xplore"
        />
        <div className="mt-7 grid gap-4 md:grid-cols-3">
          {testimonials.map(({ quote, reviewer }) => (
            <article key={reviewer} className="surface-card p-4">
              <blockquote className="text-[12px] font-medium leading-6 text-[#172b43]">
                “{quote}”
              </blockquote>
              <p className="mt-4 text-[10px] font-bold text-[#172b43]">
                {reviewer}
                <span className="hidden ml-2 font-medium text-slate-400">
                  Fictional placeholder
                </span>
              </p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
