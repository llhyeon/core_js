export class Counter extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.state = {
      dataValue: +this.getAttribute('data-value') || 0,
    };
    this.render();
  }

  static get observedAttributes() {
    return ['data-value'];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === 'data-value') {
      this.state.dataValue = +newValue;
      this.render();
    }
  }

  connectedCallback() {
    this.delegationEvent();
  }

  delegationEvent() {
    this.shadowRoot.addEventListener('click', (e) => {
      const target = e.target.closest('button');
      if (!target) return;

      if (target.classList.contains('increment')) {
        this.handleIncrement();
      } else {
        this.handleDecrement();
      }
    });
  }

  handleIncrement() {
    this.state.dataValue += 1;
    this.setAttribute('data-value', this.state.dataValue);
  }

  handleDecrement() {
    this.state.dataValue -= 1;
    this.setAttribute('data-value', this.state.dataValue);
  }

  render() {
    const { dataValue } = this.state;
    this.shadowRoot.innerHTML = `
      <style>
        @import url("./components/Counter/Counter.css");
      </style>
      <div class="counter">
        <button type="button" class="decrement" aria-label="감소 버튼">-</button>
        <span>${dataValue}</span>
        <button type="button" class="increment" aria-label="증가 버튼">+</button>
      </div>
    `;
  }
}
