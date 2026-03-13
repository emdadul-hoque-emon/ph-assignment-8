import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

const TopGuidesLoading = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
      {Array.from({ length: 4 }).map((_, index) => (
        <Skeleton key={index} className="h-96 w-full" />
      ))}
    </div>
  );
};

export default TopGuidesLoading;
