/*
  Warnings:

  - You are about to drop the column `device` on the `LoggedInDevice` table. All the data in the column will be lost.
  - Added the required column `deviceId` to the `LoggedInDevice` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "OTPType" AS ENUM ('TWO_FACTOR', 'PASSWORD_RESET', 'AUTH_VERIFICATION');

-- AlterTable
ALTER TABLE "LoggedInDevice" DROP COLUMN "device",
ADD COLUMN     "deviceId" TEXT NOT NULL,
ADD COLUMN     "isTrusted" BOOLEAN NOT NULL DEFAULT false,
ALTER COLUMN "ipAddress" DROP NOT NULL;

-- CreateTable
CREATE TABLE "OTP" (
    "id" TEXT NOT NULL,
    "type" "OTPType" NOT NULL,
    "userId" TEXT NOT NULL,
    "otp" TEXT NOT NULL,
    "expiresAt" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "OTP_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "OTP" ADD CONSTRAINT "OTP_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
