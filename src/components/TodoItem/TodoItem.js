import { LitElement, html } from "lit";

class TodoItem extends LitElement {
  static properties = {
    id: { type: Number },
    value: { type: String },
    checked: { type: Boolean },
  };
  constructor(id, value, checked) {
    super();
    this.id = id;
    this.value = value;
    this.checked = checked;
  }

  handleToggleClick() {
    this.checked = !this.checked;
    this.dispatchEvent(
      new CustomEvent("update", {
        detail: { checked: this.checked },
        bubbles: true,
        composed: true,
      })
    );

    console.log(this.checked);
  }

  handleDelete() {
    this.dispatchEvent(
      new CustomEvent("delete", {
        bubbles: true,
        composed: true,
      })
    );
  }

  handleValueChange(e) {
    this.value = e.target.value;
  }

  handleBlur() {
    this.dispatchEvent(
      new CustomEvent("update", {
        detail: { value: this.value },
        bubbles: true,
        composed: true,
      })
    );
  }

  render() {
    return html`
      <li class="item">
        <input type="checkbox" .checked=${this.checked} @click=${this.handleToggleClick} />
        <input type="text" @input=${this.handleValueChange} @blur=${this.handleBlur} />
        <button type="button" class="delete" @click=${this.handleDelete}>X</button>
      </li>
    `;
  }
}

customElements.define("todo-item", TodoItem);
