import { Skeleton } from "@/components/ui/skeleton";

function TwoFactorOptionSkeleton() {
  return (
    <div className="flex gap-3 items-center p-3">
      <div className="flex items-start h-full pt-1">
        <Skeleton className="size-6 rounded" />
      </div>
      <div className="flex-1 space-y-2">
        <Skeleton className="h-4 w-32" />
        <Skeleton className="h-3 w-56" />
      </div>
      <Skeleton className="size-5 rounded-full" />
    </div>
  );
}

export function TwoFactorSkeleton() {
  return (
    <div className="w-full max-w-lg space-y-4">
      {/* Dialog Header */}
      <div className="flex flex-col gap-2 text-left">
        <Skeleton className="h-6 w-56" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-3/4" />
      </div>

      {/* Heading */}
      <Skeleton className="h-5 w-64" />

      {/* Radio Options */}
      <div className="border rounded-md divide-y">
        <TwoFactorOptionSkeleton />
        <TwoFactorOptionSkeleton />
        <div className="opacity-50">
          <TwoFactorOptionSkeleton />
        </div>
      </div>

      {/* Button */}
      <Skeleton className="h-10 w-full rounded-md" />
    </div>
  );
}
