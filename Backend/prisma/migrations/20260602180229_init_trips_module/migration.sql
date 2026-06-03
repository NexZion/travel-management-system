/*
  Warnings:

  - You are about to drop the column `price` on the `Trip` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[shareToken]` on the table `Trip` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `budgetRange` to the `Trip` table without a default value. This is not possible if the table is not empty.
  - Added the required column `travelStyle` to the `Trip` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Trip` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `Trip` table without a default value. This is not possible if the table is not empty.
  - Added the required column `vibe` to the `Trip` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "TripStatus" AS ENUM ('DRAFT', 'PLANNED', 'ACTIVE', 'COMPLETED', 'CANCELLED');

-- CreateEnum
CREATE TYPE "TravelStyle" AS ENUM ('SOLO', 'COUPLE', 'GROUP', 'FAMILY');

-- CreateEnum
CREATE TYPE "Vibe" AS ENUM ('ADVENTURE', 'RELAX', 'LUXURY', 'NATURE', 'CULTURAL');

-- CreateEnum
CREATE TYPE "BudgetRange" AS ENUM ('BUDGET', 'MID', 'PREMIUM', 'LUXURY');

-- CreateEnum
CREATE TYPE "DestinationCategory" AS ENUM ('BEACH', 'HILL', 'CULTURAL', 'ADVENTURE', 'WILDLIFE');

-- AlterTable
ALTER TABLE "Trip" DROP COLUMN "price",
ADD COLUMN     "budgetRange" "BudgetRange" NOT NULL,
ADD COLUMN     "endDate" TIMESTAMP(3),
ADD COLUMN     "isPublic" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "shareToken" TEXT,
ADD COLUMN     "startDate" TIMESTAMP(3),
ADD COLUMN     "status" "TripStatus" NOT NULL DEFAULT 'DRAFT',
ADD COLUMN     "totalDays" INTEGER,
ADD COLUMN     "travelStyle" "TravelStyle" NOT NULL,
ADD COLUMN     "travelerCount" INTEGER NOT NULL DEFAULT 1,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "userId" TEXT NOT NULL,
ADD COLUMN     "vibe" "Vibe" NOT NULL,
ALTER COLUMN "description" DROP NOT NULL;

-- CreateTable
CREATE TABLE "Destination" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "district" TEXT NOT NULL,
    "province" TEXT NOT NULL,
    "category" "DestinationCategory" NOT NULL,
    "description" TEXT,
    "coverImage" TEXT,
    "latitude" DOUBLE PRECISION NOT NULL,
    "longitude" DOUBLE PRECISION NOT NULL,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Destination_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TripDestination" (
    "id" TEXT NOT NULL,
    "tripId" TEXT NOT NULL,
    "destinationId" TEXT NOT NULL,
    "visitOrder" INTEGER NOT NULL,
    "arrivalDate" TIMESTAMP(3),
    "departureDate" TIMESTAMP(3),
    "nights" INTEGER,
    "notes" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "TripDestination_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Destination_slug_key" ON "Destination"("slug");

-- CreateIndex
CREATE INDEX "Destination_district_idx" ON "Destination"("district");

-- CreateIndex
CREATE INDEX "Destination_province_idx" ON "Destination"("province");

-- CreateIndex
CREATE INDEX "Destination_category_idx" ON "Destination"("category");

-- CreateIndex
CREATE INDEX "TripDestination_tripId_idx" ON "TripDestination"("tripId");

-- CreateIndex
CREATE INDEX "TripDestination_destinationId_idx" ON "TripDestination"("destinationId");

-- CreateIndex
CREATE UNIQUE INDEX "Trip_shareToken_key" ON "Trip"("shareToken");

-- CreateIndex
CREATE INDEX "Trip_userId_idx" ON "Trip"("userId");

-- AddForeignKey
ALTER TABLE "Trip" ADD CONSTRAINT "Trip_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TripDestination" ADD CONSTRAINT "TripDestination_tripId_fkey" FOREIGN KEY ("tripId") REFERENCES "Trip"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TripDestination" ADD CONSTRAINT "TripDestination_destinationId_fkey" FOREIGN KEY ("destinationId") REFERENCES "Destination"("id") ON DELETE CASCADE ON UPDATE CASCADE;
