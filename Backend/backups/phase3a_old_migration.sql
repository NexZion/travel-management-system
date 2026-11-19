-- AlterTable
ALTER TABLE "Trip" ADD COLUMN     "clonedFromTripId" TEXT;

-- CreateTable
CREATE TABLE "TripDay" (
    "id" TEXT NOT NULL,
    "tripId" TEXT NOT NULL,
    "dayNumber" INTEGER NOT NULL,
    "date" DATE NOT NULL,
    "title" TEXT,
    "notes" TEXT,
    "startPlaceId" TEXT,
    "endPlaceId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "TripDay_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TripPlace" (
    "id" TEXT NOT NULL,
    "tripId" TEXT NOT NULL,
    "destinationId" TEXT NOT NULL,
    "tripDestinationId" TEXT,
    "dayId" TEXT,
    "sortOrder" INTEGER NOT NULL DEFAULT 0,
    "notes" TEXT,
    "source" TEXT NOT NULL DEFAULT 'MANUAL',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "TripPlace_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "TripDay_tripId_idx" ON "TripDay"("tripId");

-- CreateIndex
CREATE UNIQUE INDEX "TripDay_tripId_dayNumber_key" ON "TripDay"("tripId", "dayNumber");

-- CreateIndex
CREATE UNIQUE INDEX "TripPlace_tripDestinationId_key" ON "TripPlace"("tripDestinationId");

-- CreateIndex
CREATE INDEX "TripPlace_tripId_idx" ON "TripPlace"("tripId");

-- CreateIndex
CREATE INDEX "TripPlace_destinationId_idx" ON "TripPlace"("destinationId");

-- CreateIndex
CREATE INDEX "TripPlace_dayId_sortOrder_idx" ON "TripPlace"("dayId", "sortOrder");

-- AddForeignKey
ALTER TABLE "Trip" ADD CONSTRAINT "Trip_clonedFromTripId_fkey" FOREIGN KEY ("clonedFromTripId") REFERENCES "Trip"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TripDay" ADD CONSTRAINT "TripDay_tripId_fkey" FOREIGN KEY ("tripId") REFERENCES "Trip"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TripDay" ADD CONSTRAINT "TripDay_startPlaceId_fkey" FOREIGN KEY ("startPlaceId") REFERENCES "Destination"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TripDay" ADD CONSTRAINT "TripDay_endPlaceId_fkey" FOREIGN KEY ("endPlaceId") REFERENCES "Destination"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TripPlace" ADD CONSTRAINT "TripPlace_tripId_fkey" FOREIGN KEY ("tripId") REFERENCES "Trip"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TripPlace" ADD CONSTRAINT "TripPlace_destinationId_fkey" FOREIGN KEY ("destinationId") REFERENCES "Destination"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TripPlace" ADD CONSTRAINT "TripPlace_dayId_fkey" FOREIGN KEY ("dayId") REFERENCES "TripDay"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TripPlace" ADD CONSTRAINT "TripPlace_tripDestinationId_fkey" FOREIGN KEY ("tripDestinationId") REFERENCES "TripDestination"("id") ON DELETE SET NULL ON UPDATE CASCADE;
