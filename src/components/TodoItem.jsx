import React from "react";

export const TodoItem = ({ todo }) => {
  return (
    <div>
      <span>{todo.title}</span>
    </div>
  );
};
