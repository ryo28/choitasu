import { useState } from "react";
import { ListStateProps, Todo } from "../type";
import { clsx } from "clsx";

export function CreateTodos({ setItems, items }: ListStateProps<Todo>) {
  const [text, setText] = useState("");
  const [taskColor, setTaskColor] = useState("bg-white");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // ページリロード防止
    setItems([...items, { text, color: taskColor }]); // TODOリストに追加
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
