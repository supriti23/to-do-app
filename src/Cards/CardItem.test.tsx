import React from "react";
import CardItem from "./CardItem";
import {ToDo} from "../Store"
import { render, screen, fireEvent } from "@testing-library/react";

describe("Testing the CardItem Component is rendering without crashing", () => {
  test("<CardItem /> testing", () => {
    const arrList : ToDo[] = [
      {
        id: 1,
        task: "Go to salon on Saturday",
        done: "todo",
      },
      {
        id: 2,
        task: "Doctor appointment",
        done: "todo",
      },
    ];
    render(<CardItem list={arrList} />);
     const task = screen.getByText(/Go to salon on Saturday/);
     const del = task.querySelector("button");
     expect(del).toHaveTextContent("Delete");
  });
});
