/*
  Warnings:

  - You are about to drop the column `endDate` on the `Tour` table. All the data in the column will be lost.
  - You are about to drop the column `isAiGenerated` on the `Tour` table. All the data in the column will be lost.
  - You are about to drop the column `price` on the `Tour` table. All the data in the column will be lost.
  - You are about to drop the column `startDate` on the `Tour` table. All the data in the column will be lost.
  - You are about to drop the column `visibility` on the `Tour` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[slug]` on the table `Tour` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `priceFrom` to the `Tour` table without a default value. This is not possible if the table is not empty.
  - Added the required column `slug` to the `Tour` table without a default value. This is not possible if the table is not empty.
  - Made the column `description` on table `Tour` required. This step will fail if there are existing NULL values in that column.
  - Added the required column `difficulty` to the `Tour` table without a default value. This is not possible if the table is not empty.
  - Made the column `category` on table `Tour` required. This step will fail if there are existing NULL values in that column.
  - Made the column `rating` on table `Tour` required. This step will fail if there are existing NULL values in that column.

*/
-- CreateEnum
CREATE TYPE "TourDifficulty" AS ENUM ('EASY', 'MODERATE', 'HARD');

-- AlterTable
ALTER TABLE "Tour" DROP COLUMN "endDate",
DROP COLUMN "isAiGenerated",
DROP COLUMN "price",
DROP COLUMN "startDate",
DROP COLUMN "visibility",
ADD COLUMN     "featured" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "isPublished" BOOLEAN NOT NULL DEFAULT true,
ADD COLUMN     "priceFrom" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "slug" TEXT NOT NULL,
ALTER COLUMN "description" SET NOT NULL,
DROP COLUMN "difficulty",
ADD COLUMN     "difficulty" "TourDifficulty" NOT NULL,
ALTER COLUMN "category" SET NOT NULL,
ALTER COLUMN "rating" SET NOT NULL,
ALTER COLUMN "rating" SET DEFAULT 0;

-- DropEnum
DROP TYPE "Difficulty";

-- CreateTable
CREATE TABLE "TourItinerary" (
    "id" TEXT NOT NULL,
    "tourId" TEXT NOT NULL,
    "dayNumber" INTEGER NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "location" TEXT,
    "duration" TEXT,
    "icon" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "TourItinerary_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "TourItinerary_tourId_dayNumber_key" ON "TourItinerary"("tourId", "dayNumber");

-- CreateIndex
CREATE UNIQUE INDEX "Tour_slug_key" ON "Tour"("slug");

-- AddForeignKey
ALTER TABLE "TourItinerary" ADD CONSTRAINT "TourItinerary_tourId_fkey" FOREIGN KEY ("tourId") REFERENCES "Tour"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
