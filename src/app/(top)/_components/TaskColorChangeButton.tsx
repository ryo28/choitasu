import { useTodoStore } from "../_store/todoStore";

export function TaskColorChangeButton({
  id: todoId,
  colors,
}: {
  id: string;
  colors: string[];
}) {
  const setTodos = useTodoStore((state) => state.setTodos);
  const changeColor = (todoId: string) => {
    setTodos((prev) =>
      prev.map((todo) => {
        if (todo.id !== todoId) return todo;
        const currentIndex = colors.indexOf(todo.color);

        const nextColor = colors[(currentIndex + 1) % colors.length];
        return { ...todo, color: nextColor };
      })
    );
  };
  return (
    <button
      onClick={() => changeColor(todoId)}
      title="背景色変更"
      aria-label="タスクの背景色を変更する"
    >
      <div className="w-6 h-6 rounded-full bg-conic/decreasing from-violet-700 via-lime-300 to-violet-700"></div>
    </button>
  );
}
