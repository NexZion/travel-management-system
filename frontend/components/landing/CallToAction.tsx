import Link from "next/link";
import Container from "@/components/ui/Container";

export default function CallToAction() {
  return (
    <section className="px-0 pb-12" aria-labelledby="cta-title">
      <div className="bg-[#0ea5e9] py-10 text-white sm:py-12">
        <Container>
          <div>
            <div>
              <span className="text-[10px] font-extrabold uppercase tracking-[0.12em] text-sky-100">
                YOUR ISLAND ADVENTURE AWAITS
              </span>
              <h2
                id="cta-title"
                className="mt-2 text-2xl font-extrabold tracking-tight sm:text-[30px]"
              >
                Your Next Adventure Starts Here
              </h2>
              <p className="mt-2 max-w-xl text-[12px] leading-6 text-sky-50">
                Find inspiration, make a plan, and explore Sri Lanka your way.
              </p>
            </div>
            <div className="mt-5 flex flex-wrap gap-3">
              <Link href="#trip-planner" className="inline-flex min-h-9 items-center justify-center rounded-lg bg-white px-4 py-2 text-xs font-bold text-sky-700 transition hover:bg-sky-50">Start Planning Today</Link>
              <Link href="#vendors" className="inline-flex min-h-9 items-center justify-center rounded-lg border border-white/30 px-4 py-2 text-xs font-bold text-white transition hover:bg-white/10">Become a Vendor</Link>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}
