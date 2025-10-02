import { create } from "zustand";
import { Todo } from "../type";
import { TodoState } from "./type";
import { todoTestItems } from "./todoTestItem"; //仮のデータ
import { persist } from "zustand/middleware";

//空配列で初期化[]
export const useTodoStore = create<TodoState>()(
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
    {
      name: "todo-storage", // localStorage のキー名
    }
  )
);
