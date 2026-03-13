-- CreateEnum
CREATE TYPE "TripStatus" AS ENUM ('SCHEDULED', 'FULL', 'CANCELLED', 'COMPLETED');

-- CreateTable
CREATE TABLE "TripInclude" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "category" TEXT NOT NULL,
    "icon" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "TripInclude_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TripIncludeItem" (
    "id" TEXT NOT NULL,
    "tripId" TEXT NOT NULL,
    "tripIncludeId" TEXT NOT NULL,

    CONSTRAINT "TripIncludeItem_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Trip" (
    "id" TEXT NOT NULL,
    "tourId" TEXT NOT NULL,
    "guideId" TEXT,
    "startDate" TIMESTAMP(3) NOT NULL,
    "endDate" TIMESTAMP(3) NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "maxGuests" INTEGER NOT NULL,
    "bookedSeats" INTEGER NOT NULL DEFAULT 0,
    "status" "TripStatus" NOT NULL DEFAULT 'SCHEDULED',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Trip_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "TripIncludeItem_tripId_tripIncludeId_key" ON "TripIncludeItem"("tripId", "tripIncludeId");

-- AddForeignKey
ALTER TABLE "TripIncludeItem" ADD CONSTRAINT "TripIncludeItem_tripId_fkey" FOREIGN KEY ("tripId") REFERENCES "Trip"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TripIncludeItem" ADD CONSTRAINT "TripIncludeItem_tripIncludeId_fkey" FOREIGN KEY ("tripIncludeId") REFERENCES "TripInclude"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Trip" ADD CONSTRAINT "Trip_tourId_fkey" FOREIGN KEY ("tourId") REFERENCES "Tour"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Trip" ADD CONSTRAINT "Trip_guideId_fkey" FOREIGN KEY ("guideId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
