import { PrismaClient, Post } from '@prisma/client';

const prisma = new PrismaClient();

export const createPost = async (
  image: string,
  description: string,
  date: string
  
): Promise<Post> => {
  const post = await prisma.post.create({
    data: {
      image,
      description,
      date
    }
  });

  return post;
};