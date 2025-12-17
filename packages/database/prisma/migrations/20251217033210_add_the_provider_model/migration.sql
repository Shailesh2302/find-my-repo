/*
  Warnings:

  - You are about to drop the column `github_id` on the `User` table. All the data in the column will be lost.

*/
-- CreateEnum
CREATE TYPE "ProviderName" AS ENUM ('GOOGLE', 'GITHUB');

-- DropIndex
DROP INDEX "User_github_id_key";

-- AlterTable
ALTER TABLE "User" DROP COLUMN "github_id";

-- CreateTable
CREATE TABLE "Provider" (
    "id" TEXT NOT NULL,
    "provider" "ProviderName" NOT NULL,
    "providerUserId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "userId" TEXT NOT NULL,

    CONSTRAINT "Provider_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "Provider_userId_idx" ON "Provider"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "Provider_provider_providerUserId_key" ON "Provider"("provider", "providerUserId");

-- AddForeignKey
ALTER TABLE "Provider" ADD CONSTRAINT "Provider_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
