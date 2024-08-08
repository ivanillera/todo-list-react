import React from "react";

export const TodoItem = ({ todo, toggleTodo }) => {
  return (
    <div>
      <span
        onClick={() => toggleTodo(todo.id)}
        style={{
          cursor: "pointer",
          textDecoration: todo.completed ? "line-through" : "none",
        }}
      >
        {todo.title}
      </span>
    </div>
  );
};
