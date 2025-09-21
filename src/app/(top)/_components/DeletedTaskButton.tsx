import { Delete } from "lucide-react";
import { ListStateProps, SetState, Todo } from "../type";

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
    setTodos(todos.filter((todo) => todo.id !== id));
    // filterでidが一致しないものだけを抽出して新しい配列を作成
    setSelectedIds((prev) => prev.filter((selectedId) => selectedId !== id));
    //削除したタスクをdeletedTodosに履歴として追加
    setDeletedTodos((prev) => [
      ...prev,
      ...todos.filter((todo) => todo.id === id),
    ]);
  };
  return (
    <button onClick={() => handleDeleteTodos(todoId)}>
      <Delete className="text-gray-700" />
    </button>
  );
}
