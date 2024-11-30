import { LitElement, html, css } from "lit";
import s from "/src/lit/test.css?inline";

class TodoList extends LitElement {
  static properties = {
    // 내부에서만 사용하고 싶은 경우 state: true 프로퍼티를 추가한다.
    _listItems: { state: true },
  };

  constructor() {
    super();
    this._listItems = [
      { text: "독서하기", completed: true },
      { text: "영화보기", completed: false },
    ];
  }

  get input() {
    return this.renderRoot.querySelector(".newItem") ?? null;
  }

  addTodoItem() {
    // lit의 데이터는 immutable 하다. 따라서 push를 하는 게 아니라 새로운 배열을 만들어서 할당한다.
    this._listItems = [
      ...this._listItems,
      {
        text: this.input.value,
        completed: false,
      },
    ];
    this.input.value = "";
  }

  toggleCompleted(item) {
    item.completed = !item.completed;
    console.log(this._listItems);

    this.requestUpdate(); // completed 함수는 프로퍼티가 관리하지 않기 때문에 강제적 리렌더가 필요하다.
  }

  render() {
    return html`
      <style>
        ${s}
      </style>
      <h2 class="title">To Do</h2>
      <ul>
        ${this._listItems.map(
          (item) =>
            html`<li
              class="${item.completed ? "completed" : null}"
              @click=${() => this.toggleCompleted(item)}>
              ${item.text}
            </li>`
        )}
      </ul>
      <label id="newItem">
        <input type="text" class="newItem" id="newItem" aria-label="새로우 아이템" />
      </label>
      <button @click=${this.addTodoItem} type="button">추가</button>
    `;
  }
}

customElements.define("todo-list", TodoList);

app.append(document.createElement("todo-list"));

// 불린 값의 밸류는 앞에 ?를 붙인다. -> ?disabled, ?hidden
