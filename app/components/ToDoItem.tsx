import ToDo from "../models/ToDo";

export default function ToDoItem({id, toDoItem, checked} : {id: number, toDoItem: ToDo, checked: any}) {
  return (
    <span 
      id={`to-do-${id}`}
      className="flex flex-row justify-between items-center border-2 border-black rounded h-16 mb-2 p-2"
    >
      <div className={toDoItem.completed ? 'line-through' : ''}>{toDoItem.text}</div>
      <input type="checkbox" onChange={() => {checked(id)}}/>
    </span>
  )
}