import { Router, Request, Response } from 'express';
import { createUser, returnUser, returnPostTaskList, login } from '../controllers/user';
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

interface Login extends Request{
  body: {
    email: string;
    password: string;
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

const returnUserHandler = async(req: FindByUserRequest, res: Response) => {
  const { firstName, lastName } = req.body;

  const user = await returnUser(firstName, lastName);

  if (user) {
    res.json({
      success: true,
      user: user
    });
  } else {
    res.json({
      sucess: false,
      message: 'An account with the given name was not found'
    });
  }
};

userRouter.post('/findUser', returnUserHandler);


const returnPostTaskListHandler = async(req: FindByUserRequest, res: Response) => {
  const { firstName, lastName } = req.body;

  const postList = await returnPostTaskList(firstName, lastName);

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

userRouter.post('/findPostTaskList', returnPostTaskListHandler);

const loginHandler = async (req: Login, res: Response) => {
  const { email, password } = req.body;

  const user = await login(email, password);

  if (user) {
    // the user was successfully created
    res.json({
      success: true
    });
  } else {
    res.json({
      success: false,
      message: 'At least one of the fields is incorrect.'
    });
  }
};

userRouter.post('/login', loginHandler);