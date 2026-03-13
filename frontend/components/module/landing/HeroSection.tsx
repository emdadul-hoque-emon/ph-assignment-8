import React from "react";
import DestinationSearch from "../destination/DestinationSearch";

const HeroSection = () => {
  return (
    <section className="relative px-4 py-10 md:px-20 md:py-16">
      <div
        className="relative flex min-h-130 flex-col gap-8 items-center justify-center rounded-2xl overflow-hidden px-6 text-center bg-slate-900"
        style={{
          backgroundImage:
            'linear-gradient(rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0.6) 100%), url("/images/landing_hero.png")',
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="flex flex-col gap-4 max-w-3xl">
          <h1 className="text-white text-4xl md:text-6xl font-black leading-tight tracking-tight">
            Explore the World with Local Experts
          </h1>
          <p className="text-slate-200 text-lg md:text-xl font-medium max-w-2xl mx-auto">
            Discover unique experiences and hidden gems with passionate local
            guides who know their city best.
          </p>
        </div>
        <DestinationSearch target="/tours" />
      </div>
    </section>
  );
};

export default HeroSection;
