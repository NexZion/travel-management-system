-- CreateTable
CREATE TABLE "VendorStatusHistory" (
    "id" TEXT NOT NULL,
    "vendorId" TEXT NOT NULL,
    "previousStatus" "VendorStatus",
    "newStatus" "VendorStatus" NOT NULL,
    "reason" TEXT,
    "changedBy" TEXT NOT NULL,
    "changedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "VendorStatusHistory_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "VendorStatusHistory" ADD CONSTRAINT "VendorStatusHistory_vendorId_fkey" FOREIGN KEY ("vendorId") REFERENCES "Vendor"("id") ON DELETE CASCADE ON UPDATE CASCADE;
