import React from "react";
import { Provider } from "react-redux";
import ToDoList from "./ToDoList";
import Store from './redux/store'

export default function App() {
  return (
    <Provider store={Store}>
      <ToDoList />
    </Provider>
  );
}
