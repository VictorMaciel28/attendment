import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
import { v4 as uuidv4 } from 'uuid';

async function main() {
  await prisma.attendment.deleteMany({});

  const teams = [
    {
      name: "Cartões",
    },
    {
      name: "Empréstimos",
    },
    {
      name: "Outros Assuntos",
    },
  ];

  for (const team of teams) {
    const teamId = uuidv4();
    const createdTeam = await prisma.team.upsert({
      where: { id: teamId },
      update: {},
      create: {
        id: teamId,
        name: team.name,
      },
    });

    for (let i = 1; i <= 5; i++) {
      const attendmentId = uuidv4();
      await prisma.attendment.create({
        data: {
          id: attendmentId,
          status: 0,
          team_id: createdTeam.id,
          description: `Descricao seed para ${createdTeam.name} - ${i}`,
          created_at: new Date()
        },
      });
    }
  }
  
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
