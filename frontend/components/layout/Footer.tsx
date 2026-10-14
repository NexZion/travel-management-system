import Link from "next/link";
import { FaCompass } from "react-icons/fa6";
import Container from "@/components/ui/Container";

const footerGroups = [
  {
    title: "Explore",
    links: [
      { label: "Destinations", href: "#discover" },
      { label: "Experiences", href: "#experiences" },
      { label: "Trip planner", href: "#trip-planner" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "#about" },
      { label: "How it works", href: "#how-it-works" },
      { label: "Contact", href: "mailto:hello@xplore.lk" },
    ],
  },
];

export default function Footer() {
  return (
    <footer id="contact" className="border-t border-[#e1edf2] bg-white">
      <Container>
        <div className="grid gap-8 py-9 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1.5fr]">
          <div>
            <Link
              href="#home"
              className="inline-flex items-center gap-2 text-base font-extrabold tracking-tight text-[#172b43]"
            >
              <span className="flex size-8 items-center justify-center rounded-xl bg-sky-500 text-white">
                <FaCompass aria-hidden="true" />
              </span>
              Xplore
            </Link>
            <p className="mt-3 max-w-xs text-[11px] leading-5 text-[#526579]">
              Discover more of Sri Lanka with local inspiration and thoughtful
              travel planning.
            </p>
          </div>
          {footerGroups.map(({ title, links }) => (
            <nav key={title} aria-label={title}>
              <h2 className="text-[11px] font-bold text-[#172b43]">{title}</h2>
              <ul className="mt-3 space-y-2">
                {links.map(({ label, href }) => (
                  <li key={label}>
                    <Link
                      href={href}
                      className="text-[10px] font-medium text-[#526579] transition hover:text-sky-600"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
          <div>
            <h2 className="text-[11px] font-bold text-[#172b43]">Newsletter</h2>
            <p className="mt-3 text-[10px] leading-5 text-[#526579]">Get destination ideas, new experiences, and travel tips delivered to your inbox.</p>
            <div className="mt-3 flex">
              <label className="sr-only" htmlFor="newsletter-email">Email address</label>
              <input id="newsletter-email" type="email" placeholder="Email address" className="min-w-0 flex-1 rounded-l-lg border border-[#e1edf2] px-3 py-2 text-[10px] outline-none focus:border-sky-400" />
              <button type="submit" className="rounded-r-lg bg-sky-500 px-3 py-2 text-[10px] font-bold text-white">Subscribe</button>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2 border-t border-[#e1edf2] py-4 text-[10px] text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Xplore. Made for discovering Sri Lanka.</p>
          <p>Demo content and metrics are for illustration only.</p>
        </div>
      </Container>
    </footer>
  );
}
