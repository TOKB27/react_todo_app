// App.jsx
import React, { createContext, useContext, useState, useEffect } from "react";
import "./styles.css";
import { TodoList } from "./components/TodoList.jsx";
import { TodayTodoList } from "./components/TodayTodoList.jsx";
import { CompletedTodoList } from "./components/CompletedTodoList.jsx";
import { TodoInput } from "./components/TodoInput.jsx";

// コンテキストの作成
const ThemeContext = createContext();

export const App = () => {
  const [theme, setTheme] = useState("light");
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [todayTodos, setTodayTodos] = useState([]);
  const [completedTodos, setCompletedTodos] = useState([]);
  const [showMessage, setShowMessage] = useState(true);

  useEffect(() => {
    // 10秒後にメッセージを非表示にするタイマーを設定
    const timer = setTimeout(() => {
      setShowMessage(false);
    }, 10000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    document.body.className = theme + "-mode";
  }, [theme]);

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
    <ThemeContext.Provider value={theme}>
      <div>{showMessage && <p>こんにちは、今日も頑張りましょう！</p>}</div>
      <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
        テーマ変更
      </button>
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
    </ThemeContext.Provider>
  );
};
