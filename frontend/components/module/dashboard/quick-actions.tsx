import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Users,
  MapPin,
  Compass,
  CalendarPlus,
  UserPlus,
  Map,
} from "lucide-react";
import Link from "next/link";

const actions = [
  {
    label: "Add New Tour",
    href: "/tours-management/new",
    icon: CalendarPlus,
    variant: "default" as const,
  },
  {
    label: "Register Guide",
    href: "/guides-management/new",
    icon: UserPlus,
    variant: "secondary" as const,
  },
  {
    label: "Add Destination",
    href: "/destinations-management/new",
    icon: Map,
    variant: "secondary" as const,
  },
  {
    label: "View Tourists",
    href: "/tourists-management",
    icon: Users,
    variant: "outline" as const,
  },
  {
    label: "Manage Guides",
    href: "/guides-management",
    icon: Compass,
    variant: "outline" as const,
  },
  {
    label: "All Destinations",
    href: "/destinations-management",
    icon: MapPin,
    variant: "outline" as const,
  },
];

export function QuickActions() {
  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle>Quick Actions</CardTitle>
        <CardDescription>Common tasks and shortcuts</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-3">
        {actions.map((action) => {
          const Icon = action.icon;
          return (
            <Button
              key={action.label}
              variant={action.variant}
              className="w-full justify-start gap-2"
              asChild
            >
              <Link href={action.href}>
                <Icon className="h-4 w-4" />
                {action.label}
              </Link>
            </Button>
          );
        })}
      </CardContent>
    </Card>
  );
}
