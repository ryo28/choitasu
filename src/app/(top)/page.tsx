"use client";

import { useState } from "react";
import { CreateTodos } from "./_components/CreateTodos";
import clsx from "clsx";
import { DeletedHistoryButton } from "./_components/DeletedHistoryButton";
import { History } from "lucide-react";
import { RestoreHistoryButton } from "./_components/RestoreHistoryButton";
import { useTodoStore } from "./_store/todoStore";
import { useDeletedTodoStore } from "./_store/deletedTodoStore";
import { useSelectedIdStore } from "./_store/selectedIdStore";
import SortableExample from "./_components/SortableExample";

export default function Top() {
  //タスクを保存する配列
  const todos = useTodoStore((state) => state.todos);
  //削除したタスクを保存する配列
  const deletedTodos = useDeletedTodoStore((state) => state.todos);
  //チェックされたタスクをIDで管理してカウントで使うための配列
  const selectedIds = useSelectedIdStore((state) => state.selectedIds);
  //履歴表示・非表示の状態管理
  const [showHistory, setShowHistory] = useState(false);

  return (
    <div>
      <div className="px-4 h-48">
        {/* 完了タスクカウンター */}
        <div className="flex-1 flex justify-center gap-2 py-2">
          <button
            onClick={() => setShowHistory(!showHistory)}
            className="flex justify-center items-center gap-2"
          >
            <div>{`${selectedIds.length} / ${todos.length}`}</div>
            <span>完了</span>
          </button>

          {/* 履歴表示・非表示切り替えボタン */}
          <button
            onClick={() => setShowHistory(!showHistory)}
            title="履歴表示切替"
            aria-label="削除履歴の表示と非表示を切り替える"
            aria-expanded={showHistory}
            className={`flex items-center gap-1 px-3 py-1 rounded-full text-sm transition-colors ${
              showHistory
                ? "bg-purple-100 text-purple-700"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
          >
            <History size={16} />
            履歴 ({deletedTodos.length})
          </button>
        </div>
        <CreateTodos />
      </div>
      <div className="px-4 pb-4 sm:pb-0 min-h-[calc(100vh-350px)]">
        {/* ボタンで履歴表示・非表示切替「非表示ならtodoを表示」 */}
        {showHistory ? (
          // 削除履歴にタスクがあれば表示、なければメッセージ表示
          deletedTodos.length ? (
            <div>
              <h2 className="text-lg font-bold pb-4 px-4">削除履歴</h2>
              <ul className="space-y-4 overflow-y-auto max-h-[calc(100vh-400px)] md:max-h-[calc(100vh-350px)] py-4 px-2">
                {deletedTodos.map((todo, index) => (
                  <li
                    key={index}
                    className={clsx(
                      "flex justify-between py-4 px-4 rounded-2xl hover:opacity-75 items-center",
                      "bg-red-50 border border-red-200"
                    )}
                  >
                    <div className="flex items-center">
                      <label
                        htmlFor={`deleted-todo-${index}`}
                        className={clsx(
                          selectedIds.includes(todo.id) ? "line-through" : ""
                        )}
                      >
                        <p>{todo.text}</p>
                        <span className="text-xs text-gray-500">
                          {todo.date}
                        </span>
                      </label>
                    </div>
                    <div className="shrink-0 flex gap-8 pl-2">
                      {/* 削除履歴復元ボタン */}
                      <RestoreHistoryButton id={todo.id} />
                      {/* 削除履歴のタスク完全削除ボタン */}
                      <DeletedHistoryButton id={todo.id} />
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            <p className="px-4">削除したタスクはありません</p>
          )
        ) : (
          // 通常のtodo表示
          <div className="min-h-[calc(100vh-350px)]">
            <h2 className="text-lg font-bold px-4">タスク</h2>
            {/* ドラッグ入れ替え可能なリスト */}
            <SortableExample />
          </div>
        )}
      </div>
    </div>
  );
}
