import TourForm from "@/components/module/tour/TourForm";
import UpdateTour from "@/components/module/tour/UpdateTour";
import { IResponse } from "@/interfaces";
import { ITour } from "@/interfaces/tour.interface";
import { serverFetch } from "@/lib/server-fetch";
import React from "react";

const page = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;
  const res = await serverFetch.get(`/v2/tours/${slug}?isSlug=true`);
  const data: IResponse<ITour> = await res.json();
  return <UpdateTour tour={data.data} />;
};

export default page;
