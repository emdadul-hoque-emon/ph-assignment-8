"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReviewController = void 0;
const paginationHelper_1 = require("../../../helpers/paginationHelper");
const pick_1 = require("../../../helpers/pick");
const catchAsync_1 = require("../../../utils/catchAsync");
const sendResponse_1 = require("../../../utils/sendResponse");
const review_service_1 = require("./review.service");
const createReview = (0, catchAsync_1.catchAsync)(async (req, res, next) => {
    const reviewerId = req.user?.userId;
    const data = await review_service_1.ReviewService.createReviewInDB(req.body, reviewerId);
    (0, sendResponse_1.sendResponse)(res, {
        message: "Review created successfully",
        statusCode: 201,
        success: true,
        data,
    });
});
const getAllReviews = (0, catchAsync_1.catchAsync)(async (req, res, next) => {
    const options = (0, pick_1.pick)(req.query, paginationHelper_1.paginationHelper.paginationFields);
    const filters = (0, pick_1.pick)(req.query, [
        "searchTerm",
        "tourId",
        "guideId",
        "rating",
        "minRating",
        "maxRating",
    ]);
    const data = await review_service_1.ReviewService.getAllReviewsFromDB(options, filters);
    (0, sendResponse_1.sendResponse)(res, {
        message: "Reviews fetched successfully",
        statusCode: 200,
        success: true,
        meta: data.meta,
        data: data.data,
    });
});
const getSingleReview = (0, catchAsync_1.catchAsync)(async (req, res, next) => {
    const data = await review_service_1.ReviewService.getSingleReviewFromDB(req.params.id);
    (0, sendResponse_1.sendResponse)(res, {
        message: "Review fetched successfully",
        statusCode: 200,
        success: true,
        data,
    });
});
const updateReview = (0, catchAsync_1.catchAsync)(async (req, res, next) => {
    const reviewerId = req.user?.userId;
    const data = await review_service_1.ReviewService.updateReviewInDB(req.params.id, req.body, reviewerId);
    (0, sendResponse_1.sendResponse)(res, {
        message: "Review updated successfully",
        statusCode: 200,
        success: true,
        data,
    });
});
const deleteReview = (0, catchAsync_1.catchAsync)(async (req, res, next) => {
    const reviewerId = req.user?.userId;
    const data = await review_service_1.ReviewService.deleteReviewFromDB(req.params.id, reviewerId);
    (0, sendResponse_1.sendResponse)(res, {
        message: "Review deleted successfully",
        statusCode: 200,
        success: true,
        data,
    });
});
exports.ReviewController = {
    createReview,
    getAllReviews,
    getSingleReview,
    updateReview,
    deleteReview,
};
