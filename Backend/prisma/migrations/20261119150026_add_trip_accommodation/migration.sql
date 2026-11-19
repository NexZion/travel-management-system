-- CreateTable
CREATE TABLE "TripAccommodation" (
    "id" TEXT NOT NULL,
    "tripId" TEXT NOT NULL,
    "destinationId" TEXT,
    "name" TEXT NOT NULL,
    "address" TEXT,
    "latitude" DOUBLE PRECISION,
    "longitude" DOUBLE PRECISION,
    "checkInDate" DATE,
    "checkOutDate" DATE,
    "roomCount" INTEGER,
    "estimatedCost" DECIMAL(12,2),
    "currency" CHAR(3) NOT NULL DEFAULT 'LKR',
    "notes" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "TripAccommodation_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "TripAccommodation_tripId_idx" ON "TripAccommodation"("tripId");

-- CreateIndex
CREATE INDEX "TripAccommodation_destinationId_idx" ON "TripAccommodation"("destinationId");

-- AddForeignKey
ALTER TABLE "TripAccommodation" ADD CONSTRAINT "TripAccommodation_tripId_fkey" FOREIGN KEY ("tripId") REFERENCES "Trip"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TripAccommodation" ADD CONSTRAINT "TripAccommodation_destinationId_fkey" FOREIGN KEY ("destinationId") REFERENCES "Destination"("id") ON DELETE SET NULL ON UPDATE CASCADE;
