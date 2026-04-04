"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import React from "react";

type Props = {
  children: React.ReactNode;
};

const sessions = [
  {
    id: "current",
    device: "Windows - Chrome",
    location: "Dhaka, Bangladesh",
    lastActive: "Active now",
    current: true,
  },
  {
    id: "mobile",
    device: "Android - Chrome",
    location: "Dhaka, Bangladesh",
    lastActive: "2 hours ago",
    current: false,
  },
  {
    id: "tablet",
    device: "iPad - Safari",
    location: "Chattogram, Bangladesh",
    lastActive: "Yesterday",
    current: false,
  },
];

const WhereAreYouLoggedInModal = ({ children }: Props) => {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Where You&apos;re Logged In</DialogTitle>
          <DialogDescription>
            Review devices with active access to your account. If something
            looks unfamiliar, sign out that session immediately.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-3 py-2">
          {sessions.map((session) => (
            <div
              key={session.id}
              className="flex items-start justify-between gap-3 rounded-lg border p-3"
            >
              <div>
                <p className="font-medium text-sm">{session.device}</p>
                <p className="text-muted-foreground text-sm">
                  {session.location} • {session.lastActive}
                </p>
              </div>

              {session.current ? (
                <Badge variant="secondary">Current device</Badge>
              ) : (
                <Button variant="outline" size="sm">
                  Sign out
                </Button>
              )}
            </div>
          ))}

          <div className="flex justify-end gap-2 pt-1">
            <DialogClose asChild>
              <Button variant="outline">Close</Button>
            </DialogClose>
            <Button variant="destructive">Sign Out All Other Devices</Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default WhereAreYouLoggedInModal;
