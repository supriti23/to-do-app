import React from "react"; 
import FilterByStatus from "./FilterByStatus";
import { render, screen, fireEvent } from "@testing-library/react";

describe("Testing the FilterByStatus Component is rendering without crashing", () => {
  test("<FilterByStatus /> testing", () => { 

    render(<FilterByStatus />);
    const addElement = screen.getByLabelText("Filter By");

    //check if change event is fired on filter by status dropdown
    fireEvent.change(addElement, { target: { value: "done" } });
    screen.getByDisplayValue("Done");
  
  });
});