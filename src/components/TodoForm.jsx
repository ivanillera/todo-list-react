import React, { useState } from "react";

export const TodoForm = ({ addTodo }) => {
  const [newTodo, setNewTodo] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); // add this line
    setNewTodo(e.target.value); // no changes here
  };

  return (
    <div className="bg-red-400 p-12 flex flex-col space-y-4 h-full items-center ">
      <input
        type="text"
        placeholder="Nueva tarea"
        value={newTodo}
        onChange={handleSubmit}
        className="w-full "
      />
      <button
        className="bg-blue-100 p-2 rounded-lg w-full "
        onClick={() => addTodo(newTodo)}
      >
        Agregar tarea
      </button>
    </div>
  );
};
