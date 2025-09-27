import { create } from "zustand";
import { Todo } from "../type";
import { TodoState } from "./type";
import { todoTestItems } from "./todoTestItem";

//空配列で初期化[]
export const useTodoStore = create<TodoState>((set) => ({
  todos: todoTestItems,
  setTodos: (value: Todo[] | ((prev: Todo[]) => Todo[])) =>
    set((state) => ({
      todos:
        typeof value === "function"
          ? (value as (prev: Todo[]) => Todo[])(state.todos)
          : value,
    })),
}));
