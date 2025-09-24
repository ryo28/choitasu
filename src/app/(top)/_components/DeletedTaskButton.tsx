import { Trash2 } from "lucide-react";
import { SetState } from "../type";
import { format } from "date-fns";
import { ja } from "date-fns/locale";
import { useTodoStore } from "../_store/todoStore";
import { useDeletedTodoStore } from "../_store/deletedTodoStore";

//タスク削除ボタンをしつつ、削除したタスクをdeletedTodosに履歴として追加するコンポーネント
export function DeletedTaskButton({
  id: todoId,
  setSelectedIds,
}: {
  id: string;
  setSelectedIds: SetState<string[]>;
}) {
  const todos = useTodoStore((state) => state.todos);
  const setTodos = useTodoStore((state) => state.setTodos);
  //削除したタスクを保存する配列
  const setDeletedTodos = useDeletedTodoStore((state) => state.setTodos);
  // タスク削除（index指定）
  const handleDeleteTodos = (id: string) => {
    const today = new Date(); //削除日時を追加
    const formattedDate = format(today, "yyyy M月d日 (E) HH:mm", {
      locale: ja,
    }); //フォーマットを指定

    setTodos(() => todos.filter((todo) => todo.id !== id));
    // 選択したid以外を新しい配列に返す(選択したidを削除)
    setSelectedIds((prev) => prev.filter((selectedId) => selectedId !== id));
    //削除したタスクをdeletedTodosに履歴として追加
    setDeletedTodos((prev) => [
      ...prev,
      ...todos
        .filter((todo) => todo.id === id)
        .map((todo) => ({ ...todo, date: formattedDate })), //削除日時を追加してから追加
    ]);
  };
  return (
    <button
      onClick={() => handleDeleteTodos(todoId)}
      title="削除"
      aria-label="タスクを削除する"
    >
      <Trash2 className="text-gray-700" />
    </button>
  );
}
