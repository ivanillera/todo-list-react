import "./App.css";
import { TodoList } from "./components/TodoList";
import { TodoForm } from "./components/TodoForm";
import { Header } from "./components/Header";
import { useState } from "react";

function App() {
  const [todos, setTodos] = useState([
    { id: 1, title: "Task 1", completed: false },
    { id: 2, title: "Task 2", completed: false },
    { id: 3, title: "Task 3", completed: true },
  ]);

  const addTodo = (title) => {
    setTodos([...todos, { id: Date.now(), title, completed: false }]);
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <>
      <main>
        <h1 className="text-5xl flex justify-center items-center my-10 font-bold">
          To Do List
        </h1>
        <div className="p-12 mx-4">
          <Header todos={todos} />
          <div className="flex flex-row">
            <div className="w-3/4">
              <TodoList todos={todos} toggleTodo={toggleTodo} />
            </div>
            <div className="w-1/4">
              <TodoForm addTodo={addTodo} />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
