export type TodoProps = {
  setTodos: React.Dispatch<React.SetStateAction<string[]>>;
  todos: string[];
};

export type IndexProps = {
  index: number;
};
