/* ---------------------- */
/* Functions → Arrow      */
/* ---------------------- */

const calculateTotal = function (moneyA, moneyB, moneyC, moneyD) {
  return moneyA + moneyB + moneyC + moneyD;
};

let resultX = calculateTotal(10000, 8900, 1360, 2100);
let resultY = calculateTotal(21500, 3200, 9800, 4700);
let resultZ = calculateTotal(9000, -2500, 5000, 11900);

// console.log(resultX);
// console.log(resultY);
// console.log(resultZ);

// 함수 선언 → 화살표 함수 (표현)식
let calcAllMoney = (...rest) => {
  let total = 0;
  for (let i = 0; i < rest.length; i++) {
    total += rest[i];
  }
  console.log(total);

  let total2 = 0;
  for (let i of rest) {
    total2 += i;
  }
  console.log(total2);

  let total3 = 0;
  rest.forEach((ele) => {
    total3 += ele;
  });
  console.log(total3);

  const total4 = rest.reduce((acc, cur) => acc + cur, 0);
  console.log(total4);
};

// calcAllMoney(1000, 2000, 3000, 4000);

// 화살표 함수와 this

/* 다음 함수를 작성해봅니다. -------------------------------------------------- */

// pow(numeric: number, powerCount: number): number;
// let pow = (numeric, powerCount) => {
//   let total = 1;
//   for (let i = 0; i <= powerCount; i++) {
//     total *= numeric;
//   }

//   return total;
// };

const pow = (numeric, powerCount) =>
  Array(powerCount)
    .fill(null)
    .reduce((acc) => {
      return (acc *= numeric);
    }, 1);
// console.log(pow(2, 53));
// repeat(text: string, repeatCount: number): string;
let repeat = (text, repeatCount) => {
  return Array(repeatCount)
    .fill(null)
    .reduce((acc) => (acc += text), '');
};

console.log(repeat('배고파', 3));
