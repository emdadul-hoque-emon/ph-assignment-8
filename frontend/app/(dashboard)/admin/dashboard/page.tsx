import { Suspense } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { RevenueChart } from "@/components/module/dashboard/revenue-chart";
import { BookingsChart } from "@/components/module/dashboard/booking-chart";
import { QuickActions } from "@/components/module/dashboard/quick-actions";
import { RecentActivity } from "@/components/module/dashboard/recent-activity";
import { PopularDestinations } from "@/components/module/dashboard/popular-destinations";
import { UpcomingTrips } from "@/components/module/dashboard/upcoming-trips";
import { StatsCards } from "@/components/module/dashboard/stats-card";

export const metadata = {
  title: "Dashboard | Travel Admin",
  description:
    "Admin dashboard for managing tours, guides, tourists, and destinations",
};

function CardSkeleton() {
  return <Skeleton className="h-32 w-full rounded-xl" />;
}

function ChartSkeleton() {
  return <Skeleton className="h-80 w-full rounded-xl" />;
}

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* <DashboardHeader /> */}
      <main className="container mx-auto px-4 py-8 space-y-8">
        {/* Stats Overview */}
        <Suspense
          fallback={
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <CardSkeleton />
              <CardSkeleton />
              <CardSkeleton />
              <CardSkeleton />
            </div>
          }
        >
          <StatsCards />
        </Suspense>

        {/* Charts Section */}
        <div className="grid gap-6 lg:grid-cols-2">
          <Suspense fallback={<ChartSkeleton />}>
            <RevenueChart />
          </Suspense>
          <Suspense fallback={<ChartSkeleton />}>
            <BookingsChart />
          </Suspense>
        </div>

        {/* Quick Actions & Activity */}
        <div className="grid gap-6 lg:grid-cols-3">
          <div className="lg:col-span-1">
            <QuickActions />
          </div>
          <div className="lg:col-span-2">
            <RecentActivity />
          </div>
        </div>

        {/* Popular Destinations & Upcoming Trips */}
        <div className="grid gap-6 lg:grid-cols-2">
          <PopularDestinations />
          <UpcomingTrips />
        </div>
      </main>
    </div>
  );
}
