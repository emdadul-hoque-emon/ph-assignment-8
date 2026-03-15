"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const tour_controller_1 = require("./tour.controller");
const validateRequest_1 = require("../../../middlewares/validateRequest");
const tour_validation_1 = require("./tour.validation");
const checkAuth_1 = require("../../../middlewares/checkAuth");
const tourRoutes = express_1.default.Router();
tourRoutes
    .route("/")
    .get(tour_controller_1.TourController.getAllTours)
    .post((0, checkAuth_1.checkAuth)("ADMIN", "GUIDE"), (0, validateRequest_1.validateRequest)(tour_validation_1.createTourSchema), tour_controller_1.TourController.createTour);
tourRoutes.route("/:id").get(tour_controller_1.TourController.getSingleTour);
// .put(validateRequest(createTourSchema), TourController.updateTour)
// .delete(TourController.deleteTour);
exports.default = tourRoutes;
