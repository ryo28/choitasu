import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { GripVertical } from "lucide-react";
import type React from "react";

export function SortableItem({
	id,
	children,
}: {
	id: string;
	children: React.ReactNode;
}) {
	const {
		attributes,
		listeners,
		setNodeRef,
		setActivatorNodeRef, // ドラッグハンドル用
		transform,
		transition,
		isDragging, // ドラッグ中かどうか
	} = useSortable({ id: id });
	//attributes: アクセシビリティ用の属性
	// listeners: ドラッグイベントのリスナー（ハンドル専用に移動）
	// setNodeRef: DOM要素への参照を設定
	// setActivatorNodeRef: ドラッグハンドル専用の参照
	// transform: ドラッグ中の移動量（x, y座標）
	// transition: アニメーション用のトランジション
	// isDragging: DragOverlayで表示中は元の位置を半透明にする

	const style = {
		transform: CSS.Transform.toString(transform), // ドラッグ時の移動を視覚化
		transition, // スムーズなアニメーション
		opacity: isDragging ? 0 : 1, // ドラッグ中は半透明
	};

	return (
		<div
			ref={setNodeRef}
			style={style}
			{...attributes}
			className="sortable-item"
		>
			<div className="flex items-center gap-2">
				{/* ドラッグハンドル（つまみ）- スマホ対応版 */}
				<button
					ref={setActivatorNodeRef}
					{...listeners}
					className="drag-handle flex-shrink-0 cursor-grab touch-none select-none p-3 text-gray-400 hover:text-gray-600 active:cursor-grabbing"
					style={{ touchAction: "none" }} // スクロール無効化
					aria-label="ドラッグして並び替え"
				>
					<GripVertical />
				</button>

				{/* メインコンテンツ */}
				<div className="flex-1">{children}</div>
			</div>
		</div>
	);
}
