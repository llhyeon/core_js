import { LitElement, html, css, CSSResultGroup } from "lit";
import { customElement } from "lit/decorators.js";
import resetCss from "./resetCss";

@customElement("c-header")
class Header extends LitElement {
  static styles: CSSResultGroup = [
    resetCss,
    css`
      header {
        display: flex;
        justify-content: space-between;
        background-color: #fff;
        color: black;
        padding: 1rem;

        .logo {
          display: flex;
          align-items: center;
          gap: 0.3rem;

          span {
            font-size: 1rem;
          }
        }

        nav {
          display: flex;
          align-items: center;

          ul {
            display: flex;
            gap: 1rem;
          }
        }
      }
    `,
  ];

  render() {
    return html`
      <header>
        <h1 class="logo">
          <a href="/"><img width="30" src="/logo.png" alt="3D 호랑이" /></a>
          <span>HypeCart</span>
        </h1>
        <nav>
          <ul>
            <li><a href="#">About</a></li>
            <li><a href="/src/pages/product/">Product</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">Login</a></li>
          </ul>
        </nav>
      </header>
    `;
  }
}
