import * as process from 'process';
import { PrismaClient } from '@prisma/db-auth';

const prisma = new PrismaClient();

async function main() {
  const LawyerRole = await prisma.roles.create({
    data: {
      name: 'Lawyer',
    },
  });

  const CitizenRole = await prisma.roles.create({
    data: {
      name: 'Citizen',
    },
  });

  const AdminRole = await prisma.roles.create({
    data: {
      name: 'Admin',
    },
  });

  console.log(
    `Created roles: ${LawyerRole.name}, ${CitizenRole.name}, ${AdminRole.name}`,
  );
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
