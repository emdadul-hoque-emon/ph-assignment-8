import { ArrowRight } from "lucide-react";
import Link from "next/link";
import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="px-6 md:px-20 py-16">
      <div className="flex justify-between items-center w-full">
        <h2 className="text-slate-900 dark:text-white text-3xl font-bold mb-10">
          Top-Rated Experiences
        </h2>
        <Link
          className="text-primary font-bold flex items-center gap-1 hover:underline"
          href="/tours"
        >
          View all <ArrowRight className="w-4 h-4 text-primary" />
        </Link>
      </div>
      {children}
    </section>
  );
};

export default layout;
