import { experiences } from "@/lib/constants";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

export default function Experiences() {
  return (
    <section
      id="experiences"
      className="section-space"
      aria-labelledby="experiences-title"
    >
      <Container>
        <SectionHeading
          titleId="experiences-title"
          eyebrow="LOCAL EXPERIENCES"
          title="Immerse yourself in authentic Sri Lanka"
          description="Choose the experiences, from village stays and food trails to wildlife adventures."
        />
        <div className="mt-7 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {experiences.map(({ title, image, alt }) => (
            <article key={title} className="overflow-hidden rounded-xl border border-[#e1edf2] bg-white p-2 shadow-sm">
              <Image src={image} alt={alt} width={500} height={300} sizes="(max-width: 640px) 50vw, 25vw" className="h-28 w-full rounded-lg object-cover" />
              <h3 className="px-1 pb-1 pt-2 text-[11px] font-bold leading-snug text-[#172b43] sm:text-[12px]">
                {title}
              </h3>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
import Image from "next/image";
