export type ListStateProps<T> = {
  setItems: React.Dispatch<React.SetStateAction<T[]>>;
  items: T[];
};

export type IndexProps = {
  index: number;
};

// Todoアイテム: 個別に色インデックスを保持
export type Todo = {
  id: string;
  text: string;
  color: string;
};
