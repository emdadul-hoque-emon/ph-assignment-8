import express from "express";

import { UserController } from "./user.controller";

const userRoutes = express.Router();

userRoutes.route("/").get(UserController.getAllUsers);

userRoutes.route("/:id").get(UserController.getSingleUser);

export default userRoutes;
