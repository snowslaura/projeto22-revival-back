/*
  Warnings:

  - Added the required column `offerItemId` to the `offers` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "offers" ADD COLUMN     "offerItemId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "offers" ADD CONSTRAINT "offers_offerItemId_fkey" FOREIGN KEY ("offerItemId") REFERENCES "items"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
