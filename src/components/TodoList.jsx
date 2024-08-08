import React from "react";
import { useState } from "react";
import { TodoItem } from "./TodoItem";

const TodoList = () => {
  const [todos, setTodos] = useState([
    { id: 1, title: "Task 1", completed: false },
    { id: 2, title: "Task 2", completed: false },
    { id: 3, title: "Task 3", completed: true },
  ]);

  return (
    <div>
      <ul>
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
