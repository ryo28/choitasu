import type { Todo } from "../type";

export type TodoState<T = Todo> = {
	todos: T[];
	setTodos: (value: T[] | ((prev: T[]) => T[])) => void;
	cleanOldTodos?: () => void;
	error: string | null;
	setError: (error: string | null) => void;
};
