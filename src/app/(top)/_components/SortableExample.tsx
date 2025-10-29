"use client";

import {
	closestCenter,
	DndContext,
	type DragEndEvent,
	DragOverlay,
	type DragStartEvent,
	KeyboardSensor,
	PointerSensor,
	useSensor,
	useSensors,
} from "@dnd-kit/core";
import { restrictToVerticalAxis } from "@dnd-kit/modifiers";
import {
	arrayMove,
	SortableContext,
	sortableKeyboardCoordinates,
	verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { useId, useState } from "react";
import { useTodoStore } from "../_store/todoStore";
import { DragPreview } from "./DragPreview";
import { TodoListItems } from "./TodoListItems";

export default function SortableExample() {
	//履歴表示・非表示の状態管理
	const todos = useTodoStore((state) => state.todos);
	const setTodos = useTodoStore((state) => state.setTodos);

	// ドラッグ中のアイテムIDを保持
	const [activeId, setActiveId] = useState<string | null>(null);

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
		}),
	);

	// ドラッグ開始時の処理
	function handleDragStart(event: DragStartEvent) {
		setActiveId(event.active.id as string);
	}

	// ドラッグ終了時の処理
	function handleDragEnd(event: DragEndEvent) {
		const { active, over } = event;

		if (active.id !== over?.id) {
			setTodos((items) => {
				const oldIndex = items.findIndex((item) => item.id === active.id);
				const newIndex = items.findIndex((item) => item.id === over?.id);

				// 配列の順序を変更
				return arrayMove(items, oldIndex, newIndex);
			});
		}

		setActiveId(null);
	}

	// ドラッグ中のアイテムを取得
	const activeItem = activeId
		? todos.find((todo) => todo.id === activeId)
		: null;

	return (
		<div>
			{/* DndContext: ドラッグ&ドロップの範囲を定義 - 縦方向のみに制限 */}
			<DndContext
				id={useId()}
				sensors={sensors}
				collisionDetection={closestCenter}
				onDragStart={handleDragStart}
				onDragEnd={handleDragEnd}
				modifiers={[restrictToVerticalAxis]} // 縦方向のみの移動に制限
			>
				{/* SortableContext: ソート可能なアイテムのコンテナ */}
				<SortableContext items={todos} strategy={verticalListSortingStrategy}>
					<TodoListItems />
				</SortableContext>

				{/* DragOverlay: ドラッグ中のアイテムのプレビュー */}
				<DragOverlay>
					{activeItem ? <DragPreview todo={activeItem} /> : null}
				</DragOverlay>
			</DndContext>
		</div>
	);
}
