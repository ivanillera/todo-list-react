// Start of Selection
import React from "react";
import { useState } from "react";
import { TodoItem } from "./TodoItem";

import tumbleweed from "../assets/tumbleweed.gif";

export const TodoList = ({ todos, toggleTodo, deleteTodo }) => {
  return (
    <div className="bg-fafafa h-full md:rounded-br-xl pb-1">
      {todos.length === 0 ? (
        <img src={tumbleweed} alt="No tasks" className="w-64 mx-auto" />
      ) : (
        <ul>
          {todos.map((todo) => (
            <div key={todo.id}>
              <TodoItem
                todo={todo}
                toggleTodo={toggleTodo}
                deleteTodo={deleteTodo}
              />
            </div>
          ))}
        </ul>
      )}
    </div>
  );
};
