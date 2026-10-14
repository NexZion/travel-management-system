import { futureFeatures } from "@/lib/constants";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

export default function FutureOfTravel() {
  return (
    <section
      id="about"
      className="section-space"
      aria-labelledby="future-title"
    >
      <Container>
        <SectionHeading
          titleId="future-title"
          eyebrow="FUTURE VISION"
          title="Building The Future Of Travel"
          description="We’re exploring new ways to make every part of planning feel more personal."
          centered
        />
        <div className="mt-7 grid gap-4 md:grid-cols-3">
          {futureFeatures.map(({ title, description, icon: Icon }) => (
            <article key={title} className="surface-card p-5">
              <span className="flex size-9 items-center justify-center rounded-lg bg-sky-50 text-sm text-sky-500">
                <Icon aria-hidden="true" />
              </span>
              <h3 className="mt-3 text-[13px] font-bold text-[#172b43]">
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
