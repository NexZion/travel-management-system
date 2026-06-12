/*
  Warnings:

  - A unique constraint covering the columns `[placeId]` on the table `Destination` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Destination" ADD COLUMN     "address" TEXT,
ADD COLUMN     "placeId" TEXT,
ADD COLUMN     "rating" DOUBLE PRECISION,
ADD COLUMN     "reviewCount" INTEGER,
ADD COLUMN     "source" TEXT NOT NULL DEFAULT 'manual';

-- CreateTable
CREATE TABLE "DestinationImage" (
    "id" TEXT NOT NULL,
    "destinationId" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "width" INTEGER,
    "height" INTEGER,
    "isPrimary" BOOLEAN NOT NULL DEFAULT false,
    "source" TEXT NOT NULL DEFAULT 'google',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "DestinationImage_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DestinationTag" (
    "id" TEXT NOT NULL,
    "destinationId" TEXT NOT NULL,
    "tag" TEXT NOT NULL,
    "confidence" DOUBLE PRECISION NOT NULL DEFAULT 0.0,
    "source" TEXT NOT NULL DEFAULT 'ai',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "DestinationTag_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserDestinationInteraction" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "destinationId" TEXT NOT NULL,
    "action" TEXT NOT NULL,
    "weight" INTEGER NOT NULL DEFAULT 1,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "UserDestinationInteraction_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "DestinationImage_destinationId_idx" ON "DestinationImage"("destinationId");

-- CreateIndex
CREATE INDEX "DestinationTag_destinationId_idx" ON "DestinationTag"("destinationId");

-- CreateIndex
CREATE INDEX "DestinationTag_tag_idx" ON "DestinationTag"("tag");

-- CreateIndex
CREATE INDEX "UserDestinationInteraction_userId_idx" ON "UserDestinationInteraction"("userId");

-- CreateIndex
CREATE INDEX "UserDestinationInteraction_destinationId_idx" ON "UserDestinationInteraction"("destinationId");

-- CreateIndex
CREATE UNIQUE INDEX "Destination_placeId_key" ON "Destination"("placeId");

-- AddForeignKey
ALTER TABLE "DestinationImage" ADD CONSTRAINT "DestinationImage_destinationId_fkey" FOREIGN KEY ("destinationId") REFERENCES "Destination"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DestinationTag" ADD CONSTRAINT "DestinationTag_destinationId_fkey" FOREIGN KEY ("destinationId") REFERENCES "Destination"("id") ON DELETE CASCADE ON UPDATE CASCADE;
