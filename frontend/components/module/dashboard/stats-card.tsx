"use client";

import { Card, CardContent } from "@/components/ui/card";
import {
  Users,
  MapPin,
  Compass,
  CalendarCheck,
  ArrowUpRight,
  ArrowDownRight,
  Minus,
} from "lucide-react";

interface StatCardProps {
  title: string;
  value: string;
  previousValue: string;
  change: number;
  icon: React.ElementType;
  period: string;
  breakdown?: { label: string; value: string }[];
}

const stats: StatCardProps[] = [
  {
    title: "Total Tourists",
    value: "12,847",
    previousValue: "11,421",
    change: 12.5,
    icon: Users,
    period: "May 2025",
    breakdown: [
      { label: "Domestic", value: "8,234" },
      { label: "International", value: "4,613" },
    ],
  },
  {
    title: "Active Guides",
    value: "248",
    previousValue: "238",
    change: 4.2,
    icon: Compass,
    period: "May 2025",
    breakdown: [
      { label: "Certified", value: "186" },
      { label: "Pending", value: "62" },
    ],
  },
  {
    title: "Destinations",
    value: "156",
    previousValue: "148",
    change: 5.4,
    icon: MapPin,
    period: "May 2025",
    breakdown: [
      { label: "Active", value: "142" },
      { label: "Seasonal", value: "14" },
    ],
  },
  {
    title: "Active Trips",
    value: "89",
    previousValue: "92",
    change: -3.3,
    icon: CalendarCheck,
    period: "May 2025",
    breakdown: [
      { label: "In progress", value: "34" },
      { label: "Scheduled", value: "55" },
    ],
  },
];

function formatChange(change: number): string {
  if (change === 0) return "0%";
  const sign = change > 0 ? "+" : "";
  return `${sign}${change.toFixed(1)}%`;
}

function TrendIndicator({ change }: { change: number }) {
  if (change > 0) {
    return (
      <span className="inline-flex items-center gap-0.5 text-xs font-medium text-emerald-400">
        <ArrowUpRight className="h-3 w-3" />
        {formatChange(change)}
      </span>
    );
  }
  if (change < 0) {
    return (
      <span className="inline-flex items-center gap-0.5 text-xs font-medium text-red-400">
        <ArrowDownRight className="h-3 w-3" />
        {formatChange(change)}
      </span>
    );
  }
  return (
    <span className="inline-flex items-center gap-0.5 text-xs font-medium text-muted-foreground">
      <Minus className="h-3 w-3" />
      {formatChange(change)}
    </span>
  );
}

function StatCard({ stat }: { stat: StatCardProps }) {
  const Icon = stat.icon;

  return (
    <Card className="relative overflow-hidden">
      <CardContent className="p-5">
        <div className="flex items-start justify-between">
          <div className="space-y-3">
            <p className="text-sm text-muted-foreground">{stat.title}</p>
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-semibold tracking-tight">
                {stat.value}
              </span>
              <TrendIndicator change={stat.change} />
            </div>
            <p className="text-xs text-muted-foreground">
              from {stat.previousValue} in {stat.period}
            </p>
          </div>
          <div className="rounded-xl bg-primary/10 p-2.5">
            <Icon className="h-5 w-5 text-primary" />
          </div>
        </div>

        {stat.breakdown && (
          <div className="mt-4 pt-4 border-t border-border/50">
            <div className="flex items-center justify-between gap-4">
              {stat.breakdown.map((item) => (
                <div key={item.label} className="flex-1">
                  <p className="text-xs text-muted-foreground">{item.label}</p>
                  <p className="text-sm font-medium mt-0.5">{item.value}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}

export function StatsCards() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat) => (
        <StatCard key={stat.title} stat={stat} />
      ))}
    </div>
  );
}
