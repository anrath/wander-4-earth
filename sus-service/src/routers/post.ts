import { Router, Request, Response } from 'express';
import { createPost } from '../controllers/post';

// a submodule for express to respond to specific subdivided client requests
export const postRouter: Router = Router();

interface CreatePostRequest extends Request {
  body: {
    image: string,
    description: string,
    date: string
  }
}

const createPostHandler = async (req: CreatePostRequest, res: Response) => {
  const { image, description, date } = req.body;

  const post = await createPost(image, description, date);

  res.json({
    success: !!post,  // evaluates truthiness of the post
    post
  });
};

postRouter.post('/create', createPostHandler);