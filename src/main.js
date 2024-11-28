import { btn } from "@/style/style.module.css";
import { getNode, insertLast } from "kind-tiger";
import santa from "@/assets/santa.png"; // export default 구문이기 떄문에 이름 변경이 가능하다

const app = getNode("#app");

const template = /* html */ `
  <figure class="container">
    <img style="width:30vw" src="${santa}" alt="" />
    <figcaption>산타 모자를 쓴 호랑이</figcaption>
  </figure>
  <button class="${btn}" type="button">BUTTON</button>
`;

insertLast(app, template);
