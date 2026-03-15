import { paginationHelper } from "../../../helpers/paginationHelper";
import { pick } from "../../../helpers/pick";
import { catchAsync } from "../../../utils/catchAsync";
import { sendResponse } from "../../../utils/sendResponse";
import { ReviewService } from "./review.service";

const createReview = catchAsync(async (req, res, next) => {
  const reviewerId = req.user?.userId;
  const data = await ReviewService.createReviewInDB(req.body, reviewerId);

  sendResponse(res, {
    message: "Review created successfully",
    statusCode: 201,
    success: true,
    data,
  });
});

const getAllReviews = catchAsync(async (req, res, next) => {
  const options = pick(req.query, paginationHelper.paginationFields);
  const filters = pick(req.query, [
    "searchTerm",
    "tourId",
    "guideId",
    "rating",
    "minRating",
    "maxRating",
  ]);

  const data = await ReviewService.getAllReviewsFromDB(
    options as Record<string, string>,
    filters as Record<string, string>,
  );

  sendResponse(res, {
    message: "Reviews fetched successfully",
    statusCode: 200,
    success: true,
    meta: data.meta,
    data: data.data,
  });
});

const getSingleReview = catchAsync(async (req, res, next) => {
  const data = await ReviewService.getSingleReviewFromDB(req.params.id);

  sendResponse(res, {
    message: "Review fetched successfully",
    statusCode: 200,
    success: true,
    data,
  });
});

const updateReview = catchAsync(async (req, res, next) => {
  const reviewerId = req.user?.userId;
  const data = await ReviewService.updateReviewInDB(
    req.params.id,
    req.body,
    reviewerId,
  );

  sendResponse(res, {
    message: "Review updated successfully",
    statusCode: 200,
    success: true,
    data,
  });
});

const deleteReview = catchAsync(async (req, res, next) => {
  const reviewerId = req.user?.userId;
  const data = await ReviewService.deleteReviewFromDB(
    req.params.id,
    reviewerId,
  );

  sendResponse(res, {
    message: "Review deleted successfully",
    statusCode: 200,
    success: true,
    data,
  });
});

export const ReviewController = {
  createReview,
  getAllReviews,
  getSingleReview,
  updateReview,
  deleteReview,
};
