import * as React from "react";
import useStore from "../Store";

const Add = () => {
  const store = useStore((state) => state);
  function handleClick() {
    store.addTodo();
    store.status = "all";
  }
  return (
    <span className="flex-row sm:m-2 lg:ml-8 mb-2 mr-4">
      <input
        type="text"
        name="addTask"
        className="w-2/5 sm:w-5/5 border-2 border-green-300 rounded-2xl m-8 h-12 p-4 rounded-lg"
        onChange={(evt) => store.setNewTodo(evt.target.value)}
        value={store.addTask}
        placeholder="Add to your To-Do List"
      />
      <button
        className="bg-indigo-300 rounded w-20 ml-8 h-12 sm:ml-16 hover:bg-indigo-500"
        onClick={() => handleClick()}
      >
        Add Task
      </button>
    </span>
  );
};
export default Add;
