class Todo {
  constructor({ input, button, renderPlace }) {
    this.input = document.querySelector(input);
    this.button = document.querySelector(button);
    this.renderPlace = document.querySelector(renderPlace);
    this.todoListArray = [];
    this.handleButton();
  }

  get currentInputTodoData() {
    return this.input.value;
  }

  set currentInputTodoData(value) {
    this.input.value = value;
  }

  // 버튼에 이벤트 등록, input 값이 콘솔창에 나올 수 있도록.

  addTodoData() {
    this.todoListArray.push(this.currentInputTodoData);
  }

  createTag() {
    return `<li>${this.currentInputTodoData}</li>`;
  }

  #render() {
    this.renderPlace.insertAdjacentHTML('beforeend', this.createTag());
  }

  handleClick() {
    // console.log(this.currentInputTodoData);
    this.#render();
    this.currentInputTodoData = '';
  }

  handleButton() {
    this.button.addEventListener('click', (e) => {
      e.preventDefault();
      this.addTodoData();
      this.handleClick();
    });
  }
}

const todo = new Todo({
  input: '.todo',
  button: '.btn',
  renderPlace: '.todo-list',
});
