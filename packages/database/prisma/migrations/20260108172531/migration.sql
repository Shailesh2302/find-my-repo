/*
  Warnings:

  - A unique constraint covering the columns `[user_id,repo_id]` on the table `Contribution` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[userId]` on the table `Repository` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Repository" ALTER COLUMN "stars_count" SET DEFAULT 0,
ALTER COLUMN "forks_count" SET DEFAULT 0,
ALTER COLUMN "open_issues_count" SET DEFAULT 0;

-- CreateIndex
CREATE UNIQUE INDEX "Contribution_user_id_repo_id_key" ON "Contribution"("user_id", "repo_id");

-- CreateIndex
CREATE UNIQUE INDEX "Repository_userId_key" ON "Repository"("userId");
