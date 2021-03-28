import { Router, Request, Response } from 'express';
import { createUser, returnPostList } from '../controllers/user';

// a submodule for express to respond to specific subdivided client requests
export const userRouter: Router = Router();

interface CreateUserRequest extends Request {
  body: {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
  }
}

interface FindByUserRequest extends Request{
  body: {
    firstName: string;
    lastName: string;
  }
}

const createUserHandler = async (req: CreateUserRequest, res: Response) => {
  const { firstName, lastName, email, password } = req.body;

  const user = await createUser(firstName, lastName, email, password);

  if (user) {
    // the user was successfully created
    res.json({
      success: true
    });
  } else {
    res.json({
      success: false,
      message: 'User already exists'
    });
  }
};

userRouter.post('/create', createUserHandler);

const returnPostListHandler = async(req: FindByUserRequest, res: Response) => {
  const { firstName, lastName } = req.body;

  const postList = await returnPostList(firstName, lastName);

  if (postList) {
    res.json({
      success: true,
      postList: postList
    });
  } else {
    res.json({
      sucess: false,
      message: 'An account with the given name was not found'
    });
  }
};

userRouter.post('/findPostList', returnPostListHandler);

