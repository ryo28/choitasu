import { clsx } from "clsx";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { MAX_TODOS } from "../constants";
import { useTodoStore } from "../_store/todoStore";

export function CreateTodos() {
	const todos = useTodoStore((state) => state.todos);
	const setTodos = useTodoStore((state) => state.setTodos);
	const setError = useTodoStore((state) => state.setError);
	const [text, setText] = useState("");
	const [taskColor] = useState("bg-white");

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault(); // ページリロード防止

		// タスク数が上限に達しているかチェック
		if (todos.length >= MAX_TODOS) {
			setError(`タスクは最大${MAX_TODOS}個までです。これ以上追加できません。`);
			return;
		}

		setTodos(() => [...todos, { id: uuidv4(), text, color: taskColor }]); // TODOリストに追加
		setText(""); // 入力欄をクリア
	};

	return (
		<form onSubmit={handleSubmit} className="p-4">
			<input
				type="text"
				value={text} //入力された値を表示
				onChange={(e) => {
					e.preventDefault();
					setText(e.target.value);
				}}
				placeholder="やりたいことを入力"
				className="my-4 w-full rounded border p-2"
			/>
			<button
				type="submit"
				disabled={!text.trim()} // 空白のみの場合は無効化
				aria-label="新しいタスクを追加する"
				className={clsx(
					"rounded bg-blue-500 p-2 text-white",
					text.trim() ? "hover:bg-blue-600" : "opacity-50",
				)}
			>
				追加
			</button>
		</form>
	);
}
