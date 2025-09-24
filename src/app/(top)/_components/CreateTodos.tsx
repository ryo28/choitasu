import { useState } from "react";
import { clsx } from "clsx";
import { v4 as uuidv4 } from "uuid";
import { useTodoStore } from "../_store/store";

export function CreateTodos() {
  const todos = useTodoStore((state) => state.todos);
  const setTodos = useTodoStore((state) => state.setTodos);
  const [text, setText] = useState("");
  const [taskColor] = useState("bg-white");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // ページリロード防止
    setTodos(() => [...todos, { id: uuidv4(), text, color: taskColor }]); // TODOリストに追加
    setText(""); // 入力欄をクリア
  };

  return (
    <form onSubmit={handleSubmit} className="p-4">
      <input
        type="text"
        value={text} //入力された値を表示
        onChange={(e) => {
          e.preventDefault();
          setText(e.target.value);
        }}
        placeholder="やりたいことを入力"
        className="border p-2 rounded w-full my-4"
      />
      <button
        type="submit"
        disabled={!text.trim()} // 空白のみの場合は無効化
        aria-label="新しいタスクを追加する"
        className={clsx(
          "bg-blue-500 text-white p-2 rounded",
          text.trim() ? "hover:bg-blue-600" : "opacity-50"
        )}
      >
        追加
      </button>
    </form>
  );
}
