import Link from "next/link";
import Image from "next/image";
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaYoutube } from "react-icons/fa";

const cols = [
  { title: "Quick links", links: ["Home", "Discover", "Experiences", "Vendors"] },
  { title: "Company", links: ["About", "Contact", "Become a Vendor"] },
];

export default function Footer() {
  return (
    <footer id="contact" className="border-t border-line bg-white">
      <div className="container-x grid gap-10 py-12 md:grid-cols-[1.4fr_1fr_1fr_1.6fr]">
        <div>
          <p className="flex items-center gap-2 text-lg font-bold"><Image src="/logo.svg" alt="" width={28} height={28} /> Xplore</p>
          <p className="mt-3 max-w-xs text-sm text-muted">Intelligent Sri Lankan travel planning for travelers who want more discovery, less friction, and better itineraries.</p>
        </div>
        {cols.map((c) => (
          <div key={c.title}>
            <h3 className="text-sm font-semibold">{c.title}</h3>
            <ul className="mt-3 space-y-2 text-sm text-muted">
              {c.links.map((l) => <li key={l}><Link href="#" className="hover:text-ink">{l}</Link></li>)}
            </ul>
          </div>
        ))}
        <div>
          <h3 className="text-sm font-semibold">Newsletter</h3>
          <p className="mt-3 text-sm text-muted">Get destination ideas, new experiences, and travel tips delivered to your inbox.</p>
          <form className="mt-3 flex gap-2">
            <input type="email" aria-label="Email address" placeholder="Email address" className="field" />
            <button className="h-10 shrink-0 rounded-lg bg-primary px-4 text-sm font-semibold text-white hover:bg-primary-dark">Subscribe</button>
          </form>
        </div>
      </div>
      <div className="container-x flex items-center justify-between border-t border-line py-5 text-xs text-muted">
        <p>© {new Date().getFullYear()} Xplore</p>
        <div className="flex gap-4">
          {[FaFacebookF, FaLinkedinIn, FaYoutube, FaInstagram].map((I, i) => <I key={i} size={16} aria-hidden />)}
        </div>
      </div>
    </footer>
  );
}
