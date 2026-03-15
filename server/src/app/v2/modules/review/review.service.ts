import { Prisma } from "../../../../../prisma/generated/client";
import prisma from "../../../config/db";
import { paginationHelper } from "../../../helpers/paginationHelper";
import AppError from "../../../helpers/appError";
import { CreateReviewInput, UpdateReviewInput } from "./review.validation";

const createReviewInDB = async (
  payload: CreateReviewInput,
  reviewerId: string,
) => {
  const data = await prisma.review.create({
    data: {
      ...payload,
      reviewerId,
    },
    include: {
      reviewer: {
        select: {
          id: true,
          name: true,
          email: true,
          avatar: true,
        },
      },
      tour: {
        select: {
          id: true,
          title: true,
        },
      },
      guide: {
        select: {
          id: true,
          name: true,
          avatar: true,
        },
      },
    },
  });
  return data;
};

const getAllReviewsFromDB = async (options: any, filters: any) => {
  const { limit, skip, page, sortBy, sortOrder } =
    paginationHelper.calculatePagination(options);

  const { searchTerm, tourId, guideId, rating, minRating, maxRating } = filters;

  const andConditions: Prisma.ReviewWhereInput[] = [];

  if (searchTerm) {
    andConditions.push({
      OR: [
        {
          comment: {
            contains: searchTerm,
            mode: "insensitive",
          },
        },
        {
          reviewer: {
            name: {
              contains: searchTerm,
              mode: "insensitive",
            },
          },
        },
      ],
    });
  }

  if (tourId) {
    andConditions.push({
      tourId,
    });
  }

  if (guideId) {
    andConditions.push({
      guideId,
    });
  }

  if (rating) {
    andConditions.push({
      rating: parseInt(rating),
    });
  }

  if (minRating && maxRating) {
    andConditions.push({
      rating: {
        gte: parseInt(minRating),
        lte: parseInt(maxRating),
      },
    });
  } else if (minRating) {
    andConditions.push({
      rating: {
        gte: parseInt(minRating),
      },
    });
  } else if (maxRating) {
    andConditions.push({
      rating: {
        lte: parseInt(maxRating),
      },
    });
  }

  const whereConditions =
    andConditions.length > 0 ? { AND: andConditions } : {};

  const data = await prisma.review.findMany({
    where: whereConditions,
    include: {
      reviewer: {
        select: {
          id: true,
          name: true,
          email: true,
          avatar: true,
        },
      },
      tour: {
        select: {
          id: true,
          title: true,
        },
      },
      guide: {
        select: {
          id: true,
          name: true,
          avatar: true,
        },
      },
    },
    orderBy: {
      [sortBy]: sortOrder,
    },
    take: limit,
    skip,
  });

  const total = await prisma.review.count({ where: whereConditions });

  return {
    meta: {
      page,
      limit,
      total,
      totalPage: Math.ceil(total / limit),
    },
    data,
  };
};

const getSingleReviewFromDB = async (id: string) => {
  const data = await prisma.review.findUnique({
    where: { id },
    include: {
      reviewer: {
        select: {
          id: true,
          name: true,
          email: true,
          avatar: true,
        },
      },
      tour: {
        select: {
          id: true,
          title: true,
        },
      },
      guide: {
        select: {
          id: true,
          name: true,
          avatar: true,
        },
      },
    },
  });

  if (!data) {
    throw new AppError(404, "Review not found");
  }

  return data;
};

const updateReviewInDB = async (
  id: string,
  payload: UpdateReviewInput,
  reviewerId: string,
) => {
  const review = await prisma.review.findUnique({
    where: { id },
  });

  if (!review) {
    throw new AppError(404, "Review not found");
  }

  if (review.reviewerId !== reviewerId) {
    throw new AppError(403, "You can only update your own reviews");
  }

  const data = await prisma.review.update({
    where: { id },
    data: payload,
    include: {
      reviewer: {
        select: {
          id: true,
          name: true,
          email: true,
          avatar: true,
        },
      },
      tour: {
        select: {
          id: true,
          title: true,
        },
      },
      guide: {
        select: {
          id: true,
          name: true,
          avatar: true,
        },
      },
    },
  });

  return data;
};

const deleteReviewFromDB = async (id: string, reviewerId: string) => {
  const review = await prisma.review.findUnique({
    where: { id },
  });

  if (!review) {
    throw new AppError(404, "Review not found");
  }

  if (review.reviewerId !== reviewerId) {
    throw new AppError(403, "You can only delete your own reviews");
  }

  const data = await prisma.review.delete({
    where: { id },
  });

  return data;
};

export const ReviewService = {
  createReviewInDB,
  getAllReviewsFromDB,
  getSingleReviewFromDB,
  updateReviewInDB,
  deleteReviewFromDB,
};
