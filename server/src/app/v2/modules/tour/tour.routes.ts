import express from "express";
import { TourController } from "./tour.controller";

const tourRoutes = express.Router();

tourRoutes.route("/").get(TourController.getAllTours);

tourRoutes.route("/:id").get(TourController.getSingleTour);

export default tourRoutes;
