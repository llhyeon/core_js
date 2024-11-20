// import { getNode, clearContents } from './lib/dom/index.js';

import { getNode as $, clearContents, insertLast } from './lib/index.js';

function phase1() {
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
}

function phase2() {
  const calculator = $('.calculator');
  const result = $('.result');
  const clear = $('#clear');
  const numberInputs = [...document.querySelectorAll('input:not(#clear)')];

  function handleInput() {
    const total = numberInputs.reduce((acc, cur) => acc + +cur.value, 0);
    clearContents(result);
    insertLast(result, total);
  }

  function handleClear(e) {
    e.preventDefault();
    numberInputs.forEach(clearContents);
    clearContents(result);
  }

  calculator.addEventListener('input', handleInput); // form 태그도 input 이벤트 바인딩 가능
  clear.addEventListener('click', handleClear);
}

phase2();
