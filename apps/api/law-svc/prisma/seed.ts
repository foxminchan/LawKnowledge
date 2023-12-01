import * as fs from 'fs';
import * as path from 'path';
import * as process from 'process';
import { PrismaClient } from '@prisma/db-law';

const prisma = new PrismaClient();

async function main() {
  const jsonTopicData = JSON.parse(
    fs.readFileSync(path.join(__dirname, 'assets', 'Topic.json'), 'utf-8')
  );

  for (const topic of jsonTopicData) {
    await prisma.topic.create({
      data: topic,
    });
  }

  console.log('Seeded topics successfully');

  const jsonHeadingData = JSON.parse(
    fs.readFileSync(path.join(__dirname, 'assets', 'Heading.json'), 'utf-8')
  );

  for (const heading of jsonHeadingData) {
    await prisma.heading.create({
      data: {
        no: parseInt(heading.no),
        ...heading,
      },
    });
  }

  console.log('Seeded headings successfully');

  const jsonDocumentData = JSON.parse(
    fs.readFileSync(path.join(__dirname, 'assets', 'Document.json'), 'utf-8')
  );

  for (const document of jsonDocumentData) {
    await prisma.document.create({
      data: {
        no: parseInt(document.no),
        ...document,
      },
    });
  }

  console.log('Seeded documents successfully');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
    process.exit(0);
  });
