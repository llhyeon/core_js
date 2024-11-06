/* ----------------------- */
/* Functions → Expression  */
/* ----------------------- */

function calcTotal(moneyA, moneyB, moneyC, moneyD) {
  return moneyA + moneyB + moneyC + moneyD;
}

const resultX = calcTotal(10000, 8900, 1360, 2100);
const resultY = calcTotal(21500, 3200, 9800, 4700);
const resultZ = calcTotal(9000, -2500, 5000, 11900);

// console.log(resultX);
// console.log(resultY);
// console.log(resultZ);

// 함수 선언 → 일반 함수 (표현)식
let calculateTotal = function () {
  // let total = 0;

  // for (const price of arguments) {
  //   total += price;
  // }

  const result = Array.from(arguments);
  // const result = Array.prototype.slice.call(arguments, 0, 4);
  return result;
};

// console.log(calculateTotal(100, 1002020, 2929, 4324));

// const result = calculateTotal(10000, 45000, 2500);
// console.log(calculateTotal());

// 익명(이름이 없는) 함수 (표현)식
let anonymousFunctionExpression;

// 유명(이름을 가진) 함수 (표현)식
let namedFunctionExpression;

// 콜백 함수 (표현)식
let callbackFunctionExpression;

// 함수 선언문 vs. 함수 (표현)식

// 즉시 실행 함수 (표현)식
// Immediately Invoked Function Expression
let IIFE;

// (function () {
//   console.log('안녕');
// })();

const MASTER = (function (e) {
  console.log(e);
  let uuid = 'lfeihflesifjesfi';

  return {
    getKey() {
      return uuid;
    },
    setKey(id) {
      uuid = id;
      return uuid;
    },
  };
})(window);
console.log(MASTER);
console.log(MASTER.setKey('fefjefeffefjiefjoeifjeoifjweoifjweoifj'));
console.log(MASTER.getKey());

//  forEach
const arr = Array.prototype.slice.call([1, 2, 3, 4]);

arr.forEach(function (value, index, array) {
  // console.log(array);
});

const result2 = arr.reduce((acc, cur) => acc + cur, 0);
// console.log(result2);

// map
const friends = ['박혜미', '이강현', '공세현', 'MJ'];

const f = friends.map(function (item, index) {
  return '범쌤친구_' + item;
});

// console.log(f);

/* -------------------------------------------------------------------------- */
/*                                    콜백함수                                    */
/* -------------------------------------------------------------------------- */

// const cb = function (condition, success, fail) {
//   if (condition) success();
//   else fail();
// };

// cb(
//   false,
//   function () {
//     console.log('성공입니다');
//   },
//   function () {
//     console.log('실패입니다');
//   }
// );
