-- CreateTable
CREATE TABLE "usuarios" (
    "email" TEXT NOT NULL,
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "senha" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "produtos" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,
    "preco" DECIMAL NOT NULL,
    "codigo" TEXT NOT NULL,
    "usuarioId" INTEGER,
    CONSTRAINT "produtos_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "usuarios" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "usuarios_email_key" ON "usuarios"("email");
