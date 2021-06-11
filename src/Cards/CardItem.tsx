import React from "react";
import useStore, {ToDo} from "../Store";

const CardItem = ({list} : any) => {
  const store = useStore((state) => state);
  return (
      <>
      {list.map((item : ToDo) => (
        <div
          key={item.id}
          className="w-54 h-54 rounded-md p-4 m-8 bg-gradient-to-r 
          from-green-400 to-blue-300 break-normal "
        >
          Task:
          <br />
          {item.task}
          <div className="flex-row justify-between mt-12 ">
            <input
              type="checkbox"
              className="w-auto h-auto"
              onChange={() => store.markDone(item.id)}
              checked={item.done === "done" ? true : false}
            />
            <label className="mr-4">Done</label>
            <button
              className="bg-red-400 p-1.5 rounded-md p-4 w-auto h-auto hover:bg-red-500"
              onClick={() => store.removeTodo(item.id)}
            >
              Delete
            </button>
          </div>
        </div>
      ))}
      </>
  );
};

export default CardItem;
