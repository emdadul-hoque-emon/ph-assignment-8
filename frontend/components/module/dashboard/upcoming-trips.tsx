import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { CalendarDays, Users } from "lucide-react";

const trips = [
  {
    id: 1,
    name: "Bali Paradise Experience",
    guide: "Maria Garcia",
    guideAvatar: "/avatars/g1.png",
    date: "May 5, 2026",
    tourists: 12,
    status: "confirmed",
  },
  {
    id: 2,
    name: "Paris Romance Tour",
    guide: "Jean Dupont",
    guideAvatar: "/avatars/g2.png",
    date: "May 8, 2026",
    tourists: 8,
    status: "confirmed",
  },
  {
    id: 3,
    name: "Tokyo City Adventure",
    guide: "Yuki Tanaka",
    guideAvatar: "/avatars/g3.png",
    date: "May 10, 2026",
    tourists: 15,
    status: "pending",
  },
  {
    id: 4,
    name: "Amazon Jungle Trek",
    guide: "Carlos Silva",
    guideAvatar: "/avatars/g4.png",
    date: "May 12, 2026",
    tourists: 6,
    status: "confirmed",
  },
];

const statusStyles = {
  confirmed: "bg-emerald-500/10 text-emerald-600 border-emerald-200",
  pending: "bg-amber-500/10 text-amber-600 border-amber-200",
};

export function UpcomingTrips() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <CalendarDays className="h-5 w-5 text-primary" />
          Upcoming Trips
        </CardTitle>
        <CardDescription>Scheduled trips for the next 2 weeks</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {trips.map((trip) => (
          <div
            key={trip.id}
            className="flex items-center justify-between rounded-lg border p-3 transition-colors hover:bg-muted/50"
          >
            <div className="flex items-center gap-3">
              <Avatar className="h-10 w-10">
                <AvatarImage src={trip.guideAvatar} alt={trip.guide} />
                <AvatarFallback>
                  {trip.guide
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>
              <div>
                <p className="font-medium text-sm">{trip.name}</p>
                <p className="text-xs text-muted-foreground">
                  Guide: {trip.guide}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4 text-right">
              <div>
                <p className="text-sm">{trip.date}</p>
                <div className="flex items-center gap-1 text-xs text-muted-foreground justify-end">
                  <Users className="h-3 w-3" />
                  <span>{trip.tourists} tourists</span>
                </div>
              </div>
              <Badge
                variant="outline"
                className={
                  statusStyles[trip.status as keyof typeof statusStyles]
                }
              >
                {trip.status}
              </Badge>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
