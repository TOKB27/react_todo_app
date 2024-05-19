import React from "react";

export const TodoInput = (props) => {
  const { todo, setTodo, addTodo, disabled } = props;
  return (
    <header>
      <input
        type="text"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        placeholder="新しいToDoを入力"
        disabled={disabled}
      />
      <button onClick={addTodo} disabled={disabled}>
        追加
      </button>
    </header>
  );
};
