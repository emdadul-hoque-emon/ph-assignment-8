import bcrypt from "bcryptjs";
import prisma from "../../../config/db";
import { SendOtpSchema } from "./otp.validation";
import { generateOtp } from "../../../helpers/generate-otp";

const sendOtp = async (payload: SendOtpSchema) => {
  const otp = generateOtp(6);

  let userId: string;
  let email: string | undefined;

  if (payload.type === "PASSWORD_RESET") {
    email = payload.email;

    const user = await prisma.user.findUnique({
      where: { email },
      select: { id: true },
    });

    if (!user) {
      throw new Error("User not found");
    }

    userId = user.id;
  } else {
    userId = payload.userId;
  }

  const hashedOtp = await bcrypt.hash(otp, 10);
  console.log({ otp });

  const otpDoc = await prisma.oTP.upsert({
    where: {
      id: userId,
      type: payload.type,
    },
    create: {
      userId,
      otp: hashedOtp,
      type: payload.type,
      expiresAt: new Date(Date.now() + 10 * 60 * 1000),
    },
    update: {
      otp: hashedOtp,
      expiresAt: new Date(Date.now() + 10 * 60 * 1000),
    },
  });

  return otpDoc;
};
export const OtpService = { sendOtp };
