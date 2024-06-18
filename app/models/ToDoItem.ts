export default class ToDoItem {
  text: string,
  completed: boolean

  constructor(text: string, completed: boolean) {
    this.text = text;
    this.completed = completed
  }
}