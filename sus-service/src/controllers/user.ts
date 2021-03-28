import { PrismaClient, User, Post } from '@prisma/client';
import { hash, verify } from 'argon2';

const prisma = new PrismaClient();

export const createUser = async (firstName: string, lastName: string, email: string, password: string): Promise<User | boolean> => {
  const foundUser = await prisma.user.findUnique({
    where: { email }
  });

  if (foundUser) {
    return false;
  }
  password = await hash(password);
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

export const returnUser = async(firstName: string, lastName: string): Promise< User | boolean> => {
  const user = await prisma.user.findFirst({
    where: {
      firstName,
      lastName
    }
  });

  if (user) {
    return user;
  } else {
    return false;
  }
};

export const returnPostTaskList = async(firstName: string, lastName: string): Promise< {posts: Post[]} | boolean> => {
  const user = await prisma.user.findFirst({
    where: {
      firstName,
      lastName
    },
    select: {
      posts: true,
      tasks: true
    }
  });

  if (user) {
    return user;
  } else {
    return false;
  }
};

export const login = async (email: string, password: string): Promise<User | boolean> => {
  
  const foundUser = await prisma.user.findUnique({
    where: { email }
  });

  if (await verify(foundUser.password, password)) {
    return foundUser;
  } else {
    return false;
  }
};