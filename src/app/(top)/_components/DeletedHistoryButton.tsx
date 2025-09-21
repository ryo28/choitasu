import { Trash2 } from "lucide-react";
import { SetState, Todo } from "../type";

//削除履歴からデータを削除するコンポーネント
export function DeletedHistoryButton({
  id,
  deletedTodos,
  setDeletedTodos,
}: {
  id: string;
  deletedTodos: Todo[];
} & { setDeletedTodos: SetState<Todo[]> }) {
  // タスク削除（index指定）
  const handleDeleteHistory = (id: string) => {
    setDeletedTodos(() =>
      //idが一致しないものだけを抽出して新しい配列を作成
      deletedTodos.filter((prev) => prev.id !== id)
    );
  };
  return (
    <button
      onClick={() => handleDeleteHistory(id)}
      title="完全に削除"
      aria-label="削除履歴からタスクを完全に削除する"
    >
      <Trash2 className="text-red-400" />
    </button>
  );
}
