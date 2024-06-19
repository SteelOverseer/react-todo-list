'use client'

import { useState } from "react";
import ToDo from "./models/ToDo";
import ToDoItem from "./components/ToDoItem";

export default function ToDoList() {
  const [toDoList, setToDoList] = useState(Array<ToDo>)
  const [toDo, setToDo] = useState(new ToDo("", false))

  function handleToDoChange(e: { target: { value: string; }; }) {
    setToDo({...toDo, text:e.target.value})
  }

  function handleAddToDo() {
    setToDoList(toDoList => [...toDoList, toDo]) 
    setToDo(new ToDo("", false))
  }

  function handleToDoChecked(key: number) {
    let newList = toDoList.map((toDoItem, index) => {
      if(key == index) {
        toDoItem.completed = !toDoItem.completed
      }
      return toDoItem
    })

    setToDoList(newList)
  }
  
  return (
    <div className="flex flex-col items-center">
      <span className="flex flex-row space-x-2 h-10 m-10">
        <input
          className="border-2 border-black"
          value={toDo.text} 
          onChange={handleToDoChange} 
        />
        <button 
          className="border-2 border-black rounded p-2"
          onClick={handleAddToDo}
        >
          add todo
        </button>
      </span>
      <div className="flex flex-col w-96">
        {
          toDoList.map((toDoItem, index) => (
            <ToDoItem 
              key={index}
              id={index}
              toDoItem={toDoItem}
              checked={handleToDoChecked}
            />
          ))
        }
      </div>
    </div>
  );
}
