import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";

const activities = [
  {
    id: 1,
    user: "John Smith",
    avatar: "/avatars/01.png",
    action: "booked a tour",
    target: "Bali Paradise Experience",
    time: "2 minutes ago",
    type: "booking",
  },
  {
    id: 2,
    user: "Sarah Johnson",
    avatar: "/avatars/02.png",
    action: "completed registration as",
    target: "Tour Guide",
    time: "15 minutes ago",
    type: "registration",
  },
  {
    id: 3,
    user: "Admin",
    avatar: "/avatars/03.png",
    action: "added new destination",
    target: "Santorini, Greece",
    time: "1 hour ago",
    type: "destination",
  },
  {
    id: 4,
    user: "Mike Williams",
    avatar: "/avatars/04.png",
    action: "cancelled booking for",
    target: "Tokyo City Tour",
    time: "2 hours ago",
    type: "cancellation",
  },
  {
    id: 5,
    user: "Emily Davis",
    avatar: "/avatars/05.png",
    action: "left a review for",
    target: "Paris Romance Tour",
    time: "3 hours ago",
    type: "review",
  },
  {
    id: 6,
    user: "Carlos Rodriguez",
    avatar: "/avatars/06.png",
    action: "updated trip details for",
    target: "Amazon Adventure",
    time: "4 hours ago",
    type: "update",
  },
  {
    id: 7,
    user: "Lisa Chen",
    avatar: "/avatars/07.png",
    action: "booked a tour",
    target: "Northern Lights Expedition",
    time: "5 hours ago",
    type: "booking",
  },
];

const badgeVariants: Record<
  string,
  "default" | "secondary" | "destructive" | "outline"
> = {
  booking: "default",
  registration: "secondary",
  destination: "secondary",
  cancellation: "destructive",
  review: "outline",
  update: "outline",
};

export function RecentActivity() {
  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle>Recent Activity</CardTitle>
        <CardDescription>Latest actions across the platform</CardDescription>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-85 pr-4">
          <div className="space-y-4">
            {activities.map((activity) => (
              <div
                key={activity.id}
                className="flex items-start gap-4 rounded-lg border p-3 transition-colors hover:bg-muted/50"
              >
                <Avatar className="h-9 w-9">
                  <AvatarImage src={activity.avatar} alt={activity.user} />
                  <AvatarFallback>
                    {activity.user
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1 space-y-1">
                  <div className="flex items-center justify-between">
                    <p className="text-sm">
                      <span className="font-medium">{activity.user}</span>{" "}
                      <span className="text-muted-foreground">
                        {activity.action}
                      </span>{" "}
                      <span className="font-medium">{activity.target}</span>
                    </p>
                    <Badge
                      variant={badgeVariants[activity.type]}
                      className="text-xs"
                    >
                      {activity.type}
                    </Badge>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    {activity.time}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  );
}
