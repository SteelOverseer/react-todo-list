'use client'

import { useState } from "react";
import ToDoItem from "./models/ToDoItem";

export default function Home() {
  const [toDoList, setToDoList] = useState(Array<ToDoItem>)
  
  return (
    <main>
      <div>test</div>
      <button onClick={() => setToDoList(toDoList => [...toDoList, new ToDoItem("test", false)])}>push me</button>

      {
        toDoList.map(toDoItem => (
          <div>{toDoItem.text}</div>
        ))
      }
    </main>
  );
}
