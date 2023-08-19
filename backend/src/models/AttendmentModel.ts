import { Attendment, PrismaClient } from '@prisma/client';
import { v4 as uuidv4 } from 'uuid';

const prisma = new PrismaClient();

export class AttendmentModel {
  create(description: string, team_id: string) {
    return prisma.attendment.create({
      data: {
        id: uuidv4(),
        description,
        team_id,
        status: 0,
        created_at: new Date()
      }
    });
  }

  update(id: string, status: number) {
    return prisma.attendment.update({
      where: {
        id,
      },
      data: {
        status,
      },
    });
  }

  async getPendingAttendments() {
    const teams = await prisma.team.findMany();
    const pendingAttendmentsPerTeam: Attendment[][] = [];

    for (const team of teams) {
      const pendingAttendments = await prisma.attendment.findMany({
        where: {
          status: 0,
          team_id: team.id
        },
        skip: 3,
        orderBy: {
          created_at: 'asc'
        }
      });

      pendingAttendmentsPerTeam.push(pendingAttendments);
    }
    return pendingAttendmentsPerTeam.flat();
  }

  async findAll() {
    return await prisma.attendment.findMany({});
  }

  async findByTeam(team_id: string) {
    return await prisma.attendment.findMany({
      where: {
        team_id,
        status: 0,
      },
      take: 3,
      orderBy: {
        created_at: 'asc'
      }
    });
  }
}
