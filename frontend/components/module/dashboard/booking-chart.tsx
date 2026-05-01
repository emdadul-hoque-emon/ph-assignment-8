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
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";

const chartData = [
  { category: "Adventure", bookings: 420, color: "var(--chart-1)" },
  { category: "Cultural", bookings: 380, color: "var(--chart-2)" },
  { category: "Beach", bookings: 340, color: "var(--chart-3)" },
  { category: "Wildlife", bookings: 280, color: "var(--chart-4)" },
  { category: "City", bookings: 220, color: "var(--chart-5)" },
  { category: "Mountain", bookings: 180, color: "var(--chart-1)" },
];

const chartConfig = {
  bookings: {
    label: "Bookings",
    color: "var(--chart-1)",
  },
} satisfies ChartConfig;

export function BookingsChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Bookings by Tour Type</CardTitle>
        <CardDescription>
          Distribution of bookings across tour categories
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="h-72 w-full">
          <BarChart
            data={chartData}
            layout="vertical"
            margin={{ top: 10, right: 10, left: 0, bottom: 0 }}
          >
            <CartesianGrid
              strokeDasharray="3 3"
              horizontal={true}
              vertical={false}
              className="stroke-muted"
            />
            <XAxis
              type="number"
              tickLine={false}
              axisLine={false}
              className="text-xs"
            />
            <YAxis
              type="category"
              dataKey="category"
              tickLine={false}
              axisLine={false}
              width={80}
              className="text-xs"
            />
            <ChartTooltip content={<ChartTooltipContent />} />
            <Bar
              dataKey="bookings"
              fill="var(--color-bookings)"
              radius={[0, 4, 4, 0]}
            />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
