import DashboardHeader from "@/components/dashboard/DashboardHeader";

export default function TripsPage() {
  return (
    <div className="min-h-screen bg-[#F0F8FF] text-slate-800">
      {/* Shared Header */}
      <DashboardHeader />

      {/* Main Container */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        <h1 className="text-2xl font-bold text-slate-900">
          Trips Page Setup Complete!
        </h1>
        <p className="text-xs text-slate-500">
          Ready for Step 2: Search, Filters & Tabs bar.
        </p>
      </main>
    </div>
  );
}