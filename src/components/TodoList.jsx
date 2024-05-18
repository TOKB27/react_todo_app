import React from "react";

export const TodoList = (props) => {
  const { todos, moveToToday, deleteTodo, setTodos } = props;
  return (
    <section>
      <h2>ToDo</h2>
      <ul>
        {todos.map((item, index) => (
          <li key={index}>
            {item}
            <button onClick={() => moveToToday(index)}>本日のToDoに移動</button>
            <button onClick={() => deleteTodo(todos, setTodos, index)}>
              削除
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
};
