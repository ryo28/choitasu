import { Undo2 } from "lucide-react";
import { ListStateProps, SetState, Todo } from "../type";
import { useTodoStore } from "../_store/store";

//タスク削除ボタンをしつつ、削除したタスクをdeletedTodosに履歴として追加するコンポーネント
export function RestoreHistoryButton({
  id: todoId,
  deletedTodos,
  setDeletedTodos,
}: {
  id: string;
  deletedTodos: Todo[];
} & { setDeletedTodos: SetState<Todo[]> }) {
  const setTodos = useTodoStore((state) => state.setTodos);
  // タスク削除（index指定）
  const handleRestoreTodos = (id: string) => {
    //選択したidのタスク履歴以外を新し配列のタスク履歴に返す(選択した履歴を削除)
    setDeletedTodos(deletedTodos.filter((todo) => todo.id !== id));
    //削除履歴から復元してtodosに追加
    setTodos((prev) => [
      ...prev,
      ...deletedTodos.filter((todo) => todo.id === id),
    ]);
  };
  return (
    <button
      onClick={() => handleRestoreTodos(todoId)}
      title="復元"
      aria-label="タスクを復元する"
    >
      <Undo2 className="text-green-400" />
    </button>
  );
}
