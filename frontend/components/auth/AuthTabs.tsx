
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function AuthTabs() {
  const pathname = usePathname();
  const isLogin = pathname === "/login";

  return (
    <div className="grid w-full grid-cols-2 rounded-xl bg-slate-100 p-1">
      <Link
        href="/login"
        aria-current={isLogin ? "page" : undefined}
        className={[
          "flex min-h-10 items-center justify-center rounded-lg",
          "text-sm font-semibold transition-colors",
          isLogin
            ? "bg-white text-slate-900 shadow-sm"
            : "text-slate-500 hover:text-slate-800",
        ].join(" ")}
      >
        Sign In
      </Link>

      <Link
        href="/register"
        aria-current={!isLogin ? "page" : undefined}
        className={[
          "flex min-h-10 items-center justify-center rounded-lg",
          "text-sm font-semibold transition-colors",
          !isLogin
            ? "bg-white text-slate-900 shadow-sm"
            : "text-slate-500 hover:text-slate-800",
        ].join(" ")}
      >
        Sign Up
      </Link>
    </div>
  );
}
