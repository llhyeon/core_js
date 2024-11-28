import { TodoService as s } from '../../service/TodoService.js';

const todoItemTemplate = document.createElement('template');

todoItemTemplate.innerHTML = `
<style>@import url('./components/TodoItem/TodoItem.css');</style>
  <li class="item">
    <input type="checkbox"/>
    <div class="content">
      <input type="text"/>
    </div>
    <button type="button" class="delete-item">X</button>
  </li>
`;

export class TodoItem extends HTMLElement {
  constructor(id, value, checked) {
    super();
    this.attachShadow({ mode: 'open' });
    this.render();

    this.item = this.shadowRoot.querySelector('.item');
    this.checkbox = this.item.querySelector("input[type='checkbox']");
    this.contentInput = this.item.querySelector("input[type='text']");
    this.deleteButton = this.item.querySelector('.delete-item');

    this.id = id;
    this.contentInput.value = value;
    this.checkbox.checked = checked;

    if (checked) {
      this.contentInput.classList.add('done');
    }
  }

  connectedCallback() {
    const value = this.contentInput.value;
    this.contentInput.value = value ? value : 'TASK ' + this.id;

    this.deleteButton.addEventListener('click', () => this.handleDelete());
    this.checkbox.addEventListener('click', () => this.handleToggleChecked());
    this.contentInput.addEventListener('blur', () => this.handleUpdate());
    this.contentInput.addEventListener('keydown', (e) => this.handleEnterPress(e));

    s.AddTodoItem(this.id, this.contentInput.value, this.checkbox.checked);
    this.savaData();
  }

  handleEnterPress({ keyCode }) {
    if (keyCode === 13) {
      if (this.nextElementSibling !== null) {
        const next = this.nextElementSibling.shadowRoot.querySelector("input[type='text']");
        next.focus();
      } else {
        return;
      }
    }
  }

  handleUpdate() {
    s.UpdateTodoItem(this.id, this.contentInput.value);
    this.savaData();
  }

  handleToggleChecked() {
    this.contentInput.classList.toggle('done');
    s.CheckTodoItem(this.id);
    this.savaData();
  }

  handleDelete() {
    gsap.to(this, {
      scale: 0,
      callbackScope: this,
      onComplete() {
        s.RemoveTodoItem(this.id);
        this.remove();
        this.savaData();
      },
    });
  }

  savaData() {
    localStorage.setItem('todo', JSON.stringify(s.state));
  }

  render() {
    this.shadowRoot.append(todoItemTemplate.content.cloneNode(true));
  }
}
