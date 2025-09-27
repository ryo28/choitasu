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
import { restrictToVerticalAxis } from "@dnd-kit/modifiers";
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

  // ドラッグ操作のセンサー設定 - スマホ対応強化
  const sensors = useSensors(
    useSensor(PointerSensor, {
      // タッチ操作の感度を調整
      activationConstraint: {
        distance: 8, // 8px移動したらドラッグ開始
      },
    }),
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
    <div>
      {/* DndContext: ドラッグ&ドロップの範囲を定義 - 縦方向のみに制限 */}
      <DndContext
        sensors={sensors}
        collisionDetection={closestCenter}
        onDragEnd={handleDragEnd}
        modifiers={[restrictToVerticalAxis]} // 縦方向のみの移動に制限
      >
        {/* SortableContext: ソート可能なアイテムのコンテナ */}
        <SortableContext items={todos} strategy={verticalListSortingStrategy}>
          <TodoListItems />
        </SortableContext>
      </DndContext>
    </div>
  );
}
