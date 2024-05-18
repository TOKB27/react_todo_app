import React from "react";

export const TodoInput = (props) => {
  const { todo, setTodo, addTodo } = props;
  return (
    <header>
      <input
        type="text"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        placeholder="新しいToDoを入力"
      />
      <button onClick={addTodo}>追加</button>
    </header>
  );
};
