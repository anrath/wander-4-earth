import { Router, Request, Response } from 'express';
import { createTask } from '../controllers/task';

// a submodule for express to respond to specific subdivided client requests
export const taskRouter: Router = Router();

interface CreateTaskRequest extends Request {
  body: {
    name: string,
    points: number
  }
}

const createTaskHandler = async (req: CreateTaskRequest, res: Response) => {
  const { name, points } = req.body;

  const task = await createTask(name, points);

  res.json({
    success: !!task,  // evaluates truthiness of the post
    task
  });
};

taskRouter.post('/create', createTaskHandler);