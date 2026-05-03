import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="flex-1 w-full h-[calc(100vh-81px)]  flex justify-center items-center">
      <Card className="w-full max-w-md p-6 text-center">
        <CardHeader>
          <CardTitle>Update Tour</CardTitle>
          <CardDescription className="text-gray-600">
            To update a tour, please go to tours list and click on the edit icon
            of the tour you want to update.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Link
            href="/admin/dashboard/tours-management"
            className="text-primary hover:underline"
          >
            Go to tours list
          </Link>
        </CardContent>
      </Card>
    </div>
  );
};

export default page;
