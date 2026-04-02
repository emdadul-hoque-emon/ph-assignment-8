import z from "zod";
import { OTPType } from "../../../../../prisma/generated/enums";

export const sendOtpSchema = z.discriminatedUnion("type", [
  z.object({
    type: z.literal(OTPType.PASSWORD_RESET),
    email: z.string(),
  }),

  z.object({
    type: z.literal(OTPType.TWO_FACTOR),
    userId: z.string(),
  }),

  z.object({
    type: z.literal(OTPType.AUTH_VERIFICATION),
    userId: z.string(),
  }),
]);

export type SendOtpSchema = z.infer<typeof sendOtpSchema>;
