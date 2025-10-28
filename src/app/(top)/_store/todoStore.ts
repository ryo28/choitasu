import { create } from "zustand";
import { persist, subscribeWithSelector } from "zustand/middleware";
import { MAX_TODOS } from "../constants";
import type { Todo } from "../type";
import type { TodoState } from "./type";

//空配列で初期化[]
export const useTodoStore = create<TodoState>()(
	subscribeWithSelector(
		persist(
			(set) => ({
				todos: [],
				error: null,
				setTodos: (value: Todo[] | ((prev: Todo[]) => Todo[])) =>
					set((state) => {
						const newTodos =
							typeof value === "function"
								? (value as (prev: Todo[]) => Todo[])(state.todos)
								: value;

						// タスク数が上限を超える場合
						if (newTodos.length > MAX_TODOS) {
							return {
								error: `タスクは最大${MAX_TODOS}個までです。これ以上追加できません。`,
							};
						}

						// 成功した場合はエラーをクリア
						return {
							todos: newTodos,
							error: null,
						};
					}),
				setError: (error: string | null) => set({ error }),
			}),
			{
				name: "todo-storage", // localStorage のキー名
			},
		),
	),
);
