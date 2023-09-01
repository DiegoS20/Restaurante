/*
  Warnings:

  - Added the required column `imageSrc` to the `Producto` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Producto" ADD COLUMN     "imageSrc" VARCHAR(1000) NOT NULL;
