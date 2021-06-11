import React from "react";
import Add from "./Add/Add";
import Cards from "./Cards/Cards";
import FilterByStatus from "./FilterByStatus/FilterByStatus";
function App() {
  return (
    <>
      <h1 className="font-extrabold lg:text-5xl font-sans text-left underline ml-16 mt-8 text-green-500">
        To-Do List
      </h1>
      <Add />
      <FilterByStatus />
      <Cards />
    </>
  );
}

export default App;
