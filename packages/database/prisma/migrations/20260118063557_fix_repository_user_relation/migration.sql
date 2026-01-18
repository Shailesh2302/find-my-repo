/*
  Warnings:

  - Made the column `stars_count` on table `Repository` required. This step will fail if there are existing NULL values in that column.
  - Made the column `forks_count` on table `Repository` required. This step will fail if there are existing NULL values in that column.
  - Made the column `open_issues_count` on table `Repository` required. This step will fail if there are existing NULL values in that column.

*/
-- DropIndex
DROP INDEX "Repository_id_key";

-- DropIndex
DROP INDEX "Repository_userId_key";

-- AlterTable
ALTER TABLE "Repository" ALTER COLUMN "stars_count" SET NOT NULL,
ALTER COLUMN "forks_count" SET NOT NULL,
ALTER COLUMN "open_issues_count" SET NOT NULL;

-- CreateIndex
CREATE INDEX "Repository_userId_idx" ON "Repository"("userId");
