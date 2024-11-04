/* ---------------------------- */
/* Nullish Coalescing Operator  */
/* ---------------------------- */

let emailAddress;
let receivedEmailAddress;

if (emailAddress === undefined || emailAddress === null) {
  receivedEmailAddress = 'user@company.io';
} else {
  receivedEmailAddress = emailAddress;
}

// 3항 연산자 (ternary) 를 사용한 식으로 변경합니다.
receivedEmailAddress =
  emailAddress === undefined || emailAddress === null
    ? 'user@company.io'
    : emailAddress;

// 위 조건 처리문을 nullish 병합 연산자를 사용한 식으로 변경합니다.
receivedEmailAddress = emailAddress ?? 'user@company.id';
/* ?? vs. || ----------------------------------------------------------- */
// || → 첫번째 Truthy 값을 반환
// ?? → 첫번째 정의된(defined) 값을 반환

const WIDTH = '10px';

const userPurchaseCnt = {};

function discountPrice(userState, count, price) {
  const normalUser = 0.1;
  const premiumUser = 0.2;
  const firstPurchase = 0.05;
  const priceSale = 0.05;

  let totalPrice;

  if (!(userState in userPurchaseCnt)) {
    userPurchaseCnt[userState]["purchaseCnt"] = 1;
    // console.log(userPurchaseCnt);
    totalPrice = (price * (1 - firstPurchase)).toFixed();
    // console.log(totalPrice);

  if (userState.includes('프리미엄')) {
    totalPrice = (price * (1 - premiumUser)).toFixed();

    if (price >= 20000) {
      totalPrice = (totalPrice * (1 - priceSale)).toFixed();
    }

    return totalPrice;
  }

  if (userState.includes('일반')) {
    totalPrice = (price * (1 - normalUser)).toFixed();

    if (price >= 20000) {
      totalPrice = (totalPrice * (1 - priceSale)).toFixed();
    }

    return totalPrice;
  }

  return totalPrice;
}

console.log(discountPrice('프리미엄 회원', 1, 23500));
console.log(discountPrice('프리미엄 회원', 1, 23500));
console.log(discountPrice('프리미엄 회원', 1, 23500));
console.log(discountPrice('프리미엄 회원', 1, 23500));
console.log(discountPrice('일반 회원', 1, 23500));
console.log(discountPrice('비회원', 1, 23500));
