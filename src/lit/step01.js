import { LitElement, html } from "lit";

const app = document.querySelector("#app");

class MyElement extends LitElement {
  // static properties 는 정해진 키워드이고 안 쪽 키워드는 자유이다. 다만 안 쪽의 value 값은 객체여야한다.
  static properties = {
    version: {},
  };
  constructor() {
    super();
    // 새로운 값은 constructor 안에서 선언하여야 한다.
    this.version = "1.0.0";
  }

  render() {
    return html` <div>${this.version}</div> `;
  }
}

customElements.define("my-element", MyElement);
app.append(document.createElement("my-element"));
