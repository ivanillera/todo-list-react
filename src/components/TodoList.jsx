import React from "react";
import { useState } from "react";
import { TodoItem } from "./TodoItem";

export const TodoList = ({ todos, toggleTodo, deleteTodo }) => {
  return (
    <div className="bg-gray-400 p-12 h-full">
      <ul>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
          />
        ))}
      </ul>
    </div>
  );
};
