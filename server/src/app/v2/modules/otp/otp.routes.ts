import express from "express";
import { OtpController } from "./otp.controller";
import { validateRequest } from "../../../middlewares/validateRequest";
import { sendOtpSchema } from "./otp.validation";

const otpRoutes = express.Router();

otpRoutes.post(
  "/send-otp",
  validateRequest(sendOtpSchema),
  OtpController.sendOtp,
);

export default otpRoutes;
