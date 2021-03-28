import { PrismaClient, Task } from '@prisma/client';

const prisma = new PrismaClient();

export const createTask = async (
  userId: string, //Ron
  name: string,
  points: number
): Promise<Task> => {
  const task = await prisma.task.create({
    data: {
      userId, //Ron
      name,
      points
    }
  });

  return task;
};