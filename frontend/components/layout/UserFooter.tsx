import Link from "next/link";

export default function UserFooter() {
  return (
    <footer className="w-full mt-14 pt-6 pb-10 border-t border-sky-200/80 text-[11px] text-slate-400">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Copyright notice */}
        <p>© 2026 Xplore · Made for your kind of journey.</p>

        {/* Links with dot separator */}
        <div className="flex items-center gap-3">
          <Link href="#" className="hover:text-slate-600 transition">
            Help & support
          </Link>
          <span className="text-slate-300">·</span>
          <Link href="#" className="hover:text-slate-600 transition">
            Travel preferences
          </Link>
        </div>
      </div>
    </footer>
  );
}
