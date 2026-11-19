/*
  Warnings:

  - You are about to drop the column `district` on the `Destination` table. All the data in the column will be lost.
  - You are about to drop the column `province` on the `Destination` table. All the data in the column will be lost.
  - Added the required column `districtId` to the `Destination` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Destination` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "Destination_district_idx";

-- DropIndex
DROP INDEX "Destination_province_idx";

-- AlterTable
ALTER TABLE "Destination" DROP COLUMN "district",
DROP COLUMN "province",
ADD COLUMN     "averageVisitDurationMinutes" INTEGER NOT NULL DEFAULT 60,
ADD COLUMN     "bestSeason" JSONB,
ADD COLUMN     "districtId" TEXT NOT NULL,
ADD COLUMN     "entryFee" DECIMAL(12,2),
ADD COLUMN     "openingHours" JSONB,
ADD COLUMN     "popularityScore" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "translations" JSONB,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- CreateTable
CREATE TABLE "TravelerProfile" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "bio" TEXT,
    "homeCity" TEXT,
    "phone" TEXT,
    "travelStyles" JSONB,
    "interests" JSONB,
    "languages" JSONB,
    "dietaryPreferences" JSONB,
    "emergencyContactName" TEXT,
    "emergencyContactPhone" TEXT,
    "onboardingCompletedAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "TravelerProfile_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "District" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "province" TEXT NOT NULL,
    "translations" JSONB,
    "centerLatitude" DOUBLE PRECISION,
    "centerLongitude" DOUBLE PRECISION,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "District_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "TravelerProfile_userId_key" ON "TravelerProfile"("userId");

-- CreateIndex
CREATE INDEX "TravelerProfile_homeCity_idx" ON "TravelerProfile"("homeCity");

-- CreateIndex
CREATE UNIQUE INDEX "District_slug_key" ON "District"("slug");

-- CreateIndex
CREATE INDEX "District_province_idx" ON "District"("province");

-- CreateIndex
CREATE INDEX "Destination_districtId_idx" ON "Destination"("districtId");

-- CreateIndex
CREATE INDEX "Destination_popularityScore_idx" ON "Destination"("popularityScore");

-- AddForeignKey
ALTER TABLE "Destination" ADD CONSTRAINT "Destination_districtId_fkey" FOREIGN KEY ("districtId") REFERENCES "District"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TravelerProfile" ADD CONSTRAINT "TravelerProfile_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
