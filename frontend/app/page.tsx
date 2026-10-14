import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CallToAction from "@/components/landing/CallToAction";
import Destinations from "@/components/landing/Destinations";
import Experiences from "@/components/landing/Experiences";
import Features from "@/components/landing/Features";
import FutureOfTravel from "@/components/landing/FutureOfTravel";
import Hero from "@/components/landing/Hero";
import HowItWorks from "@/components/landing/HowItWorks";
import ItineraryPreview from "@/components/landing/ItineraryPreview";
import Statistics from "@/components/landing/Statistics";
import Testimonials from "@/components/landing/Testimonials";
import TripPlanner from "@/components/landing/TripPlanner";
import TrustedProviders from "@/components/landing/TrustedProviders";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TripPlanner />
        <Features />
        <ItineraryPreview />
        <Destinations />
        <Experiences />
        <TrustedProviders />
        <HowItWorks />
        <Testimonials />
        <Statistics />
        <FutureOfTravel />
        <CallToAction />
      </main>
      <Footer />
    </>
  );
}
