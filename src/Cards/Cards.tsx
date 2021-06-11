import React, { useEffect } from "react";
import useStore from "../Store";
import CardItem from "./CardItem";

const Cards = () => {
  const store = useStore((state) => state);
  useEffect(() => {
    store.filterStatus(store.status);
  }, [store.status]);
  return (
    <div className="flex justify-start flex-wrap m-8 w-full">
      {store.status === "all" ? (
        <CardItem list={store.toDoList} />
      ) : (
        <CardItem list={store.filterList} />
      )}
    </div>
  );
};

export default Cards;
