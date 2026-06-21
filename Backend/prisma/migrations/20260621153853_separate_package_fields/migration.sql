-- DropForeignKey
ALTER TABLE "PackageTypeField" DROP CONSTRAINT "PackageTypeField_fieldId_fkey";

-- DropForeignKey
ALTER TABLE "VendorPackageFieldValue" DROP CONSTRAINT "VendorPackageFieldValue_fieldId_fkey";

-- CreateTable
CREATE TABLE "PackageField" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "label" TEXT NOT NULL,
    "dataType" "FieldDataType" NOT NULL,
    "placeholder" TEXT,
    "helpText" TEXT,
    "defaultValue" TEXT,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "PackageField_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PackageFieldOption" (
    "id" TEXT NOT NULL,
    "fieldId" TEXT NOT NULL,
    "label" TEXT NOT NULL,
    "value" TEXT NOT NULL,
    "displayOrder" INTEGER NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "PackageFieldOption_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "PackageFieldOption_fieldId_idx" ON "PackageFieldOption"("fieldId");

-- AddForeignKey
ALTER TABLE "PackageTypeField" ADD CONSTRAINT "PackageTypeField_fieldId_fkey" FOREIGN KEY ("fieldId") REFERENCES "PackageField"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "VendorPackageFieldValue" ADD CONSTRAINT "VendorPackageFieldValue_fieldId_fkey" FOREIGN KEY ("fieldId") REFERENCES "PackageField"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PackageFieldOption" ADD CONSTRAINT "PackageFieldOption_fieldId_fkey" FOREIGN KEY ("fieldId") REFERENCES "PackageField"("id") ON DELETE CASCADE ON UPDATE CASCADE;
