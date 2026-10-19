
import Link from "next/link";
import { FiCompass } from "react-icons/fi";

type AuthBrandHeaderProps = {
  title?: string;
  subtitle?: string;
};

export default function AuthBrandHeader({
  title = "Welcome back!",
  subtitle = "Sign in to continue your journey with Xplore.",
}: AuthBrandHeaderProps) {
  return (
    <div className="w-full space-y-6">
      <Link
        href="/"
        aria-label="Xplore home"
        className="inline-flex items-center gap-2.5"
      >
        <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-sky-500 text-white">
          <FiCompass size={23} aria-hidden="true" />
        </span>

        <span className="text-2xl font-bold tracking-tight text-slate-900">
          Xplore
        </span>
      </Link>

      <div className="space-y-2">
        <h1 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
          {title}
        </h1>

        <p className="text-sm leading-6 text-slate-500">
          {subtitle}
        </p>
      </div>
    </div>
  );
}
