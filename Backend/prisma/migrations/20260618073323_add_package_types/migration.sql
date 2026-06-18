-- CreateTable
CREATE TABLE "PackageType" (
    "id" TEXT NOT NULL,
    "categoryId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "PackageType_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PackageTypeFieldSet" (
    "id" TEXT NOT NULL,
    "packageTypeId" TEXT NOT NULL,

    CONSTRAINT "PackageTypeFieldSet_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PackageTypeField" (
    "id" TEXT NOT NULL,
    "fieldSetId" TEXT NOT NULL,
    "fieldId" TEXT NOT NULL,
    "isRequired" BOOLEAN NOT NULL DEFAULT false,
    "displayOrder" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "PackageTypeField_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "PackageTypeFieldSet_packageTypeId_key" ON "PackageTypeFieldSet"("packageTypeId");

-- AddForeignKey
ALTER TABLE "PackageType" ADD CONSTRAINT "PackageType_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "VendorCategory"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PackageTypeFieldSet" ADD CONSTRAINT "PackageTypeFieldSet_packageTypeId_fkey" FOREIGN KEY ("packageTypeId") REFERENCES "PackageType"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PackageTypeField" ADD CONSTRAINT "PackageTypeField_fieldSetId_fkey" FOREIGN KEY ("fieldSetId") REFERENCES "PackageTypeFieldSet"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PackageTypeField" ADD CONSTRAINT "PackageTypeField_fieldId_fkey" FOREIGN KEY ("fieldId") REFERENCES "Field"("id") ON DELETE CASCADE ON UPDATE CASCADE;
