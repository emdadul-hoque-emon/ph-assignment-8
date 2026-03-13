import {
  BookOpenText,
  Camera,
  Mountain,
  Utensils,
  Landmark,
  Bike,
  Building2Icon,
  MoonStarIcon,
} from "lucide-react";
import Link from "next/link";
import React from "react";

const Interests = () => {
  const interests = [
    {
      name: "Nature",
      Icon: Mountain,
    },
    {
      name: "City",
      Icon: Building2Icon,
    },
    {
      name: "NightLife",
      Icon: MoonStarIcon,
    },
    {
      name: "Food",
      Icon: Utensils,
    },
    {
      name: "Culture",
      Icon: Landmark,
    },
    {
      name: "Adventure",
      Icon: Bike,
    },
  ];
  return (
    <section className="px-6 md:px-20 py-10">
      <h2 className="text-slate-900 dark:text-white text-2xl font-bold mb-8">
        Explore by Interest
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {interests.map((i) => (
          <Link
            href={`/tours?category=${i.name.toLowerCase()}`}
            key={i.name}
            className="flex flex-col items-center gap-3 p-6 bg-white dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800 hover:shadow-md transition-shadow cursor-pointer group"
          >
            <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
              <i.Icon className="text-3xl" />
            </div>
            <span className="font-semibold">{i.name}</span>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Interests;
