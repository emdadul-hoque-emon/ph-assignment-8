import TouristFilter from "@/components/module/tourist/TouristFilter";
import TouristManagementHeader from "@/components/module/tourist/TouristManagementHeader";
import TouristsTable from "@/components/module/tourist/TouristTable";
import TablePagination from "@/components/shared/TablePagination";
import TableSkeleton from "@/components/shared/TableSkeleton";
import { IResponse } from "@/interfaces";
import { ITourist, IUser, UserRole } from "@/interfaces/user.interface";
import { queryStringFormatter } from "@/lib/formatters";
import { serverFetch } from "@/lib/server-fetch";
import { getTourists } from "@/services/tourist/tourist.service";
import { Suspense } from "react";

const page = async ({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) => {
  const searchParamsObj = await searchParams;
  const queryString = queryStringFormatter(searchParamsObj);
  const res = await serverFetch.get(
    `/v2/users?role=${UserRole.TOURIST}&${queryString}`,
  );
  const data: IResponse<IUser<ITourist>[]> = await res.json();

  return (
    <div className="space-y-4 p-6">
      <TouristManagementHeader />
      <TouristFilter />
      <Suspense fallback={<TableSkeleton columns={10} rows={10} />}>
        <TouristsTable tourists={data?.data || []} />
        <TablePagination
          currentPage={data?.meta?.page || 1}
          totalPages={
            Math.ceil((data?.meta?.total || 1) / (data?.meta?.limit || 1)) || 1
          }
        />
      </Suspense>
    </div>
  );
};

export default page;
