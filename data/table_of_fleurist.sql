--
-- Bienvenue dans la BDD du projet of fleurist
--

BEGIN;

--!! Je commence par Drop Table pour un éventuel reset des données

DROP TABLE IF EXISTS "item", "category", "admin";

--
-- Ma liste de tables qui s'etendra par la suite =>
--

CREATE TABLE "category" (
    "id" INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "name" VARCHAR(70) NOT NULL,
    "description" TEXT,
    "caracteristique" TEXT,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    "updated_at" TIMESTAMPTZ
);

CREATE TABLE "admin" (
    "id" INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "firstname" VARCHAR(50),
    "lastname" VARCHAR(50),
    "email" VARCHAR(50) UNIQUE,
    "password" VARCHAR(50),
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    "updated_at" TIMESTAMPTZ
);

CREATE TABLE "item" (
    "id" INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "img" VARCHAR NOT NULL,
    "price" FLOAT NOT NULL DEFAULT 0,
    "color" VARCHAR(50),
    "description" TEXT NOT NULL DEFAULT '',
    "category_id" INTEGER NOT NULL REFERENCES category("id") ON DELETE CASCADE,
    "admin_id" INTEGER NOT NULL REFERENCES admin("id") ON DELETE CASCADE,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    "updated_at" TIMESTAMPTZ
);
--
-- Tout et ok place au commit
--
COMMIT