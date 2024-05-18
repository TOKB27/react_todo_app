import React from "react";

export const TodayTodoList = (props) => {
  const { todayTodos, completeTodo, moveToTodos, deleteTodo, setTodayTodos } =
    props;
  return (
    <section>
      <h2>本日のToDo</h2>
      <ul>
        {todayTodos.map((item, index) => (
          <li key={index}>
            {item}
            <button onClick={() => completeTodo(index)}>完了</button>
            <button
              onClick={() => moveToTodos(todayTodos, setTodayTodos, index)}
            >
              ToDoに戻す
            </button>
            <button
              onClick={() => deleteTodo(todayTodos, setTodayTodos, index)}
            >
              削除
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
};
