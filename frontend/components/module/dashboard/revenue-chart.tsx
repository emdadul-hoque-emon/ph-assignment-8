"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart";
import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from "recharts";

const chartData = [
  { month: "Jan", revenue: 45000, bookings: 320 },
  { month: "Feb", revenue: 52000, bookings: 380 },
  { month: "Mar", revenue: 61000, bookings: 420 },
  { month: "Apr", revenue: 58000, bookings: 400 },
  { month: "May", revenue: 72000, bookings: 510 },
  { month: "Jun", revenue: 85000, bookings: 600 },
  { month: "Jul", revenue: 92000, bookings: 680 },
  { month: "Aug", revenue: 88000, bookings: 650 },
  { month: "Sep", revenue: 76000, bookings: 540 },
  { month: "Oct", revenue: 68000, bookings: 480 },
  { month: "Nov", revenue: 54000, bookings: 390 },
  { month: "Dec", revenue: 48000, bookings: 340 },
];

const chartConfig = {
  revenue: {
    label: "Revenue",
    color: "var(--chart-1)",
  },
  bookings: {
    label: "Bookings",
    color: "var(--chart-2)",
  },
} satisfies ChartConfig;

export function RevenueChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Revenue Overview</CardTitle>
        <CardDescription>
          Monthly revenue performance for the year
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="h-72 w-full">
          <AreaChart
            data={chartData}
            margin={{ top: 10, right: 10, left: 0, bottom: 0 }}
          >
            <defs>
              <linearGradient id="fillRevenue" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-revenue)"
                  stopOpacity={0.3}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-revenue)"
                  stopOpacity={0}
                />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              className="text-xs"
            />
            <YAxis
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => `$${value / 1000}k`}
              className="text-xs"
            />
            <ChartTooltip
              content={
                <ChartTooltipContent
                  formatter={(value) => `$${Number(value).toLocaleString()}`}
                />
              }
            />
            <Area
              type="monotone"
              dataKey="revenue"
              stroke="var(--color-revenue)"
              strokeWidth={2}
              fill="url(#fillRevenue)"
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
