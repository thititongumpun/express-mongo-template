import { Request, Response, NextFunction } from "express";
import { createTodo, findTodos } from "./todo.service";
import { CreateTodoInput } from './todo.schema';

export async function findAll(
  _: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const todos = await findTodos();
    res.json(todos);
  } catch (error) {
    next(error);
  }
}

export const createTodoHandler = async (req: Request<{}, {}, CreateTodoInput>, res: Response) => {
  const body = req.body;
  const todo: any = await createTodo(body);
  return res.send(todo);
}