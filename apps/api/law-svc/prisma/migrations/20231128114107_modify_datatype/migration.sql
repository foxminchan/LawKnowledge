-- AlterTable
CREATE SEQUENCE heading_no_seq;
ALTER TABLE "Heading" ALTER COLUMN "no" SET DEFAULT nextval('heading_no_seq');
ALTER SEQUENCE heading_no_seq OWNED BY "Heading"."no";

-- AlterTable
CREATE SEQUENCE topic_no_seq;
ALTER TABLE "Topic" ALTER COLUMN "no" SET DEFAULT nextval('topic_no_seq');
ALTER SEQUENCE topic_no_seq OWNED BY "Topic"."no";
