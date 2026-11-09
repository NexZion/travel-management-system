import Button from "@/components/ui/Button";

export default function FinalCTA() {
  return (
    <section className="mt-12 bg-primary py-16 text-white">
      <div className="container-x">
        <p className="text-xs font-medium text-white/80">Ready to start</p>
        <h2 className="mt-2 text-3xl font-bold tracking-tight md:text-4xl">Your Next Adventure Starts Here</h2>
        <p className="mt-3 text-sm text-white/85">Start planning today and discover a smarter way to explore Sri Lanka.</p>
        <div className="mt-6 flex gap-3">
          <Button href="/trips/new" variant="outline">Start Planning Today</Button>
          <Button href="/register?role=vendor" variant="light">Become a Vendor</Button>
        </div>
      </div>
    </section>
  );
}
