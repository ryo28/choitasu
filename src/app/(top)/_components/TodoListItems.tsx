import clsx from "clsx";
import { Checkbox } from "@/components/ui/checkbox";
import { useSelectedIdStore } from "../_store/selectedIdStore";
import { useTodoStore } from "../_store/todoStore";
import { DeletedTaskButton } from "./DeletedTaskButton";
import { SortableItem } from "./SortableItem";
import { TaskColorChangeButton } from "./TaskColorChangeButton";

//タスクの背景色の候補
const colors = [
	"bg-red-100",
	"bg-green-100",
	"bg-blue-100",
	"bg-yellow-100",
	"bg-purple-100",
	"bg-white",
];
export function TodoListItems() {
	// useSortable は SortableItem 内で使用されるため、ここでは不要
	const todos = useTodoStore((state) => state.todos);
	//チェックされたタスクをIDで管理してカウントで使うための配列
	const selectedIds = useSelectedIdStore((state) => state.selectedIds);
	const setSelectedIds = useSelectedIdStore((state) => state.setSelectedIds);
	return (
		<ul className="max-h-[calc(100vh-400px)] touch-pan-y space-y-2 overflow-y-auto px-2 py-4 md:max-h-[calc(100vh-350px)]">
			{todos
				.slice()
				.reverse()
				.map((todo) => (
					<li key={todo.id}>
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
									<TaskColorChangeButton id={todo.id} colors={colors} />
									{/* タスク削除しつつ削除履歴に追加ボタン */}
									<DeletedTaskButton id={todo.id} />
								</div>
							</div>
						</SortableItem>
					</li>
				))}
		</ul>
	);
}
