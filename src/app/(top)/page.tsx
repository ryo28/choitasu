"use client";

import { useState } from "react";
import { DeletedTask } from "./_components/DeletedTask";
import { CreateTodos } from "./_components/CreateTodos";
import { TaskColorChange } from "./_components/TaskColorChange";
import clsx from "clsx";
import { Todo } from "./type";

const colors = [
  "bg-red-100",
  "bg-green-100",
  "bg-blue-100",
  "bg-yellow-100",
  "bg-purple-100",
  "bg-white",
];
export default function Top() {
  const [todos, setTodos] = useState<Todo[]>([{ text: "", color: "bg-white" }]);

  return (
    <div>
      <CreateTodos setItems={setTodos} items={todos} />
      <div className="p-4">
        <h2 className="text-lg font-bold">タスク</h2>
        <ul>
          {todos.map(
            (todo, index) =>
              todo.text !== "" && (
                <div
                  key={index}
                  className={clsx(
                    "flex justify-between border-b px-4 hover:opacity-75 items-center",
                    todo.color
                  )}
                >
                  <li className="py-2">{todo.text}</li>

                  <div className="shrink-0 flex gap-8 pl-8">
                    <TaskColorChange
                      index={index}
                      setItems={setTodos}
                      items={todos}
                      colors={colors}
                    />
                    <DeletedTask
                      index={index}
                      setItems={setTodos}
                      items={todos}
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
