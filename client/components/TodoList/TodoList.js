import { TodoItem } from '../TodoItem/TodoItem.js';

const todoTemplate = document.createElement('template');

todoTemplate.innerHTML = `
  <style>
    @import url("./components/TodoList/TodoList.css");
  </style>
  <div class="container">
    <h1>TO Do LIST <img src="../assets/checklist.png" alt="체크리스트" /></h1>
    <ul class="todo"></ul>
    <button type="button" class="add-item"> + </button>
  </div>
`;
export class TodoList extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.render();

    this.container = this.shadowRoot.querySelector('.container'); // 렌더링 이후에 잡아야 한다.
    this.todo = this.container.querySelector('.todo');
    this.addButton = this.container.querySelector('.add-item');
  }

  connectedCallback() {
    const tl = gsap.timeline();

    tl.from(this.container.children[0], {
      opacity: 0,
      y: 30,
    });

    tl.from(this.container.children[1], {
      opacity: 0,
      height: 0,
      clearProps: 'all',
    });
    tl.from(this.container.children[2], { opacity: 0, marginTop: 40 });

    this.addButton.addEventListener('click', () => this.handleAddClick());
    this.init();
  }

  handleAddClick() {
    const tag = new TodoItem(Date.now(), '', false);
    this.todo.append(tag);
  }

  init() {
    const initialValues = JSON.parse(localStorage.getItem('todo'));

    initialValues.forEach(({ id, value, checked }) => {
      const tag = new TodoItem(id, value, checked);
      this.todo.append(tag);
    });
  }

  render() {
    this.shadowRoot.append(todoTemplate.content.cloneNode(true)); // template 메서드를 사용할 경우 content.cloneNode(true) 를 설정해주어야 렌더링 된다.
  }
}
