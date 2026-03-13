import {
  BadgePercent,
  CalendarCheck,
  Headphones,
  ShieldCheck,
} from "lucide-react";
import React from "react";

const WhyChooseUs = () => {
  const benifites = [
    {
      name: "Verified Guides",
      description: "Every guide background-checked and vetted.",
      Icon: ShieldCheck,
    },
    {
      name: "Fair Pricing",
      description: "Best price guarantee for authentic experiences.",
      Icon: BadgePercent,
    },
    {
      name: "24/7 Support",
      description: "We're here to help you every step of the way, anywhere.",
      Icon: Headphones,
    },
    {
      name: "Flexible Booking",
      description: "Easy cancellation and rescheduling options.",
      Icon: CalendarCheck,
    },
  ];
  return (
    <section className="px-6 md:px-20 py-16 bg-slate-900 text-white rounded-3xl mx-4 md:mx-20 mb-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-4xl font-bold mb-6">Why Choose TourBuddy?</h2>
          <p className="text-slate-400 text-lg mb-8">
            We connect you with the heartbeat of every city through people who
            live and breathe its culture.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {benifites.map((i) => (
              <div key={i.name} className="flex gap-4">
                <div className="text-primary">
                  <i.Icon className="text-3xl" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">{i.name}</h4>
                  <p className="text-slate-400 text-sm">{i.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="relative">
          <img
            alt="Group travel"
            className="rounded-2xl shadow-2xl"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuC4qEdvd_2fvC5bV9TqWI4WqX9_M3w5lv9-4PxrHPcutNb9Mm0p_uvUwiw10fIVViJXjlgEOZ8Hqx6Wu9rRlejPVu0X4VV34AjGYNj5NmMSmNaQWlxsK6Q4tC9t2nxB8YaxrJ3hpBzRL4P0TRSObZH5HfVDl9R6ro2VW0gchkI9zdMn2j794uwGAdsNX5_HQOuHJvyl2foWVkQRcC4ULwA5RFRD3ISG_P3Ht5bUQDQl7V34uSJS7mDZWvzZJq7FaXvfP5G3Ptwj8BQ"
          />
          <div className="absolute -bottom-6 -left-6 bg-primary p-6 rounded-2xl shadow-xl hidden md:block">
            <p className="text-3xl font-black">10k+</p>
            <p className="text-sm font-semibold text-slate-200">
              Happy Travelers
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
