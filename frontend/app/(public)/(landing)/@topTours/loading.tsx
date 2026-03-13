import { Skeleton } from "@/components/ui/skeleton";

const FeaturedToursLoading = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {Array.from({ length: 3 }).map((_, index) => (
        <Skeleton key={index} className="h-96 w-full" />
      ))}
    </div>
  );
};

export default FeaturedToursLoading;
