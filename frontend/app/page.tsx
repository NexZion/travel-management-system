import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/landing-v2/Hero";
import TripPlanner from "@/components/landing-v2/TripPlanner";
import { WhyXplore, AICompanion, Future } from "@/components/landing-v2/FeatureSections";
import { Destinations, Experiences } from "@/components/landing-v2/ImageGrids";
import { Partners, HowItWorks, Testimonials, Stats } from "@/components/landing-v2/TrustSections";
import FinalCTA from "@/components/landing-v2/FinalCTA";

export default function LandingPage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <TripPlanner />
        <WhyXplore />
        <AICompanion />
        <Destinations />
        <Experiences />
        <Partners />
        <HowItWorks />
        <Testimonials />
        <Stats />
        <Future />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
