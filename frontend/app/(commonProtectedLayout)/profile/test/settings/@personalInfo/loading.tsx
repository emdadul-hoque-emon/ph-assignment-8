import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export default function PersonalInformationSkeleton() {
  return (
    <section className="bg-surface-container-low rounded-4xl">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-bold font-headline text-on-surface">
            Personal Information
          </h2>
        </div>
        <div className="flex gap-2 items-center">
          <Skeleton className="h-8 w-8 rounded-full" />
          <Skeleton className="h-8 w-8 rounded-full" />
        </div>
      </div>

      <Card className="gap-0 py-4">
        <CardContent className="py-0 space-y-3">
          {/* Full Name */}
          <div className="grid grid-cols-3 items-center gap-1">
            <Skeleton className="h-3 w-20" />
            <Skeleton className="h-5 w-40 col-span-2" />
          </div>
          {/* Email */}
          <div className="grid grid-cols-3 items-center gap-1">
            <Skeleton className="h-3 w-12" />
            <Skeleton className="h-5 w-48 col-span-2" />
          </div>
          {/* Phone */}
          <div className="grid grid-cols-3 items-center gap-1">
            <Skeleton className="h-3 w-14" />
            <Skeleton className="h-5 w-36 col-span-2" />
          </div>
          {/* Date of Birth */}
          <div className="grid grid-cols-3 items-center gap-1">
            <Skeleton className="h-3 w-24" />
            <Skeleton className="h-5 w-32 col-span-2" />
          </div>
          {/* Blood Group */}
          <div className="grid grid-cols-3 items-center gap-1">
            <Skeleton className="h-3 w-24" />
            <Skeleton className="h-5 w-12 col-span-2" />
          </div>
          {/* City */}
          <div className="grid grid-cols-3 items-center gap-1">
            <Skeleton className="h-3 w-10" />
            <Skeleton className="h-5 w-28 col-span-2" />
          </div>
          {/* Country */}
          <div className="grid grid-cols-3 items-center gap-1">
            <Skeleton className="h-3 w-16" />
            <Skeleton className="h-5 w-32 col-span-2" />
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
