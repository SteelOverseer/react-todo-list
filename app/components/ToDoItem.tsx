import ToDo from "../models/ToDo";

export default function ToDoItem({text, completed} : ToDo) {
  return (
    <span className="flex flex-row justify-between items-center border-2 border-black rounded h-16 mb-2 p-2">
      <div>{text}</div>
      <div>{completed ? 'checkmark' : 'checkbox'}</div>
    </span>
  )
}