export type SetState<T> = React.Dispatch<React.SetStateAction<T>>;

export type ListStateProps<T> = {
	setItems: SetState<T[]>;
	items: T[];
};

// Todoアイテム: 個別に色インデックスを保持bgカラー用
//idは識別用、textは表示用
export type Todo = {
	id: string;
	text: string;
	color: string;
};
//削除したタスク用の型、日付を追加
export type DeletedTodo = Todo & {
	date: string;
};
