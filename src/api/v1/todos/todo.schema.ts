import { boolean, object, string, TypeOf } from "zod";

const payload = {
  body: object({
    content: string({
      required_error: "Content is required",
    }),
    done: boolean({
      required_error: "Done is required",
    })
  }),
}

export const todoSchema = object({
  ...payload
});

export const createTodoSchema = object({
  ...payload
});

export type CreateTodoInput = TypeOf<typeof createTodoSchema>;
export type GetTodos = TypeOf<typeof todoSchema>;
