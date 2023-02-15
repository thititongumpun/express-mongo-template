import mongoose from "mongoose";

export interface TodoInput {
  content: string;
  done: boolean;
}

export interface TodoDocument extends TodoInput, mongoose.Document {
  createdAt: Date;
  updatedAt: Date;
}

const todoSchema = new mongoose.Schema(
  {
    content: { type: String, required: true },
    done: { type: Boolean, required: true },
  },
  {
    timestamps: true,
  }
);

export const todoModel = mongoose.model<TodoDocument>("Todo", todoSchema);