import React from "react";

export const Header = ({ todos }) => {
  const completedTasks = todos.filter((todo) => todo.completed).length;

  return (
    <div className="bg-gray-700 p-6 rounded-t-xl  border-gray-400">
      <h2 className="text-3xl font-semibold text-right text-white">
        {completedTasks === todos.length
          ? "No tienes tareas pendientes"
          : `${completedTasks} / ${todos.length} Tareas realizadas`}
      </h2>
    </div>
  );
};
