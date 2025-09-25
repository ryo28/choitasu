import { create } from "zustand";
import { Todo } from "../type";
import { TodoState } from "./type";

export const useTodoStore = create<TodoState>((set) => ({
  todos: [],
  setTodos: (value: Todo[] | ((prev: Todo[]) => Todo[])) =>
    set((state) => ({
      todos:
        typeof value === "function"
          ? (value as (prev: Todo[]) => Todo[])(state.todos)
          : value,
    })),
}));
