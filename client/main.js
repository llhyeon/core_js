import { deleteStorage, getNode, getStorage, setStorage } from './lib/index.js';

const input = getNode('#textField');
const clearButton = getNode('button[data-name="clear"]');

function handleInput() {
  setStorage('userInput', input.value);
}

function handleClear() {
  input.value = '';
  deleteStorage().then(() => {
    alert('삭제 완료');
  });
}

function init() {
  getStorage('userInput').then((res) => {
    input.value = res;
  });
}
clearButton.addEventListener('click', handleClear);
input.addEventListener('input', handleInput);
init();
