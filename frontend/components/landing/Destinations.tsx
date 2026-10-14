import Image from "next/image";
import { destinations } from "@/lib/constants";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

export default function Destinations() {
  return (
    <section
      id="discover"
      className="section-space"
      aria-labelledby="destinations-title"
    >
      <Container>
        <SectionHeading
          titleId="destinations-title"
          eyebrow="DESTINATIONS"
          title="Explore the best of Sri Lanka"
          description="From mountains and coastlines to wildlife and culture, discover the experiences that make every trip unforgettable."
        />
        <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {destinations.map(({ title, description, image, alt }) => (
            <article
              key={title}
              className="group overflow-hidden rounded-xl border border-[#e1edf2] bg-white p-2 shadow-sm"
            >
              <Image
                src={image}
                alt={alt}
                width={600}
                height={360}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="h-32 w-full rounded-lg object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="p-2 pb-1">
                <h3 className="text-[13px] font-bold text-[#172b43]">{title}</h3>
                <p className="mt-1.5 text-[10px] leading-4 text-[#526579]">
                  {description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
