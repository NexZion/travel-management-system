export default function FinalCta() {
  return (
    <section className="py-28 px-4 sm:px-6 lg:px-8 text-center relative max-w-4xl mx-auto">
      <div className="absolute inset-0 dotted-path opacity-20 -z-10" />
      <h2 className="text-4xl font-extrabold text-neutral-900 tracking-tight mb-4">
        Your Next Adventure Starts Here
      </h2>
      <p className="text-neutral-500 max-w-md mx-auto text-sm mb-8 leading-relaxed">
        Whether you&apos;re planning a weekend getaway or a once-in-a-lifetime journey,
        Xplore helps you discover the best of Sri Lanka.
      </p>
      <div className="flex justify-center gap-4">
        <a
          href="#search-bar"
          className="bg-[#ac683f] hover:bg-[#925430] text-white font-bold text-xs uppercase tracking-wider px-8 py-4 rounded-full shadow-lg hover:shadow-[#ac683f]/30 transition-all transform hover:-translate-y-1 cursor-pointer"
        >
          Start Planning Today
        </a>
      </div>
    </section>
  );
}
