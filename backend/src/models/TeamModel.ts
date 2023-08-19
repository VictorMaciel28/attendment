import { PrismaClient } from '@prisma/client';
import uuidv4 from "uuid";

const prisma = new PrismaClient();

export class TeamModel {
  create(name: string) {
    return prisma.team.create({
      data: {
        id: uuidv4.v1(),
        name,
      }
    });
  }
}
