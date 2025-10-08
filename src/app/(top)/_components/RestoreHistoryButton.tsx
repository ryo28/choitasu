import { Undo2 } from "lucide-react";
import { useDeletedTodoStore } from "../_store/deletedTodoStore";
import { useTodoStore } from "../_store/todoStore";

//タスク削除ボタンをしつつ、削除したタスクをdeletedTodosに履歴として追加するコンポーネント
export function RestoreHistoryButton({ id: todoId }: { id: string }) {
	const setTodos = useTodoStore((state) => state.setTodos);
	//削除したタスクを保存する配列
	const deletedTodos = useDeletedTodoStore((state) => state.todos);
	const setDeletedTodos = useDeletedTodoStore((state) => state.setTodos);
	// タスク削除（index指定）
	const handleRestoreTodos = (id: string) => {
		//選択したidのタスク履歴以外を新し配列のタスク履歴に返す(選択した履歴を削除)
		setDeletedTodos(() => deletedTodos.filter((todo) => todo.id !== id));
		//削除履歴から復元してtodosに追加
		setTodos((prev) => [
			...prev,
			...deletedTodos.filter((todo) => todo.id === id),
		]);
	};
	return (
		<button
			type="button"
			onClick={() => handleRestoreTodos(todoId)}
			title="復元"
			aria-label="タスクを復元する"
		>
			<Undo2 className="text-green-400" />
		</button>
	);
}
