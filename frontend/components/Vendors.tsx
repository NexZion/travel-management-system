const vendorTypes = [
  { title: "Accommodation Providers", body: "Hotels, Villas, Guesthouses, Resorts" },
  { title: "Tour Guides", body: "Certified Local Guides" },
  { title: "Transportation Services", body: "Cars, Vans, Drivers, Transfers" },
  { title: "Experience Providers", body: "Adventure Operators and Activity Hosts" },
];

export default function Vendors() {
  return (
    <section
      id="vendors"
      className="relative py-32 bg-neutral-900 text-white px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      <div className="smooth-divider top-0 left-0 right-0 transform -translate-y-[99%]" aria-hidden>
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,60 C400,140 700,20 900,100 C1050,140 1150,70 1200,60 L1200,120 L0,120 Z"
            fill="#171717"
            opacity="0.4"
          />
          <path
            d="M0,30 C300,100 500,10 800,80 C1000,130 1100,50 1200,40 L1200,120 L0,120 Z"
            fill="#171717"
          />
        </svg>
      </div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#ac683f]/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-5 space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-[#ac683f]">
            Verified Ecosystem
          </span>
          <h2 className="text-3xl font-extrabold tracking-tight">
            Powered By Trusted Travel Partners
          </h2>
          <p className="text-neutral-400 text-xs leading-relaxed">
            Xplore connects travelers with verified local businesses and travel
            professionals. Every vendor is reviewed and verified to ensure a safe and
            reliable travel experience.
          </p>
          <div className="pt-2">
            <button className="bg-[#ac683f] hover:bg-[#925430] text-white font-bold text-xs uppercase tracking-wider px-6 py-3.5 rounded-full transition-all transform hover:-translate-y-0.5 shadow-md hover:shadow-[#ac683f]/20 cursor-pointer">
              Become a Vendor
            </button>
          </div>
        </div>

        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {vendorTypes.map((v) => (
            <div
              key={v.title}
              className="p-6 bg-white/5 border border-white/10 rounded-3xl hover:bg-white/10 transition-colors duration-300"
            >
              <span className="text-sm font-bold text-neutral-200 block mb-1">{v.title}</span>
              <span className="text-[11px] text-neutral-400">{v.body}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
