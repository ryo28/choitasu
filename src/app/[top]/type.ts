export type ListStateProps<T> = {
  setItems: React.Dispatch<React.SetStateAction<T[]>>;
  items: T[];
};

export type IndexProps = {
  index: number;
};
