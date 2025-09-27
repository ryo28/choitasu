"use client";

import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  DragEndEvent,
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";

import { useTodoStore } from "../_store/todoStore";
import { TodoListItems } from "./TodoListItems";

export default function SortableExample() {
  //履歴表示・非表示の状態管理
  const todos = useTodoStore((state) => state.todos);
  const setTodos = useTodoStore((state) => state.setTodos);

  // ドラッグ操作のセンサー設定
  const sensors = useSensors(
    useSensor(PointerSensor), // マウス/タッチ操作
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates, // キーボード操作
    })
  );

  // ドラッグ終了時の処理
  function handleDragEnd(event: DragEndEvent) {
    const { active, over } = event;

    if (active.id !== over?.id) {
      setTodos((items) => {
        const oldIndex = items.findIndex((item) => item.id === active.id);
        const newIndex = items.findIndex((item) => item.id === over!.id);

        // 配列の順序を変更
        return arrayMove(items, oldIndex, newIndex);
      });
    }
  }

  return (
    <div className="p-4">
      <h2 className="text-lg font-bold mb-4">ソート可能なTodoリスト</h2>

      {/* DndContext: ドラッグ&ドロップの範囲を定義 */}
      <DndContext
        sensors={sensors}
        collisionDetection={closestCenter}
        onDragEnd={handleDragEnd}
      >
        {/* SortableContext: ソート可能なアイテムのコンテナ */}
        <SortableContext items={todos} strategy={verticalListSortingStrategy}>
          <TodoListItems />
        </SortableContext>
      </DndContext>
    </div>
  );
}
