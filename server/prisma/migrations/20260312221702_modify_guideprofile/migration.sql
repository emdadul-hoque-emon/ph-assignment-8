/*
  Warnings:

  - Added the required column `aboutMe` to the `GuideProfile` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `GuideProfile` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "GuideProfile" ADD COLUMN     "aboutMe" TEXT NOT NULL,
ADD COLUMN     "isTopRated" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "specialties" TEXT[],
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;
