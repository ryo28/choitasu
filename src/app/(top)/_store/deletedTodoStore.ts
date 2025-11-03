import { differenceInDays, parse } from "date-fns";
import { ja } from "date-fns/locale";
import { create } from "zustand";
import { persist, subscribeWithSelector } from "zustand/middleware";
import { DELETED_HISTORY_RETENTION_DAYS } from "../constants";
import type { DeletedTodo } from "../type";
import type { TodoState } from "./type";

export const useDeletedTodoStore = create<TodoState<DeletedTodo>>()(
	subscribeWithSelector(
		persist(
			(set, get) => ({
				todos: [],
				error: null,
				setTodos: (
					value: DeletedTodo[] | ((prev: DeletedTodo[]) => DeletedTodo[]),
				) =>
					set((state) => ({
						todos:
							typeof value === "function"
								? (value as (prev: DeletedTodo[]) => DeletedTodo[])(state.todos)
								: value,
					})),
				setError: (error: string | null) => set({ error }),
				// 指定日数以上前の削除済みタスクを自動で削除するメソッド
				cleanOldTodos: () => {
					const now = new Date();
					const validTodos = get().todos.filter((todo) => {
						const todoDate = parse(
							todo.date,
							"yyyy MM月d日 (E) HH:mm",
							new Date(),
							{ locale: ja },
						); // 文字列をDate型に変換 differenceInDaysの引数はDate型である必要がある
						return (
							differenceInDays(now, todoDate) < DELETED_HISTORY_RETENTION_DAYS
						);
					});
					set({ todos: validTodos });
				},
			}),
			{
				name: "deleted-todo-storage",
				// localStorage容量超過エラーのハンドリング
				onRehydrateStorage: () => (state, error) => {
					if (error) {
						console.error("localStorage読み込みエラー:", error);
						state?.setError(
							"削除履歴の読み込みに失敗しました。ブラウザのストレージをご確認ください。",
						);
					}
				},
				storage: {
					getItem: (name) => {
						try {
							const str = localStorage.getItem(name);
							return str ? JSON.parse(str) : null;
						} catch (error) {
							console.error("localStorage読み込みエラー:", error);
							return null;
						}
					},
					setItem: (name, value) => {
						try {
							localStorage.setItem(name, JSON.stringify(value));
						} catch (error) {
							console.error("localStorage保存エラー:", error);
							if (
								error instanceof DOMException &&
								(error.name === "QuotaExceededError" ||
									error.name === "NS_ERROR_DOM_QUOTA_REACHED")
							) {
								const state = useDeletedTodoStore.getState();
								state.setError(
									"ストレージ容量が不足しています。削除履歴をクリアしてください。",
								);
							} else {
								const state = useDeletedTodoStore.getState();
								state.setError(
									"削除履歴の保存に失敗しました。ブラウザの設定をご確認ください。",
								);
							}
						}
					},
					removeItem: (name) => {
						try {
							localStorage.removeItem(name);
						} catch (error) {
							console.error("localStorage削除エラー:", error);
						}
					},
				},
			},
		),
	),
);
