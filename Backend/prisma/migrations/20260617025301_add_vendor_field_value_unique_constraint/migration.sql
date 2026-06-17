/*
  Warnings:

  - A unique constraint covering the columns `[vendorId,fieldId]` on the table `VendorFieldValue` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "VendorFieldValue_vendorId_fieldId_key" ON "VendorFieldValue"("vendorId", "fieldId");
