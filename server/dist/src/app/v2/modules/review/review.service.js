"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReviewService = void 0;
const db_1 = __importDefault(require("../../../config/db"));
const paginationHelper_1 = require("../../../helpers/paginationHelper");
const appError_1 = __importDefault(require("../../../helpers/appError"));
const createReviewInDB = async (payload, reviewerId) => {
    const data = await db_1.default.review.create({
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
const getAllReviewsFromDB = async (options, filters) => {
    const { limit, skip, page, sortBy, sortOrder } = paginationHelper_1.paginationHelper.calculatePagination(options);
    const { searchTerm, tourId, guideId, rating, minRating, maxRating } = filters;
    const andConditions = [];
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
    }
    else if (minRating) {
        andConditions.push({
            rating: {
                gte: parseInt(minRating),
            },
        });
    }
    else if (maxRating) {
        andConditions.push({
            rating: {
                lte: parseInt(maxRating),
            },
        });
    }
    const whereConditions = andConditions.length > 0 ? { AND: andConditions } : {};
    const data = await db_1.default.review.findMany({
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
    const total = await db_1.default.review.count({ where: whereConditions });
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
const getSingleReviewFromDB = async (id) => {
    const data = await db_1.default.review.findUnique({
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
        throw new appError_1.default(404, "Review not found");
    }
    return data;
};
const updateReviewInDB = async (id, payload, reviewerId) => {
    const review = await db_1.default.review.findUnique({
        where: { id },
    });
    if (!review) {
        throw new appError_1.default(404, "Review not found");
    }
    if (review.reviewerId !== reviewerId) {
        throw new appError_1.default(403, "You can only update your own reviews");
    }
    const data = await db_1.default.review.update({
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
const deleteReviewFromDB = async (id, reviewerId) => {
    const review = await db_1.default.review.findUnique({
        where: { id },
    });
    if (!review) {
        throw new appError_1.default(404, "Review not found");
    }
    if (review.reviewerId !== reviewerId) {
        throw new appError_1.default(403, "You can only delete your own reviews");
    }
    const data = await db_1.default.review.delete({
        where: { id },
    });
    return data;
};
exports.ReviewService = {
    createReviewInDB,
    getAllReviewsFromDB,
    getSingleReviewFromDB,
    updateReviewInDB,
    deleteReviewFromDB,
};
