import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="px-6 md:px-20 py-16 bg-slate-50 dark:bg-slate-800/50">
      <div className="text-center mb-12">
        <h2 className="text-slate-900 dark:text-white text-3xl font-bold mb-4">
          Meet Our Top Guides
        </h2>
        <p className="text-slate-500 max-w-2xl mx-auto">
          Expert locals ready to share their passion and knowledge with you.
        </p>
      </div>
      {children}
    </section>
  );
};

export default layout;
