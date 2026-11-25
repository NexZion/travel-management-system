-- Xplore Phase 3 Core Trip Planning migration SQL (reviewed cleanup)
-- Duplicate column rename and duplicate constraint statements removed.
-- Do not apply manually; Prisma schema/migration must be reconciled first.

-- AlterEnum
-- This migration adds more than one value to an enum.
-- With PostgreSQL versions 11 and earlier, this is not possible
-- in a single migration. This can be worked around by creating
-- multiple migrations, each migration adding only one value to
-- the enum.


ALTER TYPE "TripStatus" ADD VALUE 'PUBLISHED';
ALTER TYPE "TripStatus" ADD VALUE 'ONGOING';

-- AlterTable
ALTER TABLE "Trip" ADD COLUMN     "budgetTotal" DECIMAL(12,2),
ADD COLUMN     "coverImage" VARCHAR(255),
ADD COLUMN     "currency" CHAR(3) NOT NULL DEFAULT 'LKR',
ADD COLUMN     "deletedAt" TIMESTAMP(3),
ADD COLUMN     "notes" TEXT,
ADD COLUMN     "tripType" VARCHAR(20) NOT NULL DEFAULT 'SOLO';

-- Add slug as nullable first
ALTER TABLE "Trip"
ADD COLUMN "slug" VARCHAR(190);

-- Generate safe unique legacy slugs for existing records
UPDATE "Trip"
SET "slug" = 'legacy-' || REPLACE("id", '-', '')
WHERE "slug" IS NULL;

-- Make slug required after backfill
ALTER TABLE "Trip"
ALTER COLUMN "slug" SET NOT NULL;

-- AlterTable
ALTER TABLE "TripAccommodation"
RENAME COLUMN "roomCount" TO "rooms";

ALTER TABLE "TripAccommodation"
ADD COLUMN "bookingId" TEXT,
ADD COLUMN "vendorListingId" TEXT,
ALTER COLUMN "name" SET DATA TYPE VARCHAR(160),
ALTER COLUMN "address" SET DATA TYPE VARCHAR(255),
ALTER COLUMN "checkInDate" SET NOT NULL,
ALTER COLUMN "checkOutDate" SET NOT NULL;

-- CreateTable
CREATE TABLE "TripTransport" (
    "id" TEXT NOT NULL,
    "tripId" TEXT NOT NULL,
    "dayId" TEXT NOT NULL,
    "fromLabel" VARCHAR(160) NOT NULL,
    "toLabel" VARCHAR(160) NOT NULL,
    "fromPlaceId" TEXT,
    "toPlaceId" TEXT,
    "mode" VARCHAR(30) NOT NULL,
    "vendorListingId" TEXT,
    "bookingId" TEXT,
    "departsAt" TIMESTAMPTZ(6),
    "arrivesAt" TIMESTAMPTZ(6),
    "distanceKm" DECIMAL(8,2),
    "durationMin" INTEGER,
    "estimatedCost" DECIMAL(12,2),
    "notes" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "TripTransport_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TripMeal" (
    "id" TEXT NOT NULL,
    "tripId" TEXT NOT NULL,
    "dayId" TEXT NOT NULL,
    "mealType" VARCHAR(20) NOT NULL,
    "name" VARCHAR(160) NOT NULL,
    "destinationId" TEXT,
    "vendorListingId" TEXT,
    "bookingId" TEXT,
    "plannedTime" TIME(6),
    "estimatedCost" DECIMAL(12,2),
    "dietaryNotes" VARCHAR(255),
    "source" VARCHAR(20) NOT NULL DEFAULT 'MANUAL',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "TripMeal_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TripActivity" (
    "id" TEXT NOT NULL,
    "tripId" TEXT NOT NULL,
    "dayId" TEXT NOT NULL,
    "title" VARCHAR(160) NOT NULL,
    "category" VARCHAR(40),
    "destinationId" TEXT,
    "vendorListingId" TEXT,
    "bookingId" TEXT,
    "startTime" TIME(6),
    "durationMin" SMALLINT,
    "participants" SMALLINT,
    "estimatedCost" DECIMAL(12,2),
    "notes" TEXT,
    "source" VARCHAR(20) NOT NULL DEFAULT 'MANUAL',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "TripActivity_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ItineraryItem" (
    "id" TEXT NOT NULL,
    "tripId" TEXT NOT NULL,
    "dayId" TEXT NOT NULL,
    "itemType" VARCHAR(20) NOT NULL,
    "itemId" TEXT NOT NULL,
    "startTime" TIME(6),
    "endTime" TIME(6),
    "sortOrder" INTEGER NOT NULL DEFAULT 0,
    "isLocked" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ItineraryItem_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TripBudget" (
    "id" TEXT NOT NULL,
    "tripId" TEXT NOT NULL,
    "category" VARCHAR(30) NOT NULL,
    "limitAmount" DECIMAL(12,2) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "TripBudget_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "RoutePlan" (
    "id" TEXT NOT NULL,
    "tripId" TEXT NOT NULL,
    "dayId" TEXT NOT NULL,
    "status" VARCHAR(20) NOT NULL DEFAULT 'PENDING',
    "travelMode" VARCHAR(20) NOT NULL DEFAULT 'DRIVING',
    "originalOrder" JSONB,
    "optimizedOrder" JSONB,
    "originalDistanceKm" DECIMAL(8,2),
    "optimizedDistanceKm" DECIMAL(8,2),
    "originalDurationMin" INTEGER,
    "optimizedDurationMin" INTEGER,
    "errorMessage" TEXT,
    "requestedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "completedAt" TIMESTAMP(3),
    "acceptedAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "RoutePlan_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AISuggestion" (
    "id" TEXT NOT NULL,
    "tripId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "type" VARCHAR(30) NOT NULL,
    "inputSnapshot" JSONB NOT NULL,
    "output" JSONB NOT NULL,
    "status" VARCHAR(30) NOT NULL DEFAULT 'GENERATED',
    "serviceVersion" VARCHAR(40),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "AISuggestion_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PlaceInfoSnapshot" (
    "id" TEXT NOT NULL,
    "destinationId" TEXT NOT NULL,
    "source" VARCHAR(60) NOT NULL,
    "content" JSONB NOT NULL,
    "fetchedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "expiresAt" TIMESTAMP(3),
    "isVerified" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "PlaceInfoSnapshot_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PlanWarning" (
    "id" TEXT NOT NULL,
    "tripId" TEXT NOT NULL,
    "dayId" TEXT,
    "code" VARCHAR(40) NOT NULL,
    "severity" VARCHAR(20) NOT NULL,
    "message" VARCHAR(255) NOT NULL,
    "resolvedAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "PlanWarning_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TripShare" (
    "id" TEXT NOT NULL,
    "tripId" TEXT NOT NULL,
    "token" VARCHAR(64) NOT NULL,
    "permission" VARCHAR(20) NOT NULL DEFAULT 'VIEW',
    "expiresAt" TIMESTAMP(3),
    "revokedAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "TripShare_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "TripTransport_tripId_idx" ON "TripTransport"("tripId");

-- CreateIndex
CREATE INDEX "TripTransport_dayId_idx" ON "TripTransport"("dayId");

-- CreateIndex
CREATE INDEX "TripTransport_fromPlaceId_idx" ON "TripTransport"("fromPlaceId");

-- CreateIndex
CREATE INDEX "TripTransport_toPlaceId_idx" ON "TripTransport"("toPlaceId");

-- CreateIndex
CREATE INDEX "TripTransport_vendorListingId_idx" ON "TripTransport"("vendorListingId");

-- CreateIndex
CREATE INDEX "TripTransport_bookingId_idx" ON "TripTransport"("bookingId");

-- CreateIndex
CREATE INDEX "TripMeal_tripId_idx" ON "TripMeal"("tripId");

-- CreateIndex
CREATE INDEX "TripMeal_dayId_idx" ON "TripMeal"("dayId");

-- CreateIndex
CREATE INDEX "TripMeal_destinationId_idx" ON "TripMeal"("destinationId");

-- CreateIndex
CREATE INDEX "TripMeal_vendorListingId_idx" ON "TripMeal"("vendorListingId");

-- CreateIndex
CREATE INDEX "TripMeal_bookingId_idx" ON "TripMeal"("bookingId");

-- CreateIndex
CREATE INDEX "TripActivity_tripId_idx" ON "TripActivity"("tripId");

-- CreateIndex
CREATE INDEX "TripActivity_dayId_idx" ON "TripActivity"("dayId");

-- CreateIndex
CREATE INDEX "TripActivity_destinationId_idx" ON "TripActivity"("destinationId");

-- CreateIndex
CREATE INDEX "TripActivity_vendorListingId_idx" ON "TripActivity"("vendorListingId");

-- CreateIndex
CREATE INDEX "TripActivity_bookingId_idx" ON "TripActivity"("bookingId");

-- CreateIndex
CREATE INDEX "ItineraryItem_tripId_dayId_sortOrder_idx" ON "ItineraryItem"("tripId", "dayId", "sortOrder");

-- CreateIndex
CREATE INDEX "ItineraryItem_itemType_itemId_idx" ON "ItineraryItem"("itemType", "itemId");

-- CreateIndex
CREATE INDEX "TripBudget_tripId_idx" ON "TripBudget"("tripId");

-- CreateIndex
CREATE UNIQUE INDEX "TripBudget_tripId_category_key" ON "TripBudget"("tripId", "category");

-- CreateIndex
CREATE INDEX "RoutePlan_tripId_idx" ON "RoutePlan"("tripId");

-- CreateIndex
CREATE INDEX "RoutePlan_dayId_idx" ON "RoutePlan"("dayId");

-- CreateIndex
CREATE INDEX "RoutePlan_status_idx" ON "RoutePlan"("status");

-- CreateIndex
CREATE INDEX "AISuggestion_tripId_idx" ON "AISuggestion"("tripId");

-- CreateIndex
CREATE INDEX "AISuggestion_userId_idx" ON "AISuggestion"("userId");

-- CreateIndex
CREATE INDEX "AISuggestion_status_idx" ON "AISuggestion"("status");

-- CreateIndex
CREATE INDEX "PlaceInfoSnapshot_destinationId_idx" ON "PlaceInfoSnapshot"("destinationId");

-- CreateIndex
CREATE INDEX "PlaceInfoSnapshot_expiresAt_idx" ON "PlaceInfoSnapshot"("expiresAt");

-- CreateIndex
CREATE INDEX "PlanWarning_tripId_idx" ON "PlanWarning"("tripId");

-- CreateIndex
CREATE INDEX "PlanWarning_dayId_idx" ON "PlanWarning"("dayId");

-- CreateIndex
CREATE INDEX "PlanWarning_code_idx" ON "PlanWarning"("code");

-- CreateIndex
CREATE UNIQUE INDEX "TripShare_token_key" ON "TripShare"("token");

-- CreateIndex
CREATE INDEX "TripShare_tripId_idx" ON "TripShare"("tripId");

-- CreateIndex
CREATE UNIQUE INDEX "Trip_slug_key" ON "Trip"("slug");

-- CreateIndex
CREATE INDEX "TripAccommodation_vendorListingId_idx" ON "TripAccommodation"("vendorListingId");

-- CreateIndex
CREATE INDEX "TripAccommodation_bookingId_idx" ON "TripAccommodation"("bookingId");

-- AddForeignKey
ALTER TABLE "TripTransport" ADD CONSTRAINT "TripTransport_tripId_fkey" FOREIGN KEY ("tripId") REFERENCES "Trip"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TripTransport" ADD CONSTRAINT "TripTransport_dayId_tripId_fkey" FOREIGN KEY ("dayId", "tripId") REFERENCES "TripDay"("id", "tripId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TripTransport" ADD CONSTRAINT "TripTransport_fromPlaceId_fkey" FOREIGN KEY ("fromPlaceId") REFERENCES "Destination"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TripTransport" ADD CONSTRAINT "TripTransport_toPlaceId_fkey" FOREIGN KEY ("toPlaceId") REFERENCES "Destination"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TripMeal" ADD CONSTRAINT "TripMeal_tripId_fkey" FOREIGN KEY ("tripId") REFERENCES "Trip"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TripMeal" ADD CONSTRAINT "TripMeal_dayId_tripId_fkey" FOREIGN KEY ("dayId", "tripId") REFERENCES "TripDay"("id", "tripId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TripMeal" ADD CONSTRAINT "TripMeal_destinationId_fkey" FOREIGN KEY ("destinationId") REFERENCES "Destination"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TripActivity" ADD CONSTRAINT "TripActivity_tripId_fkey" FOREIGN KEY ("tripId") REFERENCES "Trip"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TripActivity" ADD CONSTRAINT "TripActivity_dayId_tripId_fkey" FOREIGN KEY ("dayId", "tripId") REFERENCES "TripDay"("id", "tripId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TripActivity" ADD CONSTRAINT "TripActivity_destinationId_fkey" FOREIGN KEY ("destinationId") REFERENCES "Destination"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ItineraryItem" ADD CONSTRAINT "ItineraryItem_tripId_fkey" FOREIGN KEY ("tripId") REFERENCES "Trip"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ItineraryItem" ADD CONSTRAINT "ItineraryItem_dayId_tripId_fkey" FOREIGN KEY ("dayId", "tripId") REFERENCES "TripDay"("id", "tripId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TripBudget" ADD CONSTRAINT "TripBudget_tripId_fkey" FOREIGN KEY ("tripId") REFERENCES "Trip"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RoutePlan" ADD CONSTRAINT "RoutePlan_tripId_fkey" FOREIGN KEY ("tripId") REFERENCES "Trip"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RoutePlan" ADD CONSTRAINT "RoutePlan_dayId_tripId_fkey" FOREIGN KEY ("dayId", "tripId") REFERENCES "TripDay"("id", "tripId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AISuggestion" ADD CONSTRAINT "AISuggestion_tripId_fkey" FOREIGN KEY ("tripId") REFERENCES "Trip"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AISuggestion" ADD CONSTRAINT "AISuggestion_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PlaceInfoSnapshot" ADD CONSTRAINT "PlaceInfoSnapshot_destinationId_fkey" FOREIGN KEY ("destinationId") REFERENCES "Destination"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PlanWarning" ADD CONSTRAINT "PlanWarning_tripId_fkey" FOREIGN KEY ("tripId") REFERENCES "Trip"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PlanWarning" ADD CONSTRAINT "PlanWarning_dayId_tripId_fkey" FOREIGN KEY ("dayId", "tripId") REFERENCES "TripDay"("id", "tripId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TripShare" ADD CONSTRAINT "TripShare_tripId_fkey" FOREIGN KEY ("tripId") REFERENCES "Trip"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- Trip constraints
ALTER TABLE "Trip"
ADD CONSTRAINT "Trip_travelerCount_check"
CHECK ("travelerCount" BETWEEN 1 AND 50);

ALTER TABLE "Trip"
ADD CONSTRAINT "Trip_date_order_check"
CHECK ("startDate" IS NULL OR "endDate" IS NULL OR "endDate" >= "startDate");

ALTER TABLE "Trip"
ADD CONSTRAINT "Trip_budgetTotal_check"
CHECK ("budgetTotal" IS NULL OR "budgetTotal" >= 0);

-- Accommodation constraints
ALTER TABLE "TripAccommodation"
ADD CONSTRAINT "TripAccommodation_rooms_check"
CHECK ("rooms" >= 1);

ALTER TABLE "TripAccommodation"
ADD CONSTRAINT "TripAccommodation_dates_check"
CHECK ("checkOutDate" > "checkInDate");

-- Transport constraints
ALTER TABLE "TripTransport"
ADD CONSTRAINT "TripTransport_arrival_check"
CHECK (
    "departsAt" IS NULL
    OR "arrivesAt" IS NULL
    OR "arrivesAt" > "departsAt"
);

ALTER TABLE "TripTransport"
ADD CONSTRAINT "TripTransport_distance_check"
CHECK ("distanceKm" IS NULL OR "distanceKm" >= 0);

ALTER TABLE "TripTransport"
ADD CONSTRAINT "TripTransport_duration_check"
CHECK ("durationMin" IS NULL OR "durationMin" > 0);

-- Meal constraints
ALTER TABLE "TripMeal"
ADD CONSTRAINT "TripMeal_cost_check"
CHECK ("estimatedCost" IS NULL OR "estimatedCost" >= 0);

-- Activity constraints
ALTER TABLE "TripActivity"
ADD CONSTRAINT "TripActivity_duration_check"
CHECK ("durationMin" IS NULL OR "durationMin" BETWEEN 15 AND 720);

ALTER TABLE "TripActivity"
ADD CONSTRAINT "TripActivity_participants_check"
CHECK ("participants" IS NULL OR "participants" > 0);

ALTER TABLE "TripActivity"
ADD CONSTRAINT "TripActivity_cost_check"
CHECK ("estimatedCost" IS NULL OR "estimatedCost" >= 0);

-- Budget constraints
ALTER TABLE "TripBudget"
ADD CONSTRAINT "TripBudget_limitAmount_check"
CHECK ("limitAmount" >= 0);

-- TripPlace partial unique indexes
CREATE UNIQUE INDEX "TripPlace_trip_destination_day_unique"
ON "TripPlace" ("tripId", "destinationId", "dayId")
WHERE "dayId" IS NOT NULL;

CREATE UNIQUE INDEX "TripPlace_trip_destination_unassigned_unique"
ON "TripPlace" ("tripId", "destinationId")
WHERE "dayId" IS NULL;

-- One active route plan per trip day
CREATE UNIQUE INDEX "RoutePlan_one_active_per_day_unique"
ON "RoutePlan" ("tripId", "dayId")
WHERE "status" IN ('PENDING', 'PROCESSING', 'READY', 'ACCEPTED');

-- Align Trip column types with database design
ALTER TABLE "Trip"
ALTER COLUMN "title" TYPE VARCHAR(160),
ALTER COLUMN "travelerCount" TYPE SMALLINT,
ALTER COLUMN "startDate" TYPE DATE
USING "startDate"::DATE,
ALTER COLUMN "endDate" TYPE DATE
USING "endDate"::DATE;

-- Align TripAccommodation rooms type
ALTER TABLE "TripAccommodation"
ALTER COLUMN "rooms" TYPE SMALLINT;

-- Trip type
ALTER TABLE "Trip"
ADD CONSTRAINT "Trip_tripType_check"
CHECK ("tripType" IN ('SOLO', 'COUPLE', 'FAMILY', 'FRIENDS', 'GROUP'));

-- Trip transport mode
ALTER TABLE "TripTransport"
ADD CONSTRAINT "TripTransport_mode_check"
CHECK ("mode" IN (
    'TRAIN', 'BUS', 'TUK_TUK', 'PRIVATE_CAR',
    'VAN', 'TAXI', 'BIKE', 'WALK', 'FLIGHT'
));

-- Trip meal type and source
ALTER TABLE "TripMeal"
ADD CONSTRAINT "TripMeal_mealType_check"
CHECK ("mealType" IN ('BREAKFAST', 'LUNCH', 'DINNER', 'SNACK'));

ALTER TABLE "TripMeal"
ADD CONSTRAINT "TripMeal_source_check"
CHECK ("source" IN ('MANUAL', 'AI'));

-- Trip activity source
ALTER TABLE "TripActivity"
ADD CONSTRAINT "TripActivity_source_check"
CHECK ("source" IN ('MANUAL', 'AI'));

-- Itinerary item type
ALTER TABLE "ItineraryItem"
ADD CONSTRAINT "ItineraryItem_itemType_check"
CHECK ("itemType" IN (
    'PLACE', 'ACCOMMODATION', 'TRANSPORT', 'MEAL', 'ACTIVITY'
));

-- Trip budget category
ALTER TABLE "TripBudget"
ADD CONSTRAINT "TripBudget_category_check"
CHECK ("category" IN (
    'ACCOMMODATION', 'TRANSPORT', 'MEALS', 'ACTIVITIES', 'OTHER'
));

-- Route plan status and travel mode
ALTER TABLE "RoutePlan"
ADD CONSTRAINT "RoutePlan_status_check"
CHECK ("status" IN (
    'PENDING', 'PROCESSING', 'READY', 'FAILED', 'ACCEPTED'
));

ALTER TABLE "RoutePlan"
ADD CONSTRAINT "RoutePlan_travelMode_check"
CHECK ("travelMode" IN ('DRIVING', 'WALKING', 'TRANSIT'));

-- AI suggestion type and status
ALTER TABLE "AISuggestion"
ADD CONSTRAINT "AISuggestion_type_check"
CHECK ("type" IN ('PLACES', 'ACTIVITIES', 'MEALS', 'INFO'));

ALTER TABLE "AISuggestion"
ADD CONSTRAINT "AISuggestion_status_check"
CHECK ("status" IN (
    'GENERATED', 'ACCEPTED', 'PARTIALLY_ACCEPTED',
    'REJECTED', 'EXPIRED'
));

-- Plan warning code and severity
ALTER TABLE "PlanWarning"
ADD CONSTRAINT "PlanWarning_code_check"
CHECK ("code" IN (
    'OVERLOAD_TRAVEL', 'CLOSED_ON_DAY',
    'TIME_CONFLICT', 'OVER_BUDGET'
));

ALTER TABLE "PlanWarning"
ADD CONSTRAINT "PlanWarning_severity_check"
CHECK ("severity" IN ('INFO', 'WARNING'));

-- Trip share permission
ALTER TABLE "TripShare"
ADD CONSTRAINT "TripShare_permission_check"
CHECK ("permission" IN ('VIEW'));



ALTER TABLE "TripTransport"
ADD CONSTRAINT "TripTransport_cost_check"
CHECK ("estimatedCost" IS NULL OR "estimatedCost" >= 0);

-- Accommodation cost
ALTER TABLE "TripAccommodation"
ADD CONSTRAINT "TripAccommodation_cost_check"
CHECK ("estimatedCost" IS NULL OR "estimatedCost" >= 0);

-- Itinerary time range
ALTER TABLE "ItineraryItem"
ADD CONSTRAINT "ItineraryItem_time_check"
CHECK (
    "startTime" IS NULL
    OR "endTime" IS NULL
    OR "endTime" > "startTime"
);

ALTER TABLE "TripPlace"
ADD CONSTRAINT "TripPlace_source_check"
CHECK ("source" IN ('MANUAL', 'AI'));

ALTER TABLE "TripDay"
ADD CONSTRAINT "TripDay_dayNumber_check"
CHECK ("dayNumber" BETWEEN 1 AND 30);

ALTER TABLE "PlaceInfoSnapshot"
ADD CONSTRAINT "PlaceInfoSnapshot_expiry_check"
CHECK (
    "expiresAt" IS NULL
    OR "expiresAt" > "fetchedAt"
);

ALTER TABLE "Trip"
ADD CONSTRAINT "Trip_max_duration_check"
CHECK (
    "startDate" IS NULL
    OR "endDate" IS NULL
    OR ("endDate" - "startDate") <= 29
);
