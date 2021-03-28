import { Router, Request, Response } from 'express';
import { createTask } from '../controllers/task';

// a submodule for express to respond to specific subdivided client requests
export const taskRouter: Router = Router();

interface CreateTaskRequest extends Request {
  body: {
    userId: string,
    name: string,
    points: number
  }
}

const createTaskHandler = async (req: CreateTaskRequest, res: Response) => {
  const { userId, name, points } = req.body;

  const task = await createTask(userId, name, points); //Ron

  res.json({
    success: !!task,  // evaluates truthiness of the post
    task
  });
};

taskRouter.post('/create', createTaskHandler);