import React from "react";
import { ITour } from "@/interfaces/tour.interface";

type Props = {
  itineraries: {
    dayNumber: number;
    title: string;
    description: string;
    icon: string;
  }[];
};

const TourItinerary = ({ itineraries }: Props) => {
  return (
    <section className="scroll-mt-24" id="itinerary">
      <h2 className="text-2xl font-bold mb-8">Tour Itinerary</h2>
      <div className="relative space-y-8 before:absolute before:inset-0 before:ml-5 before:h-full before:w-0.5 before:bg-slate-200 dark:before:bg-slate-800">
        {/* Item 1 */}
        {itineraries.map((i) => (
          <div key={i.title} className="relative flex items-start">
            <div className="absolute left-0 flex size-10 items-center justify-center rounded-full border-4 border-background-light dark:border-background-dark bg-primary">
              <div className="size-2 rounded-full bg-white"></div>
            </div>
            <div className="ml-16">
              <span className="text-xs font-bold uppercase tracking-wider text-primary">
                Day - {i.dayNumber}
              </span>
              <h4 className="text-lg font-bold text-slate-900 dark:text-white">
                {i.title}
              </h4>
              <p className="text-slate-600 dark:text-slate-400 text-sm mt-1">
                {i.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TourItinerary;
