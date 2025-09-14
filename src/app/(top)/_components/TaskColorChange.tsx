import { IndexProps, ListStateProps, Todo } from "../type";

export function TaskColorChange({
  index,
  setItems: setTodos,
  items: todos,
  colors,
}: ListStateProps<Todo> & IndexProps & { colors: string[] }) {
  const changeColor = (index: number) => {
    setTodos((prev) =>
      prev.map((todo, i) => {
        if (i !== index) return todo;
        const currentIndex = colors.indexOf(todo.color);
        console.log(currentIndex);

        const nextColor = colors[(currentIndex + 1) % colors.length];
        return { ...todo, color: nextColor };
      })
    );
  };
  return (
    <button onClick={() => changeColor(index)}>
      <div className="w-6 h-6 rounded-full bg-conic/decreasing from-violet-700 via-lime-300 to-violet-700"></div>
    </button>
  );
}
