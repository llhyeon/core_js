// console.log(temp.content.cloneNode(true));

class MyElement extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  handleClick() {
    console.log('click !');
  }

  connectedCallback() {
    this.render();
    this.card = this.shadowRoot.querySelector('.card');

    this.card.addEventListener('click', () => {
      this.handleClick();
    });
  }

  render() {
    this.shadowRoot.innerHTML = /* html */ `
    <style>
      .card {
        background: #eee
      }
    </style>
      <div class="card">
        <h2>Card Title</h2>
        <slot name="me"></slot>
        <p>description..</p>
      </div>
    `;
    console.log(this.shadowRoot);
  }

  disconnectedCallback() {}

  static get observedAttributes() {
    return [];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    console.log(name, oldValue, newValue);
  }
}

customElements.define('my-element', MyElement);
