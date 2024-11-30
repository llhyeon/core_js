import { LitElement, html } from "lit";

class NameTag extends LitElement {
  static properties = {
    checked: {},
    value: {},
  };
  constructor() {
    super();

    this.checked = false;
    this.value = "hello~~";
  }

  setChecked(e) {
    this.checked = e.target.checked;
    console.log(this.checked);
  }

  render() {
    return html`
      <div>
        <input type="text" .value=${this.value} ?disabled=${this.checked} />
      </div>
      <label id="checkbox">
        <input type="checkbox" id="checkbox" @change=${this.setChecked} />
      </label>
    `;
  }
}

customElements.define("name-tag", NameTag);

app.append(document.createElement("name-tag"));

// 불린 값의 밸류는 앞에 ?를 붙인다. -> ?disabled, ?hidden
