import React from "react";

export const TodoItem = ({ todo, toggleTodo, deleteTodo }) => {
  return (
    <div className="flex flex-row ">
      <div
        className="bg-green-200 p-4 mb-2 cursor-pointer w-full inline-block"
        onClick={() => toggleTodo(todo.id)}
      >
        <span className={todo.completed ? "line-through" : "none"}>
          {todo.title}
        </span>
      </div>
      <button
        className="bg-red-200 p-4 mb-2 cursor-pointer"
        onClick={() => deleteTodo(todo.id)}
      >
        Eliminar
      </button>
    </div>
  );
};
