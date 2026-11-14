import UserHeader from "@/components/layout/UserHeader";
import UserFooter from "@/components/layout/UserFooter";
import PlacesFilterBar from "@/components/places/PlacesFilterBar";
import PlacesGrid from "@/components/places/PlacesGrid";

export default function PlacesPage() {
  return (
    <div className="min-h-screen bg-[#F0F8FF] text-slate-800">
      <UserHeader />

      <main className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        <PlacesFilterBar />
        <PlacesGrid />
        <UserFooter />
      </main>
    </div>
  );
}
