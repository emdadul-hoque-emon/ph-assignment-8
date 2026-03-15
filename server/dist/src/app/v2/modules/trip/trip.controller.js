"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TripController = void 0;
const pick_1 = require("../../../helpers/pick");
const catchAsync_1 = require("../../../utils/catchAsync");
const sendResponse_1 = require("../../../utils/sendResponse");
const trip_service_1 = require("./trip.service");
const paginationHelper_1 = require("../../../helpers/paginationHelper");
const getTripInclude = (0, catchAsync_1.catchAsync)(async (req, res, next) => {
    const filters = (0, pick_1.pick)(req.query, ["searchTerm", "category"]);
    (0, sendResponse_1.sendResponse)(res, {
        message: "Trip includes fetched successfully",
        statusCode: 200,
        success: true,
        data: await trip_service_1.TripService.getTripInclude(filters),
    });
});
const getAllTrips = (0, catchAsync_1.catchAsync)(async (req, res, next) => {
    const options = (0, pick_1.pick)(req.query, paginationHelper_1.paginationHelper.paginationFields);
    const filters = (0, pick_1.pick)(req.query, [
        "searchTerm",
        "status",
        "tourId",
        "guideId",
        "minPrice",
        "maxPrice",
    ]);
    const data = await trip_service_1.TripService.getAllTripsFromDB(options, filters);
    (0, sendResponse_1.sendResponse)(res, {
        message: "Trips fetched successfully",
        statusCode: 200,
        success: true,
        meta: data.meta,
        data: data.data,
    });
});
const getSingleTrip = (0, catchAsync_1.catchAsync)(async (req, res, next) => {
    (0, sendResponse_1.sendResponse)(res, {
        message: "Trip fetched successfully",
        statusCode: 200,
        success: true,
        data: await trip_service_1.TripService.getSingleTrip(req.params.id),
    });
});
const createTrip = (0, catchAsync_1.catchAsync)(async (req, res, next) => {
    const data = await trip_service_1.TripService.createTripInDB(req.body);
    (0, sendResponse_1.sendResponse)(res, {
        message: "Trip created successfully",
        statusCode: 201,
        success: true,
        data,
    });
});
exports.TripController = {
    getTripInclude,
    getAllTrips,
    getSingleTrip,
    createTrip,
};
