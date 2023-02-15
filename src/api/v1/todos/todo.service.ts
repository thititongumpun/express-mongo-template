import { todoModel } from './todo.model';
import { CreateTodoInput } from './todo.schema';

export const findTodos = async () => {
  return await todoModel.find();
}

export const createTodo = async (input: CreateTodoInput) => {
  return todoModel.create(input);
};