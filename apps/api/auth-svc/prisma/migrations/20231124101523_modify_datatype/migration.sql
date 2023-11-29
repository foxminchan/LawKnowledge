/*
 Warnings:
 
 - The primary key for the `Roles` table will be changed. If it partially fails, the table could be left without primary key constraint.
 - You are about to alter the column `name` on the `Roles` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(50)`.
 - The primary key for the `User` table will be changed. If it partially fails, the table could be left without primary key constraint.
 - You are about to alter the column `name` on the `User` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(50)`.
 - You are about to alter the column `email` on the `User` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(50)`.
 - You are about to alter the column `phone` on the `User` table. The data in that column could be lost. The data in that column will be cast from `Text` to `Char(10)`.
 - You are about to alter the column `card` on the `User` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(12)`.
 - You are about to alter the column `address` on the `User` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(100)`.
 - The primary key for the `UserRoles` table will be changed. If it partially fails, the table could be left without primary key constraint.
 - Changed the type of `id` on the `Roles` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
 - Changed the type of `id` on the `User` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
 - Changed the type of `user_id` on the `UserRoles` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
 - Changed the type of `role_id` on the `UserRoles` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
 
 */
-- DropForeignKey
ALTER TABLE
  "UserRoles" DROP CONSTRAINT "UserRoles_role_id_fkey";

-- DropForeignKey
ALTER TABLE
  "UserRoles" DROP CONSTRAINT "UserRoles_user_id_fkey";

-- AlterTable
ALTER TABLE
  "Roles" DROP CONSTRAINT "Roles_pkey",
  DROP COLUMN "id",
ADD
  COLUMN "id" UUID NOT NULL,
ALTER COLUMN
  "name"
SET
  DATA TYPE VARCHAR(50),
ADD
  CONSTRAINT "Roles_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE
  "User" DROP CONSTRAINT "User_pkey",
  DROP COLUMN "id",
ADD
  COLUMN "id" UUID NOT NULL,
ALTER COLUMN
  "name"
SET
  DATA TYPE VARCHAR(50),
ALTER COLUMN
  "email"
SET
  DATA TYPE VARCHAR(50),
ALTER COLUMN
  "phone"
SET
  DATA TYPE CHAR(10),
ALTER COLUMN
  "card"
SET
  DATA TYPE VARCHAR(12),
ALTER COLUMN
  "address"
SET
  DATA TYPE VARCHAR(100),
ADD
  CONSTRAINT "User_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE
  "UserRoles" DROP CONSTRAINT "UserRoles_pkey",
  DROP COLUMN "user_id",
ADD
  COLUMN "user_id" UUID NOT NULL,
  DROP COLUMN "role_id",
ADD
  COLUMN "role_id" UUID NOT NULL,
ADD
  CONSTRAINT "UserRoles_pkey" PRIMARY KEY ("user_id", "role_id");

-- AddForeignKey
ALTER TABLE
  "UserRoles"
ADD
  CONSTRAINT "UserRoles_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE
  "UserRoles"
ADD
  CONSTRAINT "UserRoles_role_id_fkey" FOREIGN KEY ("role_id") REFERENCES "Roles"("id") ON DELETE RESTRICT ON UPDATE CASCADE;