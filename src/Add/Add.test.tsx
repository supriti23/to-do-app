import React from "react"; 
import Add from "./Add";
import { render, screen, fireEvent } from "@testing-library/react";

describe("Testing the Add Component is rendering without crashing", () => {
  test("<Add /> testing", () => { 
 
    render(<Add />);
    const addElement = screen.getByPlaceholderText("Add to your To-Do List");
    
    //check if change event is fired on add task input element
    fireEvent.change(addElement, { target: { value: "Go to salon on saturday" } });
    const model = screen.getByDisplayValue("Go to salon on saturday");
    
    //check if click event is being fired on add Task button
    const addButton = screen.getByRole("button");
    fireEvent.click(addButton); 
  
  });
});
