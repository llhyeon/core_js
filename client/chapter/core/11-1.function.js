/* ---------------------------- */
/* Functions → Declaration      */
/* ---------------------------- */

// console.log('총 합 = ', 10000 + 8900 + 1360 + 2100);
// console.log('총 합 = ', 21500 + 3200 + 9800 + 4700);
// console.log('총 합 = ', 3800 + 15200 - 500 + 80200);
// console.log('총 합 = ', 560 + 5000 + 27100 + 10200);
// console.log('총 합 = ', 9000 - 2500 + 5000 + 11900);

// 함수 선언
// function getRandomValue() {
//   return Math.random() > 0.5 ? 1 : 0;
// }

// function calcPrice(
//   priceA,
//   priceB = getRandomValue(),
//   priceC = getRandomValue(),
//   priceD = getRandomValue()
// ) {
//   if (!priceA) {
//     const err = new Error('PriceA의 인자 값이 올바르지 않습니다.');
//     throw err;
//   }
//   const result = priceA + priceB + priceC + priceD;
//   return result;
// }

// // 함수 호출

// const result = calcPrice();
// console.log(result);

// 함수 값 반환

// 매개 변수

// 매개 변수 (parameter) vs. 전달 인수 (argument)

// 외부(전역 포함), 지역 변수

// 매개 변수 기본 값

// 좋은 함수 작성 여건

/* 다음 함수를 작성해봅니다. -------------------------------------------------- */

// rem(pxValue: number|string, base: number):string;
function rem(pxValue, base = 16) {
  if (!pxValue) throw new Error('pxValue은 필수 입력 값 입니다.');
  if (typeof base !== 'number') throw new Error('base의 타입은 정수여야 합니다.');

  const result = `${parseInt(pxValue) / base}rem`;
  return result;
}
// console.log(rem(25));
// console.log(rem('20px'));
// console.log(rem('30px', 10));
// console.log(rem('30px'));

// css(node: string, prop: string, value: number|strung) : string;
function setCss(node, prop, value) {
  if (!node || !prop || !value) throw new Error('인자 값을 제대로 입력하지 않았습니다.');

  if (typeof node !== 'string') throw new Error('node인자 값의 타입은 문자열이어야 합니다.');

  if (!(prop in document.body.style)) throw new ReferenceError('유효한 CSS 속성 값이 아닙니다.');

  if (typeof value === 'string' || typeof value === 'number') {
    const targetNode = document.querySelector(node);

    targetNode.style[prop] = value;
  }
}

setCss('.first', 'fontSize', '100px');
setCss('.second', 'color', 'orange');

// node의 값을 'h1'으로 받았을 경우
// setCss('h1', 'color', 'blue');

// node가 없거나 document.ELEMENT_NODE가 아닐 경우

// prop의 값이 string이 아닐 경우

// prop의 값이 style 속성이 아닐 경우

// value의 값이 number가 아닌 경우

// 클릭 이벤트를 이용한 h1의 폰트 크기를 증가시키는 함수와 감소시키는 함수 만들기

// 1. h1,plus,minus 요소를 변수로 지정한다.
// 2. h1의 폰트 사이즈를 가져온다.
// 3. 증가함수와 감소함수를 만든다.
// 4. 클릭 이벤트와 바인딩한다.

const second = document.querySelector('.second');

function getCss(node, styleValue) {
  if (!node || !styleValue) throw new Error('인자 값은 모두 필수요소입니다.');
  let target = node;

  if (typeof node === 'string') {
    target = document.querySelector(node);
  }

  if (!(styleValue in document.body.style))
    throw new ReferenceError(`${styleValue}는 올바른 CSS 속성 값이 아닙니다.`);
  const result = target.style[styleValue];
  return result;
}

function css(node, prop, value) {
  return !value ? getCss(node, prop) : setCss(node, prop, value);
}
css('.second', 'fontSize', '3rem');
console.log(css('.first', 'font-size'));
