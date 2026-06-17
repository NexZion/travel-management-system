-- DropForeignKey
ALTER TABLE "Vendor" DROP CONSTRAINT "Vendor_categoryId_fkey";

-- AlterTable
ALTER TABLE "FieldSet" ADD COLUMN     "isCustom" BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE "Vendor" ADD COLUMN     "fieldSetId" TEXT;

-- AddForeignKey
ALTER TABLE "Vendor" ADD CONSTRAINT "Vendor_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "VendorCategory"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Vendor" ADD CONSTRAINT "Vendor_fieldSetId_fkey" FOREIGN KEY ("fieldSetId") REFERENCES "FieldSet"("id") ON DELETE CASCADE ON UPDATE CASCADE;
