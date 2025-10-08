import { Trash2 } from "lucide-react";
import { useDeletedTodoStore } from "../_store/deletedTodoStore";

//削除履歴からデータを削除するコンポーネント
export function DeletedHistoryButton({ id }: { id: string }) {
	//削除したタスクを保存する配列
	const deletedTodos = useDeletedTodoStore((state) => state.todos);
	const setDeletedTodos = useDeletedTodoStore((state) => state.setTodos);
	// タスク削除（index指定）
	const handleDeleteHistory = (id: string) => {
		setDeletedTodos(() =>
			//idが一致しないものだけを抽出して新しい配列を作成
			deletedTodos.filter((prev) => prev.id !== id),
		);
	};
	return (
		<button
			type="button"
			onClick={() => handleDeleteHistory(id)}
			title="完全に削除"
			aria-label="削除履歴からタスクを完全に削除する"
		>
			<Trash2 className="text-red-400" />
		</button>
	);
}
