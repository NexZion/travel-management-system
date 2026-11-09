import type { IconType } from "react-icons";

export type FeatureItem = {
  title: string;
  description: string;
  icon: IconType;
};

export type DestinationItem = {
  title: string;
  description: string;
  image: string;
  alt: string;
};

export type ExperienceItem = {
  title: string;
  description: string;
  icon: IconType;
  image: string;
  alt: string;
};

export type ProviderItem = {
  title: string;
  description: string;
  icon: IconType;
};

export type ProcessStep = {
  title: string;
  description: string;
  icon: IconType;
};

export type TestimonialItem = {
  quote: string;
  reviewer: string;
};

export type StatisticItem = {
  value: string;
  label: string;
};

export type FutureFeature = {
  title: string;
  description: string;
  icon: IconType;
};
