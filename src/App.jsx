import React, { useState } from "react";
import "./styles.css";
import { TodoList } from "./components/TodoList.jsx";
import { TodayTodoList } from "./components/TodayTodoList.jsx";
import { CompletedTodoList } from "./components/CompletedTodoList.jsx";
import { TodoInput } from "./components/TodoInput.jsx";

export const App = () => {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [todayTodos, setTodayTodos] = useState([]);
  const [completedTodos, setCompletedTodos] = useState([]);

  const addTodo = () => {
    if (todo.trim() !== "") {
      setTodos([...todos, todo]);
      setTodo("");
    }
  };

  const moveToToday = (index) => {
    const newTodo = todos.splice(index, 1)[0];
    setTodos([...todos]);
    setTodayTodos([...todayTodos, newTodo]);
  };

  const completeTodo = (index) => {
    const newTodo = todayTodos.splice(index, 1)[0];
    setTodayTodos([...todayTodos]);
    setCompletedTodos([...completedTodos, newTodo]);
  };

  const moveToTodos = (list, setList, index) => {
    const newTodo = list.splice(index, 1)[0];
    setList([...list]);
    setTodos([...todos, newTodo]);
  };

  const deleteTodo = (list, setList, index) => {
    const newList = [...list];
    newList.splice(index, 1);
    setList(newList);
  };

  return (
    <div>
      <TodoInput
        todo={todo}
        setTodo={setTodo}
        addTodo={addTodo}
        disabled={todos.length >= 5}
      />
      {todos.length >= 5 && (
        <p style={{ color: "red" }}>
          登録できるtodo5個まで。消化してください。
        </p>
      )}
      <main>
        <TodoList
          todos={todos}
          moveToToday={moveToToday}
          deleteTodo={deleteTodo}
          setTodos={setTodos}
        />
        <TodayTodoList
          todayTodos={todayTodos}
          completeTodo={completeTodo}
          moveToTodos={moveToTodos}
          deleteTodo={deleteTodo}
          setTodayTodos={setTodayTodos}
        />
        <CompletedTodoList
          completedTodos={completedTodos}
          moveToTodos={moveToTodos}
          deleteTodo={deleteTodo}
          setCompletedTodos={setCompletedTodos}
        />
      </main>
    </div>
  );
};
