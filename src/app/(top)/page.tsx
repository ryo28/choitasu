"use client";

import { useState } from "react";
import { DeletedTask } from "./_components/DeletedTask";
import { CreateTodos } from "./_components/CreateTodos";
import { TaskColorChange } from "./_components/TaskColorChange";
import clsx from "clsx";
import { Todo } from "./type";
import { Checkbox } from "@/components/ui/checkbox";

const colors = [
  "bg-red-100",
  "bg-green-100",
  "bg-blue-100",
  "bg-yellow-100",
  "bg-purple-100",
  "bg-white",
];
export default function Top() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  console.log(selectedIds.length, "/", todos.length);

  return (
    <div>
      <div className="flex justify-center items-center gap-2">
        <div>{`${selectedIds.length} / ${todos.length}`}</div>
        <span>完了</span>
      </div>
      <CreateTodos setItems={setTodos} items={todos} />
      <div className="p-4">
        <h2 className="text-lg font-bold">タスク</h2>
        <ul className="space-y-4 mt-4">
          {todos.map(
            (todo, index) =>
              todo.text !== "" && (
                <div
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
                      <div className="wrap-anywhere">{todo.text}</div>
                    </label>
                  </div>
                  <div className="shrink-0 flex gap-8 pl-2">
                    <TaskColorChange
                      index={index}
                      setItems={setTodos}
                      items={todos}
                      colors={colors}
                    />
                    <DeletedTask
                      id={todo.id}
                      setItems={setTodos}
                      items={todos}
                      setSelectedIds={setSelectedIds}
                    />
                  </div>
                </div>
              )
          )}
        </ul>
      </div>
    </div>
  );
}
