import { Trash2 } from "lucide-react";
import { ListStateProps, SetState, Todo } from "../type";
import { format } from "date-fns";
import { ja } from "date-fns/locale";

//タスク削除ボタンをしつつ、削除したタスクをdeletedTodosに履歴として追加するコンポーネント
export function DeletedTaskButton({
  id: todoId,
  setItems: setTodos,
  items: todos,
  setSelectedIds,
  setDeletedTodos,
}: ListStateProps<Todo> & {
  id: string;
  setSelectedIds: SetState<string[]>;
} & { setDeletedTodos: SetState<Todo[]> }) {
  // タスク削除（index指定）
  const handleDeleteTodos = (id: string) => {
    const today = new Date(); //削除日時を追加
    const formattedDate = format(today, "yyyy M月d日 (E) HH:mm", {
      locale: ja,
    }); //フォーマットを指定

    setTodos(todos.filter((todo) => todo.id !== id));
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
