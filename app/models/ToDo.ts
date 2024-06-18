export default class ToDo {
  text: string
  completed: boolean

  constructor(text: string, completed: boolean) {
    this.text = text;
    this.completed = completed
  }
}