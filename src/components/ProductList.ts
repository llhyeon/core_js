import { LitElement, html, css, CSSResultGroup } from "lit";

import { customElement, property } from "lit/decorators.js";
import resetCss from "../Layout/resetCss";
import getPbImageURL from "../api/getPbImageURL";
import { Item, Product } from "../@types/type";
import gsap from "gsap";

@customElement("product-list")
class ProductList extends LitElement {
  @property({ type: Object }) data: Product = {
    items: [],
    page: 0,
    perPage: 0,
    totalItems: 0,
    totalPages: 0,
  };

  static styles: CSSResultGroup = [
    resetCss,
    css`
      .container {
        margin: 0 auto;

        ul {
          display: grid;
          place-items: center;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 2rem;
          margin: 2.5rem;

          li {
            a {
              max-width: 30vw;
              display: flex;
              flex-direction: column;
              gap: 0.6rem;
            }
          }

          .description {
            font-size: 0.8rem;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
          }

          .price {
            color: gray;
            text-decoration: line-through;
          }

          .discount {
            font-size: 1.2rem;
            color: red;
          }

          .real-price {
            font-weight: bold;
          }
        }

        img {
          width: 100%;
        }
      }
    `,
  ];

  connectedCallback() {
    super.connectedCallback();
    this.fetchData();
  }

  async fetchData() {
    // console.log("data 가져옴");
    const response = await fetch(`${import.meta.env.VITE_PB_API}/collections/products/records`);
    const data = await response.json();

    this.data = data;
  }

  // attributeChangedCallback 과 같은 메서드
  updated(changedProperties: Map<string | number | symbol, unknown>): void {
    super.updated(changedProperties);

    const item = this.renderRoot.querySelectorAll(".product-item");
    if (item.length > 0) {
      gsap.from(item, {
        y: 30,
        opacity: 0,
        stagger: 0.1,
      });
    }
  }

  render() {
    return html`
      <div class="container">
        <ul>
          ${this.data.items.map(
            (item: Item) => html`
              <li class="product-item">
                <a href="/">
                  <figure>
                    <img src=${getPbImageURL(item)} alt="" />
                  </figure>
                  <span class="brand">${item.brand}</span>
                  <span class="description">${item.description}</span>
                  <span class="price">${item.price}</span>
                  <div>
                    <span class="discount">${item.discount}%</span>
                    <span class="real-price"
                      >${((item.price * (100 - item.discount)) / 100).toLocaleString()}원</span
                    >
                  </div>
                </a>
              </li>
            `
          )}
        </ul>
      </div>
    `;
  }
}
