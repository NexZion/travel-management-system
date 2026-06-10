/*
  Warnings:

  - You are about to drop the column `category` on the `Destination` table. All the data in the column will be lost.
  - You are about to drop the column `travelStyle` on the `Trip` table. All the data in the column will be lost.
  - You are about to drop the column `vibe` on the `Trip` table. All the data in the column will be lost.
  - Added the required column `travelStyleId` to the `Trip` table without a default value. This is not possible if the table is not empty.
  - Added the required column `vibeId` to the `Trip` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "Destination_category_idx";

-- AlterTable
ALTER TABLE "Destination" DROP COLUMN "category";

-- AlterTable
ALTER TABLE "Trip" DROP COLUMN "travelStyle",
DROP COLUMN "vibe",
ADD COLUMN     "travelStyleId" TEXT NOT NULL,
ADD COLUMN     "vibeId" TEXT NOT NULL;

-- DropEnum
DROP TYPE "DestinationCategory";

-- DropEnum
DROP TYPE "TravelStyle";

-- DropEnum
DROP TYPE "Vibe";

-- CreateTable
CREATE TABLE "TravelStyle" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "TravelStyle_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Vibe" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Vibe_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DestinationCategory" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "DestinationCategory_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DestinationCategoryMapping" (
    "id" TEXT NOT NULL,
    "destinationId" TEXT NOT NULL,
    "categoryId" TEXT NOT NULL,

    CONSTRAINT "DestinationCategoryMapping_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "TravelStyle_name_key" ON "TravelStyle"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Vibe_name_key" ON "Vibe"("name");

-- CreateIndex
CREATE UNIQUE INDEX "DestinationCategory_name_key" ON "DestinationCategory"("name");

-- CreateIndex
CREATE INDEX "DestinationCategoryMapping_destinationId_idx" ON "DestinationCategoryMapping"("destinationId");

-- CreateIndex
CREATE INDEX "DestinationCategoryMapping_categoryId_idx" ON "DestinationCategoryMapping"("categoryId");

-- CreateIndex
CREATE UNIQUE INDEX "DestinationCategoryMapping_destinationId_categoryId_key" ON "DestinationCategoryMapping"("destinationId", "categoryId");

-- CreateIndex
CREATE INDEX "Trip_travelStyleId_idx" ON "Trip"("travelStyleId");

-- CreateIndex
CREATE INDEX "Trip_vibeId_idx" ON "Trip"("vibeId");

-- AddForeignKey
ALTER TABLE "Trip" ADD CONSTRAINT "Trip_vibeId_fkey" FOREIGN KEY ("vibeId") REFERENCES "Vibe"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Trip" ADD CONSTRAINT "Trip_travelStyleId_fkey" FOREIGN KEY ("travelStyleId") REFERENCES "TravelStyle"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DestinationCategoryMapping" ADD CONSTRAINT "DestinationCategoryMapping_destinationId_fkey" FOREIGN KEY ("destinationId") REFERENCES "Destination"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DestinationCategoryMapping" ADD CONSTRAINT "DestinationCategoryMapping_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "DestinationCategory"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
