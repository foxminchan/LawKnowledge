-- CreateTable
CREATE TABLE "User" (
	"id" UUID NOT NULL,
	"name" VARCHAR(50) NOT NULL,
	"email" VARCHAR(50) NOT NULL,
	"phone" CHAR(10),
	"card" VARCHAR(12) NOT NULL,
	"address" VARCHAR(100),
	"password" TEXT,
	CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Roles" (
	"id" UUID NOT NULL,
	"name" VARCHAR(50) NOT NULL,
	CONSTRAINT "Roles_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserRoles" (
	"user_id" UUID NOT NULL,
	"role_id" UUID NOT NULL,
	CONSTRAINT "UserRoles_pkey" PRIMARY KEY ("user_id", "role_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "User_card_key" ON "User"("card");

-- CreateIndex
CREATE UNIQUE INDEX "Roles_name_key" ON "Roles"("name");

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