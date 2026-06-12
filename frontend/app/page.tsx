import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TripPlanner from "@/components/TripPlanner";
import WhyXplore from "@/components/WhyXplore";
import AICompanion from "@/components/AICompanion";
import Destinations from "@/components/Destinations";
import Experiences from "@/components/Experiences";
import Vendors from "@/components/Vendors";
import HowItWorks from "@/components/HowItWorks";
import SocialProof from "@/components/SocialProof";
import FutureVision from "@/components/FutureVision";
import FinalCta from "@/components/FinalCta";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TripPlanner />
        <WhyXplore />
        <AICompanion />
        <Destinations />
        <Experiences />
        <Vendors />
        <HowItWorks />
        <SocialProof />
        <FutureVision />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
