import "./App.css";
import TodoList from "./components/TodoList";

function App() {
  return (
    <>
      <main>
        <section>
          <h1 className="text-5xl flex justify-center items-center my-10 font-bold">
            To Do List
          </h1>
          <div className="bg-gray-400 p-12 rounded-lg mx-32 my-10">
            <TodoList />
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
