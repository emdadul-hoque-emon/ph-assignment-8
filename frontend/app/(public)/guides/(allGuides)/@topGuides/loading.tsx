import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

const loading = () => {
  return (
    <div className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide">
      {Array.from({ length: 4 }).map((_, i) => (
        <Skeleton key={i} className="flex-none w-72 aspect-3/4" />
      ))}
    </div>
  );
};

export default loading;
