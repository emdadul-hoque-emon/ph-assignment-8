import { Prisma } from "../../../../../prisma/generated/client";
import prisma from "../../../config/db";
import { paginationHelper } from "../../../helpers/paginationHelper";

const getAllTourFromDB = async (options: any, filters: any) => {
  const { limit, skip, page, sortBy, sortOrder } =
    paginationHelper.calculatePagination(options);

  const { searchTerm, category, country, city, ...filtersData } = filters;

  const andConditions: Prisma.TourWhereInput[] = [];
  if (searchTerm) {
    andConditions.push({
      OR: [
        {
          title: {
            contains: searchTerm,
            mode: "insensitive",
          },
        },
        {
          slug: {
            contains: searchTerm,
            mode: "insensitive",
          },
        },
      ],
    });
  }

  if (category) {
    andConditions.push({
      category: category.toUpperCase(),
    });
  }

  const whereConditions: Prisma.TourWhereInput =
    andConditions.length > 0 ? { AND: andConditions } : {};

  const result = await prisma.tour.findMany({
    where: whereConditions,

    include: {
      destination: {
        select: {
          city: true,
          country: true,
        },
      },
    },
    skip,
    take: limit,
    orderBy: {
      [sortBy]: sortOrder,
    },
  });

  const total = await prisma.tour.count({
    where: whereConditions,
  });

  return {
    meta: {
      total,
      page,
      limit,
    },
    data: result,
  };
};

const getSingleTour = async (id: string) => {
  const result = await prisma.tour.findUnique({
    where: {
      id,
    },
  });
  return result;
};

export const TourService = {
  getAllTourFromDB,
  getSingleTour,
};
