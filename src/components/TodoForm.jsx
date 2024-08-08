import React, { useState } from "react";

export const TodoForm = ({ addTodo }) => {
  const [newTodo, setNewTodo] = useState("");

  const handleSubmit = (e) => {
    setNewTodo(e.target.value);
  };

  return (
    <div className="bg-red-400 p-12 flex flex-col space-y-4">
      <input
        type="text"
        placeholder="Nueva tarea"
        value={newTodo}
        onChange={handleSubmit}
      />
      <button
        className="bg-blue-100 p-2 rounded-lg"
        onClick={() => addTodo(newTodo)}
      >
        Agregar tarea
      </button>
    </div>
  );
};