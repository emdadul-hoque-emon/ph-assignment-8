import { catchAsync } from "../../../utils/catchAsync";
import { OtpService } from "./otp.service";

const sendOtp = catchAsync(async (req, res, next) => {
  res.status(200).json({
    message: "Otp sent successfully",
    statusCode: 200,
    success: true,
    data: await OtpService.sendOtp(req.body),
  });
});

export const OtpController = { sendOtp };
