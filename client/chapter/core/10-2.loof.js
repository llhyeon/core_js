/* -------------------- */
/* Do While Loop        */
/* -------------------- */

// let i = 0;

// do {
//   console.log(i);
//   i++;
// } while (i < 5);

// do ~ while 문 (역순환)
// - prompt 창을 띄워 사용자로 하여금 순환 횟수를 요청
// - 사용자로부터 요청된 횟수 만큼 역방향으로 순환 출력
// - 사용자로부터 요청된 횟수가 0보다 작을 경우,
//   '최초 실행된 메시지입니다. 이 메시지는 조건이 거짓이어도 볼 수 있습니다.' 출력
// - 순환 중단

// let userInput = Number(prompt('반복할 횟수를 입력하세요'));
// do {
//   console.log(
//     '최초 실행된 메시지입니다. 이 메시지는 조건이 거짓이어도 볼 수 있습니다.'
//   );
//   userInput--;
// } while (userInput >= 0);

// do ~ while 문 (순환)
// - 위 do ~ while 문을 순방향으로 순환되도록 설정
// do {
//   console.log(userInput);
// } while (userInput--);

let first = document.querySelector('.first');
let second = document.querySelector('.second');

// function next(node) {
//   if (typeof node === 'string') {
//     node = document.querySelector(`${node}`);
//   }
//   do {
//     // console.log(node);
//     node = node.nextSibling;
//   } while (node.nodeType !== 1);

//   return node;
// }

// console.log(next('.first'));
// console.log(next(first));

function prev(node) {
  if (typeof node === 'string') {
    node = document.querySelector(node);
  }
  do {
    // console.log(node);
    node = node.previousSibling;
  } while (node.nodeType !== 1);

  return node;
}

// console.log(next('.first'));
// console.log(next(first));
console.log(prev('second'));
console.log(prev(second));
// do {
// } while (first.nodeType !== 1);

// console.log(first);
