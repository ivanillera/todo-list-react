import React, { useState } from "react";
import { IoMdAdd } from "react-icons/io";

export const TodoForm = ({ addTodo }) => {
  const [newTodo, setNewTodo] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newTodo.trim() !== "") {
      addTodo(newTodo);
      setNewTodo("");
    }
  };

  return (
    <div className="bg-gray-300  border-gray-400 p-4 flex flex-col space-y-4 h-full items-center md:rounded-bl-xl md:border-r-2 ">
      <input
        type="text"
        placeholder="Nueva Tarea..."
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleSubmit(e);
          }
        }}
        className="w-full p-2 rounded-lg border-2 border-gray-400 focus:outline-none text-xl"
      />
      <button
        className="bg-blue-100 p-2 rounded-lg w-full flex justify-center items-center text-3xl hover:bg-blue-200 transition-colors duration-300"
        onClick={handleSubmit}
      >
        <IoMdAdd />
      </button>
    </div>
  );
};
