import DestinationSearch from "@/components/module/destination/DestinationSearch";
import HeroSection from "@/components/module/landing/HeroSection";
import HowItWorks from "@/components/module/landing/HowItWorks";
import Interests from "@/components/module/landing/Interests";
import WhyChooseUs from "@/components/module/landing/WhyChooseUs";
import React from "react";

interface ILandingLayout {
  children: React.ReactNode;
  topDestinations: React.ReactNode;
  topGuides: React.ReactNode;
  topTours: React.ReactNode;
  testimonials: React.ReactNode;
}

const LandingLayout = ({
  children,
  topDestinations,
  topTours,
  topGuides,
  testimonials,
}: ILandingLayout) => {
  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden">
      <div className="layout-container flex h-full grow flex-col">
        <main className="flex flex-col">
          <HeroSection />
          <Interests />
          {topDestinations}
          {topTours}
          {topGuides}
          <HowItWorks />
          <WhyChooseUs />
          {testimonials}
          {children}
        </main>
      </div>
    </div>
  );
};

export default LandingLayout;
