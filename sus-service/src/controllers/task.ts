import { PrismaClient, Task } from '@prisma/client';

const prisma = new PrismaClient();

export const createTask = async (
  name: string,
  points: number
): Promise<Task> => {
  const task = await prisma.task.create({
    data: {
      name,
      points
    }
  });

  return task;
};