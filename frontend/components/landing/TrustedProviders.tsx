import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";
import { providers } from "@/lib/constants";
import Container from "@/components/ui/Container";

export default function TrustedProviders() {
  return (
    <section
      id="vendors"
      className="section-space"
      aria-labelledby="providers-title"
    >
      <Container>
        <span className="eyebrow">TRUSTED EXPERIENCES</span>
        <h2 id="providers-title" className="section-title">
          Every part of your journey, backed by trusted providers
        </h2>
        <p className="section-description">
          From stays and guides to transport, Xplore connects you with reliable partners for a seamless travel experience.
        </p>
        <div className="mt-7 grid gap-3 sm:grid-cols-3">
            {providers.map(({ title, description, icon: Icon }) => (
              <article key={title} className="surface-card p-4">
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
        <div className="mt-4 flex flex-col gap-3 rounded-xl border border-[#e1edf2] bg-white p-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h3 className="text-[13px] font-bold text-[#172b43]">Become a Vendor</h3>
            <p className="mt-1 text-[10px] text-[#526579]">Join a network of trusted accommodation, guides, transport, and experience providers helping travelers plan better trips.</p>
          </div>
          <Link href="mailto:hello@xplore.lk?subject=Become%20a%20Xplore%20vendor" className="btn-primary min-h-8 shrink-0 px-3 text-[10px]">Apply Now <FaArrowRight aria-hidden="true" /></Link>
        </div>
      </Container>
    </section>
  );
}
