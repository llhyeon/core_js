import { LitElement, html } from "lit";

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

  render() {
    return html`
      <h2>To Do</h2>
      <ul>
        ${this._listItems.map(({ text }) => html`<li>${text}</li>`)}
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
