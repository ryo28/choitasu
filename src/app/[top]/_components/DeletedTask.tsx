import { IndexProps, ListStateProps } from "../type";

export function DeletedTask({
  index,
  setItems,
  items,
}: ListStateProps<string> & IndexProps) {
  // タスク削除（index指定）
  const handleDelete = (index: number) => {
    setItems(items.filter((_, i) => i !== index));
    // filterでindexが一致しないものだけを抽出して新しい配列を作成
  };
  return <button onClick={() => handleDelete(index)}>削除</button>;
}
