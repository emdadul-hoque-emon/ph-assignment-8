"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const review_controller_1 = require("./review.controller");
const validateRequest_1 = require("../../../middlewares/validateRequest");
const review_validation_1 = require("./review.validation");
const checkAuth_1 = require("../../../middlewares/checkAuth");
const reviewRoutes = express_1.default.Router();
reviewRoutes
    .route("/")
    .get(review_controller_1.ReviewController.getAllReviews)
    .post((0, checkAuth_1.checkAuth)("TRAVELER", "GUIDE", "ADMIN"), (0, validateRequest_1.validateRequest)(review_validation_1.createReviewSchema), review_controller_1.ReviewController.createReview);
reviewRoutes
    .route("/:id")
    .get(review_controller_1.ReviewController.getSingleReview)
    .put((0, checkAuth_1.checkAuth)("TRAVELER", "GUIDE", "ADMIN"), (0, validateRequest_1.validateRequest)(review_validation_1.updateReviewSchema), review_controller_1.ReviewController.updateReview)
    .delete((0, checkAuth_1.checkAuth)("TRAVELER", "GUIDE", "ADMIN"), review_controller_1.ReviewController.deleteReview);
exports.default = reviewRoutes;
