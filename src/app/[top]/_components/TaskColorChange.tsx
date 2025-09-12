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
  return <button onClick={() => changeColor(index)}>色を変更</button>;
}
