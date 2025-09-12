import { IndexProps, ListStateProps, Todo } from "../type";

export function DeletedTask({
  index,
  setItems: setTodos,
  items: todos,
}: ListStateProps<Todo> & IndexProps) {
  // タスク削除（index指定）
  const handleDelete = (index: number) => {
    setTodos(todos.filter((_, i) => i !== index));
    // filterでindexが一致しないものだけを抽出して新しい配列を作成
  };
  return <button onClick={() => handleDelete(index)}>削除</button>;
}
