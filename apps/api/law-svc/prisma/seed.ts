import * as fs from 'fs';
import * as path from 'path';
import { csvParse } from 'd3-dsv';
import * as process from 'process';
import { PrismaClient } from '@prisma/db-law';

const prisma = new PrismaClient();

function readCsvFile(filePath: fs.PathOrFileDescriptor) {
  const fileContents = fs.readFileSync(filePath, 'utf-8');
  return csvParse(fileContents);
}

async function main() {
  const chudeData = readCsvFile(path.join(__dirname, 'data', 'ChuDe.csv'));
  for (const item of chudeData) {
    await prisma.topic.create({
      data: {
        id: item.Value,
        name: item.Text,
        no: parseInt(item.STT),
      },
    });
  }
  console.log('Seeding topic data successfully');

  const demucData = readCsvFile(path.join(__dirname, 'data', 'DeMuc.csv'));
  for (const item of demucData) {
    await prisma.heading.create({
      data: {
        id: item.Value,
        name: item.Text,
        topic_id: item.ChuDe,
        no: parseInt(item.STT),
      },
    });
  }
  console.log('Seeding heading data successfully');

  const documentData = readCsvFile(path.join(__dirname, 'data', 'AllTree.csv'));
  for (const item of documentData) {
    await prisma.document.create({
      data: {
        id: item.ID,
        indexing: item.ChiMuc,
        mpc: item.MAPC,
        name: item.TEN,
        heading_id: item.DeMucID,
      },
    });
  }
  console.log('Seeding document data successfully');
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
