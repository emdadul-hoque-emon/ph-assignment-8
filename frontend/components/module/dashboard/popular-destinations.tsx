import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { MapPin } from "lucide-react";

const destinations = [
  { name: "Bali, Indonesia", bookings: 847, maxBookings: 1000, growth: "+12%" },
  { name: "Paris, France", bookings: 723, maxBookings: 1000, growth: "+8%" },
  { name: "Tokyo, Japan", bookings: 612, maxBookings: 1000, growth: "+15%" },
  {
    name: "Santorini, Greece",
    bookings: 534,
    maxBookings: 1000,
    growth: "+22%",
  },
  { name: "New York, USA", bookings: 489, maxBookings: 1000, growth: "+5%" },
];

export function PopularDestinations() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <MapPin className="h-5 w-5 text-primary" />
          Popular Destinations
        </CardTitle>
        <CardDescription>
          Top performing destinations this month
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {destinations.map((destination) => (
          <div key={destination.name} className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">{destination.name}</span>
              <div className="flex items-center gap-2">
                <span className="text-sm text-muted-foreground">
                  {destination.bookings} bookings
                </span>
                <span className="text-xs font-medium text-emerald-500">
                  {destination.growth}
                </span>
              </div>
            </div>
            <Progress
              value={(destination.bookings / destination.maxBookings) * 100}
              className="h-2"
            />
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
