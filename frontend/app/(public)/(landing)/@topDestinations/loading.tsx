import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

const FeaturedCitiesLoading = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {Array.from({ length: 12 }).map((_, index) => (
        <Skeleton key={index} className="h-96 w-full" />
      ))}
    </div>
  );
};

export default FeaturedCitiesLoading;
