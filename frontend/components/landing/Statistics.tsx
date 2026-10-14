import { statistics } from "@/lib/constants";
import Container from "@/components/ui/Container";

export default function Statistics() {
  return (
    <section
      className="section-space py-7"
      aria-label="Xplore platform highlights"
    >
      <Container>
        <div className="mb-3 flex items-center justify-center gap-2 text-[10px] font-semibold uppercase tracking-wider text-slate-400">
          <span className="size-1.5 rounded-full bg-sky-400" />
          Demonstration data — replace with verified platform metrics
        </div>
        <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
          {statistics.map(({ value, label }) => (
            <article
              key={label}
              className="surface-card px-4 py-4"
            >
              <p className="text-xl font-extrabold tracking-tight text-[#172b43] sm:text-2xl">
                {value}
              </p>
              <p className="mt-1.5 text-[10px] font-semibold text-[#526579] sm:text-[11px]">
                {label}
              </p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
