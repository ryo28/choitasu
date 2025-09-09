import { useState } from "react";
import { TodoProps } from "../type";

export function CreateTodos({ setTodos, todos }: TodoProps) {
  const [text, setText] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // ページリロード防止
    setTodos([...todos, text]); // TODOリストに追加
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
        className="bg-blue-500 text-white p-2 rounded"
      >
        追加
      </button>
    </form>
  );
}
