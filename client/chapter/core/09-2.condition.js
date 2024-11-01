/* ------------------- */
/* Logical Operators   */
/* ------------------- */

let a = 10;
let b = '';
let value = Boolean(b);

// 논리곱(그리고) 연산자
let AandB = a && b;
// console.log(AandB);

// 논리합(또는) 연산자
let AorB = a || b;
// console.log(AorB);

// 부정 연산자
let reverseValue;

// 조건 처리

// 첫번째 Falsy를 찾는 연산 (&&)
let whichFalsy = true && ' ' && [] && { thisIsFalse: false };
// console.log(whichFalsy);

// 첫번째 Truthy를 찾는 연산 (||)
// let whichTruthy = false || "" || ;

let userId = prompt('ID를 입력하세요');

userId = userId !== null ? userId.toLowerCase() : '';

if (userId === 'admin') {
  let userPw = prompt('비밀번호를 입력하세요');
  userPw = userPw !== null ? userPw.toLowerCase() : '';

  if (userPw === 'themaster') {
    alert('환영합니다!');
  } else if (!userPw || userPw.includes(' ') || userPw === null) {
    alert('취소되었습니다.');
  } else {
    alert('인증에 실패하였습니다.');
  }
} else if (!userId || userId.includes(' ')) {
  alert('취소되었습니다.');
} else {
  alert('올바르지 않은 ID 입니다.');
}
