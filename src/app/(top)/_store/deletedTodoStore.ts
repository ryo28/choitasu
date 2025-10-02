import { create } from "zustand";
import { TodoState } from "./type";
import { Todo } from "../type";
import { persist } from "zustand/middleware";

export const useDeletedTodoStore = create<TodoState>()(
  persist(
    (set) => ({
      todos: [],
      setTodos: (value: Todo[] | ((prev: Todo[]) => Todo[])) =>
        set((state) => ({
          todos:
            typeof value === "function"
              ? (value as (prev: Todo[]) => Todo[])(state.todos)
              : value,
        })),
    }),
    { name: "deleted-todo-storage" }
  )
);
