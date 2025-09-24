import { create } from "zustand";
import { TodoState } from "./type";
import { Todo } from "../type";

export const useDeletedTodoStore = create<TodoState>((set) => ({
  todos: [],
  setTodos: (value: Todo[] | ((prev: Todo[]) => Todo[])) =>
    set((state) => ({
      todos:
        typeof value === "function"
          ? (value as (prev: Todo[]) => Todo[])(state.todos)
          : value,
    })),
}));
