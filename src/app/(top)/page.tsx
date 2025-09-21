"use client";

import { useState } from "react";
import { DeletedTaskButton } from "./_components/DeletedTaskButton";
import { CreateTodos } from "./_components/CreateTodos";
import { TaskColorChangeButton } from "./_components/TaskColorChangeButton";
import clsx from "clsx";
import { Todo } from "./type";
import { Checkbox } from "@/components/ui/checkbox";
import { DeletedHistoryButton } from "./_components/DeletedHistoryButton";
import { History } from "lucide-react";

//タスクの背景色の候補
const colors = [
  "bg-red-100",
  "bg-green-100",
  "bg-blue-100",
  "bg-yellow-100",
  "bg-purple-100",
  "bg-white",
];
export default function Top() {
  //タスクを保存する配列
  const [todos, setTodos] = useState<Todo[]>([]);
  //削除したタスクを保存する配列
  const [deletedTodos, setDeletedTodos] = useState<Todo[]>([]);
  //選択されたタスクのidを保存する配列
  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  //履歴表示・非表示の状態管理
  const [showHistory, setShowHistory] = useState(false);

  return (
    <div>
      <div className="flex justify-center items-center gap-2">
        {/* 完了タスクカウンター */}
        <div>{`${selectedIds.length} / ${todos.length}`}</div>
        <span>完了</span>

        {/* 履歴表示・非表示切り替えボタン */}
        <button
          onClick={() => setShowHistory(!showHistory)}
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
      <CreateTodos setItems={setTodos} items={todos} />
      <div className="p-4">
        {/* ボタンで履歴表示・非表示切替「非表示ならtodoを表示」 */}
        {showHistory ? (
          // 削除履歴にタスクがあれば表示、なければメッセージ表示
          deletedTodos.length ? (
            <div>
              <h2 className="text-lg font-bold">削除履歴</h2>
              <ul className="space-y-4 mt-4">
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
                          "select-none",
                          selectedIds.includes(todo.id) ? "line-through" : ""
                        )}
                      >
                        <p>{todo.text}</p>
                      </label>
                    </div>
                    <DeletedHistoryButton
                      id={todo.id}
                      deletedTodos={deletedTodos}
                      setDeletedTodos={setDeletedTodos}
                    />
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            <p>削除したタスクはありません</p>
          )
        ) : (
          // 通常のtodo表示
          <div>
            <h2 className="text-lg font-bold">タスク</h2>
            <ul className="space-y-4 mt-4">
              {todos.map(
                (todo, index) =>
                  todo.text !== "" && (
                    <li
                      key={index}
                      className={clsx(
                        "flex justify-between py-4 px-4 rounded-2xl hover:opacity-75 items-center",
                        todo.color
                      )}
                    >
                      <div className="flex items-center">
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
                            "select-none",
                            selectedIds.includes(todo.id) ? "line-through" : ""
                          )}
                        >
                          <div>{todo.text}</div>
                        </label>
                      </div>

                      <div className="shrink-0 flex gap-8 pl-2">
                        <TaskColorChangeButton
                          index={index}
                          setItems={setTodos}
                          items={todos}
                          colors={colors}
                        />
                        <DeletedTaskButton
                          id={todo.id}
                          setItems={setTodos}
                          items={todos}
                          setSelectedIds={setSelectedIds}
                          setDeletedTodos={setDeletedTodos}
                        />
                      </div>
                    </li>
                  )
              )}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
