import { ArrowRight } from "lucide-react";
import Link from "next/link";
import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="px-6 md:px-20 py-10 bg-slate-50 dark:bg-slate-800/50">
      <div className="flex justify-between items-end mb-8">
        <div>
          <h2 className="text-slate-900 dark:text-white text-3xl font-bold">
            Popular Destinations
          </h2>
          <p className="text-slate-500 dark:text-slate-400 mt-2">
            Handpicked places for your next adventure
          </p>
        </div>
        <Link
          className="text-primary font-bold flex items-center gap-1 hover:underline"
          href="/destinations"
        >
          View all <ArrowRight className="w-4 h-4 text-primary" />
        </Link>
      </div>
      {children}
    </section>
  );
};

export default layout;
