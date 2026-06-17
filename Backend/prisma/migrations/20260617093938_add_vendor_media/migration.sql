-- CreateEnum
CREATE TYPE "VendorMediaType" AS ENUM ('LOGO', 'IMAGE', 'DOCUMENT', 'CERTIFICATE');

-- CreateTable
CREATE TABLE "VendorMedia" (
    "id" TEXT NOT NULL,
    "vendorId" TEXT NOT NULL,
    "type" "VendorMediaType" NOT NULL,
    "url" TEXT NOT NULL,
    "fileName" TEXT,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "VendorMedia_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "VendorMedia" ADD CONSTRAINT "VendorMedia_vendorId_fkey" FOREIGN KEY ("vendorId") REFERENCES "Vendor"("id") ON DELETE CASCADE ON UPDATE CASCADE;
