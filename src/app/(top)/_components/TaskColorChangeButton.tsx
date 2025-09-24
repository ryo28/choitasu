import { useTodoStore } from "../_store/store";
import { IndexProps } from "../type";

export function TaskColorChangeButton({
  index,
  colors,
}: IndexProps & { colors: string[] }) {
  const setTodos = useTodoStore((state) => state.setTodos);
  const changeColor = (index: number) => {
    setTodos((prev) =>
      prev.map((todo, i) => {
        if (i !== index) return todo;
        const currentIndex = colors.indexOf(todo.color);

        const nextColor = colors[(currentIndex + 1) % colors.length];
        return { ...todo, color: nextColor };
      })
    );
  };
  return (
    <button
      onClick={() => changeColor(index)}
      title="背景色変更"
      aria-label="タスクの背景色を変更する"
    >
      <div className="w-6 h-6 rounded-full bg-conic/decreasing from-violet-700 via-lime-300 to-violet-700"></div>
    </button>
  );
}
