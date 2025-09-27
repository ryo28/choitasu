import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { GripVertical } from "lucide-react";
import React from "react";

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
  } = useSortable({ id: id });
  //attributes: アクセシビリティ用の属性
  // listeners: ドラッグイベントのリスナー（ハンドル専用に移動）
  // setNodeRef: DOM要素への参照を設定
  // setActivatorNodeRef: ドラッグハンドル専用の参照
  // transform: ドラッグ中の移動量（x, y座標）
  // transition: アニメーション用のトランジション

  const style = {
    transform: CSS.Transform.toString(transform), // ドラッグ時の移動を視覚化
    transition, // スムーズなアニメーション
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
          className="drag-handle p-3 cursor-grab active:cursor-grabbing text-gray-400 hover:text-gray-600 flex-shrink-0 touch-none select-none"
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
