// import { getNode, clearContents } from './lib/dom/index.js';

import { getNode, clearContents } from './lib/index.js';

const firstInput = getNode('#firstNumber');
const secondInput = getNode('#secondNumber');
const result = getNode('.result');
const clear = getNode('#clear');

function handleClear(e) {
  e.preventDefault();
  clearContents(firstInput);
  clearContents(secondInput);
  clearContents(result);
}

function handleInput() {
  const firstValue = firstInput.value;
  const secondValue = secondInput.value;

  result.textContent = +firstValue + +secondValue;
}

// function handleCalculator(e) {
//   e.preventDefault();

//   let firstValue = firstInput.value;
//   let secondValue = secondInput.value;

//   result.textContent = Number(firstValue) + Number(secondValue);

//   const clear = getNode('#clear');
// }

// form.addEventListener('submit', handleCalculator);
firstInput.addEventListener('input', handleInput);
secondInput.addEventListener('input', handleInput);
clear.addEventListener('click', handleClear);
