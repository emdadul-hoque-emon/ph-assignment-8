import express from "express";
import { ReviewController } from "./review.controller";
import { validateRequest } from "../../../middlewares/validateRequest";
import { createReviewSchema, updateReviewSchema } from "./review.validation";
import { checkAuth } from "../../../middlewares/checkAuth";

const reviewRoutes = express.Router();

reviewRoutes
  .route("/")
  .get(ReviewController.getAllReviews)
  .post(
    checkAuth("TRAVELER", "GUIDE", "ADMIN"),
    validateRequest(createReviewSchema),
    ReviewController.createReview,
  );

reviewRoutes
  .route("/:id")
  .get(ReviewController.getSingleReview)
  .put(
    checkAuth("TRAVELER", "GUIDE", "ADMIN"),
    validateRequest(updateReviewSchema),
    ReviewController.updateReview,
  )
  .delete(
    checkAuth("TRAVELER", "GUIDE", "ADMIN"),
    ReviewController.deleteReview,
  );

export default reviewRoutes;
