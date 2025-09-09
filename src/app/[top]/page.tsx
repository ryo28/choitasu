"use client";

import { useState } from "react";
import { DeletedTask } from "./_components/DeletedTask";
import { CreateTodos } from "./_components/CreateTodos";

export default function Top() {
  const [todos, setTodos] = useState<string[]>([]);

  return (
    <div>
      <CreateTodos setTodos={setTodos} todos={todos} />
      <div className="p-4">
        <h2 className="text-lg font-bold">タスク</h2>
        <ul>
          {todos.map((todo, index) => (
            <div key={index} className="flex gap-4">
              <li className="border-b py-2">{todo}</li>
              <DeletedTask index={index} setTodos={setTodos} todos={todos} />
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
}
