import { create } from "zustand";
import { Todo } from "../type";

// //チェックされたタスクをIDで管理してカウントで使うための配列
// const [selectedIds, setSelectedIds] = useState<string[]>([]);
// //履歴表示・非表示の状態管理
// const [showHistory, setShowHistory] = useState(false);

type TodoState = {
  todos: Todo[];
  setTodos: (updater: (prev: Todo[]) => Todo[]) => void;
};
export const useTodoStore = create<TodoState>((set) => ({
  todos: [],
  setTodos: (value: Todo[] | ((prev: Todo[]) => Todo[])) =>
    set((state) => ({
      todos:
        typeof value === "function"
          ? (value as (prev: Todo[]) => Todo[])(state.todos)
          : value,
    })),
}));
export const useDeletedTodoStore = create<TodoState>((set) => ({
  todos: [],
  setTodos: (value: Todo[] | ((prev: Todo[]) => Todo[])) =>
    set((state) => ({
      todos:
        typeof value === "function"
          ? (value as (prev: Todo[]) => Todo[])(state.todos)
          : value,
    })),
}));
