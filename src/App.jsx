import "./App.css";
import { TodoList } from "./components/TodoList";
import { TodoForm } from "./components/TodoForm";
import { Header } from "./components/Header";
import { useState, useEffect } from "react";

function App() {
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem("todos");
    return savedTodos ? JSON.parse(savedTodos) : [];
  });

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

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

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <>
      <main className=" select-none">
        <h1 className="text-5xl flex justify-center items-center my-10 font-bold animate-fade animate-duration-300">
          To Do List
        </h1>
        <div className="p-2 mx-4 md:mx-16 lg:mx-32">
          <Header todos={todos} />
          <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-1/5">
              <TodoForm addTodo={addTodo} />
            </div>
            <div className="w-full md:w-4/5 min-h-56">
              <TodoList
                todos={todos}
                toggleTodo={toggleTodo}
                deleteTodo={deleteTodo}
              />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
