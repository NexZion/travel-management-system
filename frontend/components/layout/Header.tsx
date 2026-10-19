import Link from "next/link";
import Image from "next/image";
import Button from "@/components/ui/Button";
import { NAV_LINKS } from "@/lib/constants";

export default function Header() {
  return (
    <header className="sticky top-0 z-30 border-b border-line bg-bg/90 backdrop-blur">
      <div className="container-x flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2 text-lg font-bold">
          <Image src="/logo.svg" alt="" width={28} height={28} /> Xplore
        </Link>
        <nav aria-label="Main" className="hidden gap-6 text-xs font-medium text-muted md:flex">
          {NAV_LINKS.map((l) => <Link key={l.label} href={l.href} className="hover:text-ink">{l.label}</Link>)}
        </nav>
        <div className="flex gap-2">
          <Button href="/login" variant="outline">Sign In</Button>
          <Button href="/register">Get Started</Button>
        </div>
      </div>
    </header>
  );
}
