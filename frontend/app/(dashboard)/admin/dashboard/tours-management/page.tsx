import TourManagementHeader from "@/components/module/tour/TourManagementHeader";
import ToursTable from "@/components/module/tour/TourTable";
import TablePagination from "@/components/shared/TablePagination";
import TableSkeleton from "@/components/shared/TableSkeleton";
import { ITour } from "@/interfaces/tour.interface";
import { queryStringFormatter } from "@/lib/formatters";
import { Suspense } from "react";
import TourFilter from "@/components/module/tour/TourFilter";
import { serverFetch } from "@/lib/server-fetch";

const page = async ({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) => {
  const searchParamsObj = await searchParams;
  const queryString = queryStringFormatter(searchParamsObj);
  const res = await serverFetch.get(`/v2/tours?${queryString}`);
  const data = await res.json();
  return (
    <div className="space-y-4 p-6">
      <TourManagementHeader />
      <TourFilter />
      <Suspense fallback={<TableSkeleton columns={10} rows={10} />}>
        <ToursTable tours={data?.data as ITour[]} />
        <TablePagination
          currentPage={data?.meta?.page || 1}
          totalPages={
            Math.ceil((data?.meta?.total || 1) / (data?.meta?.limit || 1)) || 0
          }
        />
      </Suspense>
    </div>
  );
};

export default page;
