"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const destination_controller_1 = require("./destination.controller");
const validateRequest_1 = require("../../../middlewares/validateRequest");
const destination_validation_1 = require("./destination.validation");
const destinationRoutes = express_1.default.Router();
destinationRoutes
    .route("/")
    .get(destination_controller_1.DestinationController.getAllDestinations)
    .post((0, validateRequest_1.validateRequest)(destination_validation_1.createDestinationSchema), (req, res) => {
    // POST route for creating destinations
    res.status(501).json({ message: "Not yet implemented" });
});
destinationRoutes
    .route("/nearby")
    .get(destination_controller_1.DestinationController.getNearbyDestinations);
destinationRoutes.route("/:id").get(destination_controller_1.DestinationController.getSingleDestination);
// .put(validateRequest(createDestinationSchema), DestinationController.updateDestination)
// .delete(DestinationController.deleteDestination);
exports.default = destinationRoutes;
