import React from "react";
import NewToDo from "./components/NewToDo";
import ToDoList from "./components/ToDoList";

export default function App() {
  return (
    <div>
      <ToDoList />
      <NewToDo />
    </div>
  );
}
