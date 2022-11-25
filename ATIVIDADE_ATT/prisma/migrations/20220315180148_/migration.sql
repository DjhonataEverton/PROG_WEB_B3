-- CreateTable
CREATE TABLE "variacao" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "tipo" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "valores" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "valor" TEXT NOT NULL,
    "variacaoId" INTEGER,
    CONSTRAINT "valores_variacaoId_fkey" FOREIGN KEY ("variacaoId") REFERENCES "variacao" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "_produtosTovariacao" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,
    FOREIGN KEY ("A") REFERENCES "produtos" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY ("B") REFERENCES "variacao" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "_produtosTovariacao_AB_unique" ON "_produtosTovariacao"("A", "B");

-- CreateIndex
CREATE INDEX "_produtosTovariacao_B_index" ON "_produtosTovariacao"("B");
