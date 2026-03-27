import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export default function EmergencyContactSkeleton() {
  return (
    <section className="bg-surface-container-low rounded-4xl">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold font-headline text-on-surface">
          Emergency Contact
        </h2>
        <div className="flex gap-2 items-center">
          <Skeleton className="h-8 w-8 rounded-full" />
          <Skeleton className="h-8 w-8 rounded-full" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {[1, 2].map((i) => (
          <Card key={i} className="py-4 gap-0">
            <CardHeader className="py-0">
              <div className="flex justify-between items-center">
                <Skeleton className="h-4 w-4" />
                <Skeleton className="h-4 w-4" />
              </div>
            </CardHeader>
            <CardContent className="space-y-3">
              {/* Relation */}
              <div className="grid grid-cols-3 items-center gap-1">
                <Skeleton className="h-3 w-16" />
                <Skeleton className="h-5 w-24 col-span-2" />
              </div>
              {/* Email */}
              <div className="grid grid-cols-3 items-center gap-1">
                <Skeleton className="h-3 w-12" />
                <Skeleton className="h-5 w-40 col-span-2" />
              </div>
              {/* Number */}
              <div className="grid grid-cols-3 items-center gap-1">
                <Skeleton className="h-3 w-14" />
                <Skeleton className="h-5 w-36 col-span-2" />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
