import { featureItems } from "@/lib/constants";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

export default function Features() {
  return (
    <section className="section-space pt-3" aria-labelledby="features-title">
      <Container>
        <SectionHeading
          titleId="features-title"
          eyebrow="WHY XPLORE"
          title="Travel Smarter. Travel Better."
          description="Personalized recommendations, verified vendors, and budget-friendly planning come together in one seamless experience."
        />
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {featureItems.map(({ title, description, icon: Icon }) => (
            <article key={title} className="surface-card p-5">
              <span className="mb-4 flex size-10 items-center justify-center rounded-xl bg-sky-50 text-base text-sky-500">
                <Icon aria-hidden="true" />
              </span>
              <h3 className="text-[14px] font-bold leading-snug text-[#172b43]">
                {title}
              </h3>
              <p className="mt-2 text-[11px] leading-5 text-[#526579]">
                {description}
              </p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
