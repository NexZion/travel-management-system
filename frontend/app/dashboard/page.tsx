import DashboardHeader from "@/components/dashboard/DashboardHeader";
import WelcomeStats from "@/components/dashboard/WelcomeStats";
import FeaturedTrip from "@/components/dashboard/FeaturedTrip";
import TravelBudget from "@/components/dashboard/TravelBudget";
import RecommendedPlaces from "@/components/dashboard/RecommendedPlaces";
import TravelCompanion from "@/components/dashboard/TravelCompanion";
import DashboardFooter from "@/components/dashboard/DashboardFooter";

export default function DashboardPage() {
    return (
        <div className="min-h-screen bg-[#F0F8FF] text-slate-800">

            <DashboardHeader />

            {/* Main Content Area */}
            <main className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <WelcomeStats />

                <section className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-8">
                    <div className="lg:col-span-2">
                        <FeaturedTrip />
                    </div>
                    <div className="lg:col-span-1">
                        <TravelBudget />

                    </div>
                </section>

                <section className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-8">
                    <div className="lg:col-span-2">
                        <RecommendedPlaces />
                    </div>
                    <div className="lg:col-span-1">
                        <TravelCompanion />
                    </div>
                </section>

                <DashboardFooter />


            </main>
        </div >
    );
}