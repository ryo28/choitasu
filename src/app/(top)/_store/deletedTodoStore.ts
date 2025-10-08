import { differenceInDays, parse } from "date-fns";
import { ja } from "date-fns/locale";
import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { DeletedTodo } from "../type";
import type { TodoState } from "./type";

export const useDeletedTodoStore = create<TodoState<DeletedTodo>>()(
	persist(
		(set, get) => ({
			todos: [],
			setTodos: (
				value: DeletedTodo[] | ((prev: DeletedTodo[]) => DeletedTodo[]),
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
					const todoDate = parse(
						todo.date,
						"yyyy MM月d日 (E) HH:mm",
						new Date(),
						{ locale: ja },
					); // 文字列をDate型に変換 differenceInDaysの引数はDate型である必要がある
					return differenceInDays(now, todoDate) < 30;
				});
				set({ todos: validTodos });
			},
		}),
		{ name: "deleted-todo-storage" },
	),
);
