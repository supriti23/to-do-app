import React from "react";
import useStore from "../Store";

const FilterByStatus = () => {
  const store = useStore((state) => state);
  return (
    <div className="flex-row bg-indigo-300 w-36 rounded ml-16">
      <label htmlFor="status" className="m-2">Filter By</label>
      <select className="rounded"
        name="status"
        id="status"
        onChange={(evt) => store.setStatus(evt.target.value)}
        value={store.status}
      >
        <option value="all">All</option>
        <option value="done">Done</option>
        <option value="todo">To-Do</option>
      </select>
    </div>
  );
};

export default FilterByStatus;
