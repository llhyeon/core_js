import { insertLast, attr, diceAnimation, getNode, getNodes, endScroll, clearContents } from './lib/index.js';

const [rollingButton, recordButton, resetButton] = getNodes('.buttonGroup > button');
const table = getNode('.recordListWrapper');

// 1. 주사위 굴리기 버튼을 선택하기
// 2. 클릭 이벤트 바인딩

let count = 0;
let total = 0;
function createItem(value) {
  const template = /* html */ `
  <tr>
  <td>${++count}</td>
  <td>${value}</td>
  <td>${(total += value)}</td>
  </tr>;
  `;

  return template;
}

function renderRecordItem() {
  const diceNumber = +attr(getNode('#cube'), 'dice');
  insertLast('tbody', createItem(diceNumber));
}

const handleRollingDice = (() => {
  let isClicked = false;
  let id;

  return () => {
    if (!isClicked) {
      id = setInterval(diceAnimation, 200);
      recordButton.disabled = true;
      resetButton.disabled = true;
    } else {
      clearInterval(id);
      recordButton.disabled = false;
      resetButton.disabled = false;
    }
    isClicked = !isClicked;
  };
})();

const handleShowRecord = () => {
  table.hidden = false;
  renderRecordItem();
  endScroll(table);
};

const handleReset = () => {
  const tbody = getNode('tbody');
  clearContents(tbody);
  count = 0;
  total = 0;
  table.hidden = true;
};

// - 기록버튼을 누르면
// 1. 기록 테이블이 등장하도록
rollingButton.addEventListener('click', handleRollingDice);
recordButton.addEventListener('click', handleShowRecord);
resetButton.addEventListener('click', handleReset);
