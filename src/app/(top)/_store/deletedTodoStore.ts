import { create } from "zustand";
import { TodoState } from "./type";
import { DeletedTodo } from "../type";
import { persist } from "zustand/middleware";
import { differenceInDays, formatISO } from "date-fns";

export const useDeletedTodoStore = create<TodoState<DeletedTodo>>()(
  persist(
    (set, get) => ({
      todos: [],
      setTodos: (
        value: DeletedTodo[] | ((prev: DeletedTodo[]) => DeletedTodo[])
      ) =>
        set((state) => ({
          todos:
            typeof value === "function"
              ? (value as (prev: DeletedTodo[]) => DeletedTodo[])(state.todos)
              : value,
        })),
      // 30日以上前の削除済みタスクを自動で削除するメソッド
      cleanOldTodos: () => {
        const now = new Date();
        const validTodos = get().todos.filter((todo) => {
          const todoDate = formatISO(new Date(todo.date)); // 文字列をDate型に変換 differenceInDaysの引数はDate型である必要がある
          return differenceInDays(now, todoDate) < 30;
        });
        set({ todos: validTodos });
      },
    }),
    { name: "deleted-todo-storage" }
  )
);
