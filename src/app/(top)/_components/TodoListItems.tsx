import clsx from "clsx";
import { Checkbox } from "@/components/ui/checkbox";
import { useTodoStore } from "../_store/todoStore";
import { useSelectedIdStore } from "../_store/selectedIdStore";
import { TaskColorChangeButton } from "./TaskColorChangeButton";
import { DeletedTaskButton } from "./DeletedTaskButton";
import { SortableItem } from "./SortableItem";

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
    <ul className="space-y-2">
      {todos.map((todo, index) => (
        <SortableItem key={todo.id} id={todo.id}>
          <div
            className={clsx(
              "flex justify-between py-4 px-4 rounded-2xl hover:opacity-75 items-center",
              todo.color
            )}
          >
            <div className="flex items-center flex-1">
              <Checkbox
                value={todo.text}
                id={`todo-${index}`}
                isSelected={selectedIds.includes(todo.id)}
                onChange={(checked) => {
                  setSelectedIds(
                    (prev) =>
                      checked
                        ? [...prev, todo.id] // チェックされたら追加
                        : prev.filter((id) => id !== todo.id) // 外されたら削除
                  );
                }}
              />
              <label
                htmlFor={`todo-${index}`}
                className={clsx(
                  "ml-3 flex-1",
                  selectedIds.includes(todo.id) ? "line-through" : ""
                )}
              >
                <div>{todo.text}</div>
              </label>
            </div>

            <div className="shrink-0 flex gap-8 pl-2">
              {/* bgカラー変更ボタン */}
              <TaskColorChangeButton index={index} colors={colors} />
              {/* タスク削除しつつ削除履歴に追加ボタン */}
              <DeletedTaskButton id={todo.id} />
            </div>
          </div>
        </SortableItem>
      ))}
    </ul>
  );
}
