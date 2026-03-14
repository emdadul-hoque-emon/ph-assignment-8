import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

export default function TopGuidesLayout({ children }: LayoutProps) {
  return (
    <section className="mb-16">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-slate-900 dark:text-white text-2xl font-bold">
          Top Rated Guides
        </h2>
      </div>
      {children}
    </section>
  );
}
