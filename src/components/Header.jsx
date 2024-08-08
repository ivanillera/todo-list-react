import React from "react";

export const Header = ({ todos }) => {
  const completedTasks = todos.filter((todo) => todo.completed).length;

  return (
    <div className="bg-blue-200 p-6">
      {completedTasks}/{todos.length} Tareas completadas
    </div>
  );
};
