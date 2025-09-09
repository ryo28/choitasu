type DeletedTaskProps = {
  index: number;
  setTodos: React.Dispatch<React.SetStateAction<string[]>>;
  todos: string[];
};

export function DeletedTask({ index, setTodos, todos }: DeletedTaskProps) {
  // タスク削除（index指定）
  const handleDelete = (index: number) => {
    setTodos(todos.filter((_, i) => i !== index));
    // filterでindexが一致しないものだけを抽出して新しい配列を作成
  };
  return <button onClick={() => handleDelete(index)}>削除</button>;
}
