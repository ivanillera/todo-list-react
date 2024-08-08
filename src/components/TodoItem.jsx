import { MdClose } from "react-icons/md";
import { FaRegCircle, FaRegCircleCheck } from "react-icons/fa6";

export const TodoItem = ({ todo, toggleTodo, deleteTodo }) => {
  return (
    <div className="flex items-center justify-between p-2 border-t-2  animate-fade animate-duration-300">
      <div
        className="w-full flex items-center gap-5 text-2xl break-all cursor-pointer mx-3"
        onClick={() => toggleTodo(todo.id)}
      >
        {todo.completed ? (
          <FaRegCircleCheck className="text-green-500" />
        ) : (
          <FaRegCircle />
        )}
        <span className={todo.completed ? "line-through" : ""}>
          {todo.title}
        </span>
      </div>
      <MdClose
        className="cursor-pointer text-3xl mr-3 text-red-500"
        onClick={() => deleteTodo(todo.id)}
      />
    </div>
  );
};
