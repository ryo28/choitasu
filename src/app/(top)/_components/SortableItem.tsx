import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
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
    <div ref={setNodeRef} style={style} {...attributes}>
      <div className="flex items-center gap-2">
        {/* ドラッグハンドル（つまみ）*/}
        <button
          ref={setActivatorNodeRef}
          {...listeners}
          className="p-1 cursor-grab active:cursor-grabbing text-gray-400 hover:text-gray-600 flex-shrink-0"
          aria-label="ドラッグして並び替え"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="rotate-90"
          >
            {/* 3本線のアイコン（つまみ） */}
            <path d="M2 4h12v1H2V4zm0 3.5h12v1H2v-1zM2 11h12v1H2v-1z" />
          </svg>
        </button>

        {/* メインコンテンツ */}
        <div className="flex-1">{children}</div>
      </div>
    </div>
  );
}
