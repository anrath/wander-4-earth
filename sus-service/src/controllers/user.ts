import { PrismaClient, User, Post } from '@prisma/client';

const prisma = new PrismaClient();

export const createUser = async (firstName: string, lastName: string, email: string, password: string): Promise<User | boolean> => {
  const foundUser = await prisma.user.findUnique({
    where: { email }
  });

  if (foundUser) {
    return false;
  }

  const user = await prisma.user.create({
    data: {
      email,
      password,
      firstName,
      lastName
    }
  });

  return user;
};

export const returnPostList = async(firstName: string, lastName: string): Promise< {posts: Post[]} | boolean> => {
  const user = await prisma.user.findFirst({
    where: {
      firstName,
      lastName
    },
    select: {
      posts: true
    }
  });

  if (user) {
    return user;
  } else {
    return false;
  }


};
