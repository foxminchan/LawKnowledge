-- CreateTable
CREATE TABLE "Topic" (
	"id" TEXT NOT NULL,
	"name" VARCHAR(255) NOT NULL,
	"no" INTEGER NOT NULL,
	CONSTRAINT "Topic_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Heading" (
	"id" TEXT NOT NULL,
	"name" VARCHAR(255) NOT NULL,
	"no" INTEGER NOT NULL,
	"topic_id" TEXT NOT NULL,
	CONSTRAINT "Heading_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Document" (
	"id" TEXT NOT NULL,
	"name" TEXT NOT NULL,
	"indexing" VARCHAR(10) NOT NULL,
	"mpc" TEXT NOT NULL,
	"heading_id" TEXT NOT NULL,
	CONSTRAINT "Document_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE
	"Heading"
ADD
	CONSTRAINT "Heading_topic_id_fkey" FOREIGN KEY ("topic_id") REFERENCES "Topic"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE
	"Document"
ADD
	CONSTRAINT "Document_heading_id_fkey" FOREIGN KEY ("heading_id") REFERENCES "Heading"("id") ON DELETE RESTRICT ON UPDATE CASCADE;