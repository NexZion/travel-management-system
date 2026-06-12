"use client";

import { FaCompass } from "react-icons/fa6";

export default function Footer() {
  const handleSubscribe = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert("Subscribed successfully!");
    e.currentTarget.reset();
  };

  return (
    <footer
      id="contact"
      className="bg-neutral-950 text-neutral-400 pt-16 pb-8 px-4 sm:px-6 lg:px-8 text-xs relative"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-12 gap-8 pb-12 border-b border-neutral-900">
        <div className="col-span-2 md:col-span-4 space-y-4">
          <span className="text-lg font-bold text-white tracking-tight flex items-center gap-2">
            <span className="w-6 h-6 rounded-full bg-[#ac683f] text-white flex items-center justify-center text-xs">
              <FaCompass />
            </span>
            Xplore
          </span>
          <p className="text-neutral-500 leading-relaxed max-w-xs">
            Discover. Plan. Explore. Native infrastructure mapping tools optimized across
            regional channels.
          </p>
        </div>

        <div className="col-span-1 md:col-span-2 space-y-3">
          <h5 className="font-bold uppercase tracking-wider text-neutral-200 text-[10px]">
            Quick Links
          </h5>
          <ul className="space-y-2 font-medium">
            <li>
              <a href="#" className="hover:text-white transition-colors">
                Home
              </a>
            </li>
            <li>
              <a href="#discover" className="hover:text-white transition-colors">
                Destinations
              </a>
            </li>
          </ul>
        </div>

        <div className="col-span-2 md:col-span-4 space-y-3">
          <h5 className="font-bold uppercase tracking-wider text-neutral-200 text-[10px]">
            Newsletter Sync
          </h5>
          <form onSubmit={handleSubscribe} className="flex gap-2 pt-1">
            <input
              type="email"
              required
              placeholder="Enter email address"
              className="w-full bg-white/5 border border-white/10 px-4 py-2.5 rounded-full text-xs font-semibold focus:outline-none focus:border-[#ac683f] text-white"
            />
            <button
              type="submit"
              className="bg-[#ac683f] hover:bg-[#925430] text-white font-bold px-5 rounded-full transition-colors cursor-pointer"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-8 flex flex-col sm:flex-row justify-between items-center text-neutral-600 font-medium gap-4">
        <p>&copy; 2026 Xplore. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
