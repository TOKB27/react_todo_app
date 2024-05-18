import React from "react";

export const CompletedTodoList = (props) => {
  const { completedTodos, moveToTodos, deleteTodo, setCompletedTodos } = props;
  return (
    <section>
      <h2>完了したToDo</h2>
      <ul>
        {completedTodos.map((item, index) => (
          <li key={index}>
            {item}
            <button
              onClick={() =>
                moveToTodos(completedTodos, setCompletedTodos, index)
              }
            >
              ToDoに戻す
            </button>
            <button
              onClick={() =>
                deleteTodo(completedTodos, setCompletedTodos, index)
              }
            >
              削除
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
};
