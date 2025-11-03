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
				// localStorage容量超過エラーのハンドリング
				onRehydrateStorage: () => (state, error) => {
					if (error) {
						console.error("localStorage読み込みエラー:", error);
						// エラーメッセージを設定
						state?.setError(
							"データの読み込みに失敗しました。ブラウザのストレージをご確認ください。",
						);
					}
				},
				// 保存時のエラーハンドリング
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
							// QuotaExceededError（容量超過）の場合
							if (
								error instanceof DOMException &&
								(error.name === "QuotaExceededError" ||
									error.name === "NS_ERROR_DOM_QUOTA_REACHED")
							) {
								// エラーをストアに設定
								const state = useTodoStore.getState();
								state.setError(
									"ストレージ容量が不足しています。古いタスクを削除してください。",
								);
							} else {
								const state = useTodoStore.getState();
								state.setError(
									"データの保存に失敗しました。ブラウザの設定をご確認ください。",
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
