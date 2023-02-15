import { Router, Request, Response } from "express";
import { Todo } from '../models/test.model';
export const route = Router();

route.get('/', (_: Request, res: Response) => {
  // res.json(TodoSchema.fin)
  Todo.find({}, (err: any, todo: any) => {
    if (err) {
      res.status(500).send(err);
    }
    res.status(200).json(todo);
  });
})