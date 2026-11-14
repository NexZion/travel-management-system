import UserHeader from "@/components/layout/UserHeader";
import UserFooter from "@/components/layout/UserFooter";
import TripsFilterBar from "@/components/trips/TripsFilterBar";
import PlannedTripCard from "@/components/trips/PlannedTripCard";
import CompletedTrips from "@/components/trips/CompletedTrips";

export default function TripsPage() {
  return (
    <div className="min-h-screen bg-[#F0F8FF] text-slate-800">
      <UserHeader />

      {/* Main Container */}
      <main className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        <TripsFilterBar />
        <PlannedTripCard />
        <CompletedTrips />

        <UserFooter />
      </main>
    </div>
  );
}
