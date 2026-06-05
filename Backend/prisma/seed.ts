import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  await prisma.user.create({
    data: {
      full_name: 'Admin User',
      phone: '1234567890',
      email: 'admin@example.com',
      password: 'password',
      //name: 'Admin',
    },
  });

  await prisma.role.createMany({
  data: [
    {
      name: 'ADMIN',
      description: 'System administrator',
    },
    {
      name: 'TRAVELER',
      description: 'Traveler role',
    },
    {
      name: 'VENDOR',
      description: 'Vendor role',
    },
  ],
  skipDuplicates: true,
});
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
