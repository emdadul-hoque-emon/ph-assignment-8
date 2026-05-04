"use client";
import { DateCell } from "@/components/shared/cell/DateCell";
import { StatusBadgeCell } from "@/components/shared/cell/StatusBadgeCell";
import { IColumn } from "@/components/shared/ManagementTable";
import { ITour } from "@/interfaces/tour.interface";
import { Star } from "lucide-react";
import { TourInfoCell } from "./TourInfoCell";

export const toursColumns: IColumn<ITour>[] = [
  {
    header: "Tours",
    accessor: (tour) => <TourInfoCell name={tour.title} photo={tour.image} />,
  },
  {
    header: "Location",
    accessor: (tour) => (
      <div className="flex flex-col">
        <span className="text-sm">{tour?.city}</span>
        {tour.destination && (
          <span className="text-sm text-gray-500">
            {tour.destination.city}, {tour.destination.country}
          </span>
        )}
      </div>
    ),
  },
  {
    header: "Price",
    accessor: (tour) => (
      <span className="text-sm font-semibold text-green-500">
        ${tour?.priceFrom}
      </span>
    ),
  },
  {
    header: "Rating",
    accessor: (tour) => (
      <div className="flex items-center gap-1">
        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
        <span className="text-sm font-medium">
          {(tour?.averageRating || 0)!.toFixed(1)}
        </span>
      </div>
    ),
  },
  {
    header: "Total Trips",
    accessor: (tour) => (
      <div className="w-fullflex items-center gap-1 text-center">
        <span className="text-sm font-medium">{tour?.totalTrips || 0}</span>
      </div>
    ),
  },
  {
    header: "Category",
    accessor: (tour) => (
      <span className="text-sm capitalize">
        {(tour?.category || "").toLowerCase()}
      </span>
    ),
  },
  {
    header: "Status",
    accessor: (tour) => (
      <StatusBadgeCell
        isDeleted={!tour.isPublished}
        deletedText="In-active"
        activeText="Active"
      />
    ),
  },
  {
    header: "Started",
    accessor: (tour) => <DateCell date={tour.createdAt} />,
  },
];
