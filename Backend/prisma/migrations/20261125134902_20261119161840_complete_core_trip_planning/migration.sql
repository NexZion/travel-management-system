
/*
  Correct Trip column types and date constraint.
  Make TripAccommodation.rooms required.
*/

-- 1. Remove the old DATE-based constraint
ALTER TABLE "Trip"
DROP CONSTRAINT "Trip_max_duration_check";

-- 2. Update Trip column types
ALTER TABLE "Trip"
ALTER COLUMN "title" SET DATA TYPE TEXT,
ALTER COLUMN "endDate" SET DATA TYPE TIMESTAMP(3),
ALTER COLUMN "startDate" SET DATA TYPE TIMESTAMP(3),
ALTER COLUMN "travelerCount" SET DATA TYPE INTEGER;

-- 3. Recreate the constraint for TIMESTAMP columns
ALTER TABLE "Trip"
ADD CONSTRAINT "Trip_max_duration_check"
CHECK (
    "startDate" IS NULL
    OR "endDate" IS NULL
    OR (
        "endDate" >= "startDate"
        AND "endDate"::date - "startDate"::date <= 29
    )
);

-- 4. Make rooms required
ALTER TABLE "TripAccommodation"
ALTER COLUMN "rooms" SET NOT NULL;
