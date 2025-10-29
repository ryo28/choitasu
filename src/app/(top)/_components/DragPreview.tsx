import clsx from "clsx";
import { Checkbox } from "@/components/ui/checkbox";
import { useSelectedIdStore } from "../_store/selectedIdStore";
import { TASK_COLORS } from "../constants";
import type { Todo } from "../type";
import { DeletedTaskButton } from "./DeletedTaskButton";
import { SortableItem } from "./SortableItem";
import { TaskColorChangeButton } from "./TaskColorChangeButton";

export function DragPreview({ todo }: { todo: Todo }) {
	//チェックされたタスクをIDで管理してカウントで使うための配列
	const selectedIds = useSelectedIdStore((state) => state.selectedIds);
	const setSelectedIds = useSelectedIdStore((state) => state.setSelectedIds);
	return (
		<SortableItem id={todo.id}>
			<div
				className={clsx(
					"flex items-center justify-between rounded-2xl px-4 py-4 hover:opacity-75",
					todo.color,
				)}
			>
				<div className="flex flex-1 items-center">
					<Checkbox
						value={todo.text}
						id={todo.id}
						isSelected={selectedIds.includes(todo.id)}
						onChange={(checked) => {
							setSelectedIds(
								(prev) =>
									checked
										? [...prev, todo.id] // チェックされたら追加
										: prev.filter((id) => id !== todo.id), // 外されたら削除
							);
						}}
					/>
					<label
						htmlFor={todo.id}
						className={clsx(
							"ml-3 flex-1",
							selectedIds.includes(todo.id) ? "line-through" : "",
						)}
					>
						<div>{todo.text}</div>
					</label>
				</div>

				<div className="flex shrink-0 gap-8 pl-2">
					{/* bgカラー変更ボタン */}
					<TaskColorChangeButton id={todo.id} colors={TASK_COLORS} />
					{/* タスク削除しつつ削除履歴に追加ボタン */}
					<DeletedTaskButton id={todo.id} />
				</div>
			</div>
		</SortableItem>
	);
}
