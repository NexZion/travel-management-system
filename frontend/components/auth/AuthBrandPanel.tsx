
import Image from "next/image";
import Link from "next/link";
import { FiCompass } from "react-icons/fi";

type AuthBrandPanelProps = {
  title?: string;
  description?: string;
  imageSrc?: string;
  imageAlt?: string;
};

export default function AuthBrandPanel({
  title = "Your next adventure starts here.",
  description = "Discover beautiful places, plan unforgettable journeys, and explore Sri Lanka with Xplore.",
  imageSrc = "/images/auth-travel.jpg",
  imageAlt = "Beautiful Sri Lankan mountain landscape",
}: AuthBrandPanelProps) {
  return (
    <section className="relative hidden min-h-screen overflow-hidden bg-slate-900 lg:flex lg:w-1/2">
      <Image
        src={imageSrc}
        alt={imageAlt}
        fill
        priority
        sizes="50vw"
        className="object-cover"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-900/20 to-slate-900/10" />

      <div className="relative z-10 flex w-full flex-col justify-between p-10 xl:p-14">
        <Link
          href="/"
          aria-label="Xplore home"
          className="inline-flex w-fit items-center gap-3 text-white"
        >
          <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/20 backdrop-blur-sm">
            <FiCompass size={25} aria-hidden="true" />
          </span>

          <span className="text-2xl font-bold tracking-tight">
            Xplore
          </span>
        </Link>

        <div className="max-w-lg rounded-2xl border border-white/30 bg-white/15 p-6 text-white shadow-lg backdrop-blur-md xl:p-8">
          <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1.5 text-xs font-medium">
            <FiCompass size={14} aria-hidden="true" />
            Explore more. Experience more.
          </span>

          <h2 className="text-3xl font-bold leading-tight xl:text-4xl">
            {title}
          </h2>

          <p className="mt-4 max-w-md text-sm leading-7 text-white/85 xl:text-base">
            {description}
          </p>
        </div>

        <p className="text-xs text-white/75">
          © {new Date().getFullYear()} Xplore. Discover your next journey.
        </p>
      </div>
    </section>
  );
}
