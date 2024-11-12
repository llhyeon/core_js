class Todo {
  constructor({ input, button, renderPlace }) {
    this.input = document.querySelector(input);
    this.button = document.querySelector(button);
    this.renderPlace = document.querySelector(renderPlace);
    this.handleButton();
  }

  get currentInputTodoData() {
    return this.input.value;
  }

  set currentInputTodoData(value) {
    this.input.value = value;
  }

  // 버튼에 이벤트 등록, input 값이 콘솔창에 나올 수 있도록.

  handleClick() {
    console.log(this.currentInputTodoData);
    this.currentInputTodoData = '';
  }

  handleButton() {
    this.button.addEventListener('click', () => this.handleClick());
  }
}

const todo = new Todo({
  input: '.todo',
  button: '.btn',
  renderPlace: '.todo-list',
});
