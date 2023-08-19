import { PrismaClient } from '@prisma/client';
import uuidv4 from "uuid";

const prisma = new PrismaClient();

export class AttendmentModel {
  create(subject: string, description: string, team_id: string) {
    return prisma.attendment.create({
      data: {
        id: uuidv4.v1(),
        subject,
        description,
        team_id,
        status: 0
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

  async findAll() {
    return await prisma.attendment.findMany({});
  }

  async getPendingAttendments() {
    return await prisma.attendment.findMany({
      where: {
        status: 0
      },
      skip: 3
    });
  }

  async findByTeam(team_id: string) {
    return await prisma.attendment.findMany({
      where: {
        team_id
      },
      take: 3 // RN limite de 3 por time
    });
  }
}
