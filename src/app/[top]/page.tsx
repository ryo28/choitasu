"use client";

import { useState } from "react";
import { DeletedTask } from "./_components/DeletedTask";
import { CreateTodos } from "./_components/CreateTodos";

export default function Top() {
  const [todos, setTodos] = useState<string[]>([]);

  return (
    <div>
      <CreateTodos setItems={setTodos} items={todos} />
      <div className="p-4">
        <h2 className="text-lg font-bold">タスク</h2>
        <ul>
          {todos.map((todo, index) => (
            <div
              key={index}
              className="flex justify-between border-b px-4 hover:bg-gray-200 items-center"
            >
              <li className="py-2">{todo}</li>
              <div className="shrink-0">
                <DeletedTask index={index} setItems={setTodos} items={todos} />
              </div>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
}
