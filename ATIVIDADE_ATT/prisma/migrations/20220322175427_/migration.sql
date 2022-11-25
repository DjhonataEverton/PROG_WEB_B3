/*
  Warnings:

  - Made the column `variacaoId` on table `valores` required. This step will fail if there are existing NULL values in that column.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_valores" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "valor" TEXT NOT NULL,
    "variacaoId" INTEGER NOT NULL,
    CONSTRAINT "valores_variacaoId_fkey" FOREIGN KEY ("variacaoId") REFERENCES "variacao" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_valores" ("id", "valor", "variacaoId") SELECT "id", "valor", "variacaoId" FROM "valores";
DROP TABLE "valores";
ALTER TABLE "new_valores" RENAME TO "valores";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
