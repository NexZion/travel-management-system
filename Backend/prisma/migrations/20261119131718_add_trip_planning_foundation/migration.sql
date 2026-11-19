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
CREATE UNIQUE INDEX "TripDay_id_tripId_key" ON "TripDay"("id", "tripId"); 

-- CreateIndex
CREATE UNIQUE INDEX "TripDay_tripId_dayNumber_key" ON "TripDay"("tripId", "dayNumber");

-- CreateIndex
CREATE UNIQUE INDEX "TripPlace_tripDestinationId_tripId_destinationId_key" ON "TripPlace"("tripDestinationId", "tripId", "destinationId");

-- CreateIndex
CREATE UNIQUE INDEX "TripDestination_id_tripId_destinationId_key" ON "TripDestination"("id", "tripId", "destinationId");

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
ALTER TABLE "TripPlace" ADD CONSTRAINT "TripPlace_tripDestinationId_tripId_destinationId_fkey" FOREIGN KEY ("tripDestinationId", "tripId", "destinationId") REFERENCES "TripDestination"("id", "tripId", "destinationId") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TripPlace" ADD CONSTRAINT "TripPlace_dayId_tripId_fkey" FOREIGN KEY ("dayId", "tripId") REFERENCES "TripDay"("id", "tripId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TripPlace" ADD CONSTRAINT "TripPlace_destinationId_fkey" FOREIGN KEY ("destinationId") REFERENCES "Destination"("id") ON DELETE CASCADE ON UPDATE CASCADE;