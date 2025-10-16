import type { Todo } from "../type";

export type TodoState<T = Todo> = {
	todos: T[];
	setTodos: (updater: (prev: T[]) => T[]) => void;
	cleanOldTodos?: () => void;
	error: string | null;
	setError: (error: string | null) => void;
};
