export class TodoService {
  static state = [];

  static initializeState(state) {
    this.state = state;
  }

  static AddTodoItem(id, value, checked) {
    this.state.push({ id, value, checked });
  }

  static RemoveTodoItem(id) {
    this.state = this.state.filter((todo) => todo.id !== id);
  }

  static CheckTodoItem(id) {
    this.state.forEach((todo) => {
      if (todo.id === id) todo.checked = !todo.checked;
    });
  }

  static UpdateTodoItem(id, value) {
    const target = this.state.find((todo) => todo.id === id);
    target.value = value;
  }
}
