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

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <>
      <main>
        <h1 className="text-5xl flex justify-center items-center my-10 font-bold">
          To Do List
        </h1>
        <div className="p-2 mx-4 md:mx-64 bg-blue-400">
          <Header todos={todos} />
          <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-1/5">
              <TodoForm addTodo={addTodo} />
            </div>
            <div className="w-full md:w-4/5">
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
