import { Prisma } from "../../../../../prisma/generated/client";
import prisma from "../../../config/db";
import AppError from "../../../helpers/appError";
import { paginationHelper } from "../../../helpers/paginationHelper";

const getAllUserFromDB = async (options: any, filters: any) => {
  const { limit, skip, page, sortBy, sortOrder } =
    paginationHelper.calculatePagination(options);

  const { searchTerm, role, topGuides, ...filtersData } = filters;

  const andConditions: Prisma.UserWhereInput[] = [];
  if (searchTerm) {
    andConditions.push({
      OR: [
        {
          name: {
            contains: filters.searchTerm,
            mode: "insensitive",
          },
        },
        {
          email: {
            contains: filters.searchTerm,
            mode: "insensitive",
          },
        },
      ],
    });
  }

  if (topGuides) {
    andConditions.push({
      role: "GUIDE",
      guideProfile: {
        rating: {
          gte: 4.5,
        },
      },
    });
  }

  if (role) {
    andConditions.push({
      role: role.toUpperCase(),
    });
  }

  if (Object.keys(filtersData).length) {
    andConditions.push({
      AND: Object.keys(filtersData).map((key) => ({
        [key]: {
          equals: filtersData[key],
          mode: "insensitive",
        },
      })),
    });
  }

  const users = await prisma.user.findMany({
    where: {
      AND: andConditions,
    },
    include: {
      guideProfile: topGuides || role.toUpperCase() === "GUIDE" ? true : false,
    },
    take: limit,
    skip: skip,
    orderBy: {
      [sortBy]: sortOrder,
    },
  });

  const total = await prisma.user.count({
    where: {
      AND: andConditions,
    },
  });

  return {
    meta: {
      total,
      page,
      limit,
    },
    data: users,
  };
};

const getSingleUserFromDB = async (id: string) => {
  const result = await prisma.user.findUnique({
    where: {
      id,
    },
    include: {
      guideProfile: true,
    },
  });

  if (!result) {
    throw new AppError(404, "User not found");
  }
  return result;
};

export const UserService = {
  getAllUserFromDB,
  getSingleUserFromDB,
};
