import { ListStateProps, SetState, Todo } from "../type";

export function DeletedTask({
  id: todoId,
  setItems: setTodos,
  items: todos,
  setSelectedIds,
}: ListStateProps<Todo> & {
  id: string;
  setSelectedIds: SetState<string[]>;
}) {
  // タスク削除（index指定）
  const handleDelete = (id: string) => {
    setTodos(todos.filter((todo) => todo.id !== id));
    setSelectedIds((prev) => prev.filter((selectedId) => selectedId !== id));
    // filterでidが一致しないものだけを抽出して新しい配列を作成
  };
  return <button onClick={() => handleDelete(todoId)}>削除</button>;
}
