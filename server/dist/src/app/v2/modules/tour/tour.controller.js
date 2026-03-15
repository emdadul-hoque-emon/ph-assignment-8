"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TourController = void 0;
const paginationHelper_1 = require("../../../helpers/paginationHelper");
const pick_1 = require("../../../helpers/pick");
const catchAsync_1 = require("../../../utils/catchAsync");
const sendResponse_1 = require("../../../utils/sendResponse");
const tour_service_1 = require("./tour.service");
const getAllTours = (0, catchAsync_1.catchAsync)(async (req, res, next) => {
    const options = (0, pick_1.pick)(req.query, paginationHelper_1.paginationHelper.paginationFields);
    const filters = (0, pick_1.pick)(req.query, [
        "searchTerm",
        "category",
        "country",
        "city",
        "minPrice",
        "maxPrice",
        "language",
    ]);
    const data = await tour_service_1.TourService.getAllTourFromDB(options, filters);
    (0, sendResponse_1.sendResponse)(res, {
        message: "Tours fetched successfully",
        statusCode: 200,
        success: true,
        meta: data.meta,
        data: data.data,
    });
});
const getSingleTour = (0, catchAsync_1.catchAsync)(async (req, res, next) => {
    (0, sendResponse_1.sendResponse)(res, {
        message: "Tour fetched successfully",
        statusCode: 200,
        success: true,
        data: await tour_service_1.TourService.getSingleTour(req.params.id),
    });
});
const createTour = (0, catchAsync_1.catchAsync)(async (req, res, next) => {
    const userId = req.user?.userId;
    const data = await tour_service_1.TourService.createTourInDB(req.body, userId);
    (0, sendResponse_1.sendResponse)(res, {
        message: "Tour created successfully",
        statusCode: 201,
        success: true,
        data,
    });
});
exports.TourController = { getAllTours, getSingleTour, createTour };
