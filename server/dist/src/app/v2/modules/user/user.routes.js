"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_controller_1 = require("./user.controller");
const validateRequest_1 = require("../../../middlewares/validateRequest");
const user_validation_1 = require("./user.validation");
const userRoutes = express_1.default.Router();
userRoutes
    .route("/")
    .get(user_controller_1.UserController.getAllUsers)
    .post((0, validateRequest_1.validateRequest)(user_validation_1.createUserSchema), user_controller_1.UserController.createUser);
userRoutes.route("/:id").get(user_controller_1.UserController.getSingleUser);
// .put(checkAuth("ADMIN", "TRAVELER", "GUIDE"), validateRequest(createUserSchema), UserController.updateUser)
// .delete(checkAuth("ADMIN"), UserController.deleteUser);
exports.default = userRoutes;
