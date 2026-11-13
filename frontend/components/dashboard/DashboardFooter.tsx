import Link from "next/link";

export default function DashboardFooter() {
  return (
    <footer className="border-t border-sky-100/80 mt-12 py-8 text-xs text-slate-400">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Copyright notice */}
        <p>© 2026 Xplore · Made for your kind of journey.</p>

        {/* Footer links */}
        <div className="flex items-center gap-6">
          <Link
            href="#"
            className="hover:text-slate-600 transition"
          >
            Help & support
          </Link>
          <Link
            href="#"
            className="hover:text-slate-600 transition"
          >
            Travel preferences
          </Link>
        </div>
      </div>
    </footer>
  );
}