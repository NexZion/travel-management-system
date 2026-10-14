import {
  FaBinoculars,
  FaCamera,
  FaCampground,
  FaCompass,
  FaHouse,
  FaLandmark,
  FaMap,
  FaPeopleGroup,
  FaPersonHiking,
  FaShieldHalved,
  FaUtensils,
  FaVanShuttle,
  FaWallet,
  FaWater,
  FaWandSparkles,
} from "react-icons/fa6";
import type {
  DestinationItem,
  ExperienceItem,
  FeatureItem,
  FutureFeature,
  ProcessStep,
  ProviderItem,
  StatisticItem,
  TestimonialItem,
} from "@/types/landing";

export const featureItems: FeatureItem[] = [
  {
    title: "Personalized Recommendations",
    description:
      "Get tailored itinerary ideas that match your interests, pace, and budget from the moment you start planning.",
    icon: FaWandSparkles,
  },
  {
    title: "Verified Vendors",
    description:
      "Book trusted accommodation, guides, transport, and experiences with partners vetted for quality and reliability.",
    icon: FaShieldHalved,
  },
  {
    title: "Budget-Friendly Planning",
    description:
      "Compare options, stay within your spending range, and refine your trip without losing the experiences you love.",
    icon: FaWallet,
  },
];

export const destinations: DestinationItem[] = [
  {
    title: "Mountains & Nature",
    description: "Misty tea country, lush trails, and cascading waterfalls.",
    image:
      "https://images.unsplash.com/photo-1546708973-b339540b5162?auto=format&fit=crop&w=900&q=85",
    alt: "Green hills and tropical landscape in Sri Lanka",
  },
  {
    title: "Beaches & Islands",
    description: "Golden shores, blue water, and laid-back coastal towns.",
    image:
      "https://images.unsplash.com/photo-1586861635167-e5223aadc9fe?auto=format&fit=crop&w=900&q=85",
    alt: "Sunny beach and ocean along a tropical coast",
  },
  {
    title: "Wildlife & Adventure",
    description: "Find wild places, safari trails, and unforgettable views.",
    image:
      "https://images.unsplash.com/photo-1563294389-9852261761ef?auto=format&fit=crop&w=900&q=85",
    alt: "Wild natural landscape ready for an outdoor adventure",
  },
  {
    title: "Heritage & Culture",
    description: "Explore ancient landmarks and living local traditions.",
    image:
      "https://images.unsplash.com/photo-1608958416711-574323be0188?auto=format&fit=crop&w=900&q=85",
    alt: "Historic architecture in a warm tropical setting",
  },
];

export const experiences: ExperienceItem[] = [
  {
    title: "Village Experiences",
    description: "Meet local hosts and discover everyday island life.",
    icon: FaHouse,
    image: "https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?auto=format&fit=crop&w=700&q=85",
    alt: "Rice fields and village life in Sri Lanka",
  },
  {
    title: "Food & Flavours",
    description: "Taste home-cooked Sri Lankan dishes and street food.",
    icon: FaUtensils,
    image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=700&q=85",
    alt: "Sri Lankan food served at a table",
  },
  {
    title: "Wildlife Safaris",
    description: "Look for elephants and native wildlife with a local guide.",
    icon: FaBinoculars,
    image: "https://images.unsplash.com/photo-1549366021-9f761d450615?auto=format&fit=crop&w=700&q=85",
    alt: "Safari jeep in a wild landscape",
  },
  {
    title: "Camping Under Stars",
    description: "Spend a night beneath the sky in a peaceful setting.",
    icon: FaCampground,
    image: "https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?auto=format&fit=crop&w=700&q=85",
    alt: "Tent glowing beside a campfire at night",
  },
  {
    title: "Waterfall Escapes",
    description: "Follow forest paths to refreshing hidden cascades.",
    icon: FaWater,
    image: "https://images.unsplash.com/photo-1464278533981-50106e6176b1?auto=format&fit=crop&w=700&q=85",
    alt: "Tropical waterfall surrounded by green forest",
  },
  {
    title: "Cultural Tours",
    description: "Visit temples, historic cities, and cultural landmarks.",
    icon: FaLandmark,
    image: "https://images.unsplash.com/photo-1528181304800-259b08848526?auto=format&fit=crop&w=700&q=85",
    alt: "Traveler at a Sri Lankan cultural landmark",
  },
  {
    title: "Hiking & Trails",
    description: "Take in mountain paths, tea fields, and sunrise views.",
    icon: FaPersonHiking,
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=700&q=85",
    alt: "Hiking trail through green hills",
  },
  {
    title: "Photography Tours",
    description: "Find beautiful light and memorable places to frame.",
    icon: FaCamera,
    image: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=700&q=85",
    alt: "Traveler photographing a mountain view",
  },
];

export const providers: ProviderItem[] = [
  {
    title: "Accommodation",
    description: "Hotels, homestays, villas, and guesthouses.",
    icon: FaHouse,
  },
  {
    title: "Tour Guides",
    description: "Knowledgeable local guides for every kind of trip.",
    icon: FaCompass,
  },
  {
    title: "Transportation",
    description: "Drivers, transfers, and comfortable local travel.",
    icon: FaVanShuttle,
  },
];

export const processSteps: ProcessStep[] = [
  {
    title: "Configure Preferences",
    description: "Choose your dates, destinations, budget, and travel style.",
    icon: FaWallet,
  },
  {
    title: "Receive Recommendations",
    description: "Explore ideas shaped around the trip you want to take.",
    icon: FaWandSparkles,
  },
  {
    title: "Book Trusted Services",
    description: "Connect with local providers for the services you need.",
    icon: FaShieldHalved,
  },
  {
    title: "Enjoy the Journey",
    description: "Travel with your plans and important details in one place.",
    icon: FaCompass,
  },
];

export const testimonials: TestimonialItem[] = [
  {
    quote:
      "The sample trip ideas made it easy to picture a relaxed few days around Ella.",
    reviewer: "Sample Traveler 01",
  },
  {
    quote:
      "I liked having places, local experiences, and planning details together.",
    reviewer: "Sample Traveler 02",
  },
  {
    quote:
      "A clear starting point for building our own Sri Lanka adventure.",
    reviewer: "Sample Traveler 03",
  },
];

export const statistics: StatisticItem[] = [
  { value: "10,000+", label: "Trips Planned" },
  { value: "500+", label: "Verified Vendors" },
  { value: "AI", label: "Travel Assistant" },
  { value: "Budget", label: "Forecasting" },
];

export const futureFeatures: FutureFeature[] = [
  {
    title: "AI Travel Assistant",
    description:
      "A future planning companion to help you explore options and shape your itinerary.",
    icon: FaWandSparkles,
  },
  {
    title: "Budget Forecasting",
    description:
      "Plan ahead with clearer estimates for the places and services on your trip.",
    icon: FaWallet,
  },
  {
    title: "Travel Community",
    description:
      "Share discoveries and learn from people who know Sri Lanka best.",
    icon: FaPeopleGroup,
  },
];

export const itineraryHighlights = [
  "A day-by-day trip overview",
  "Places and experiences matched to your interests",
  "Clearer travel choices for your budget",
];

export const itineraryImage =
  "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=1200&q=85";

export const mapIcon = FaMap;
