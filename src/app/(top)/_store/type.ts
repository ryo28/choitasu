import { Todo } from "../type";

export type TodoState = {
  todos: Todo[];
  setTodos: (updater: (prev: Todo[]) => Todo[]) => void;
};
