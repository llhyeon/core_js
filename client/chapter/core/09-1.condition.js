/* ---------------- */
/* Condition        */
/* ---------------- */

// const userAnswer = prompt("자바스크립트의 '공식' 이름은 무엇일까요 ?");

// if (userAnswer === 'ECMAScript') {
//   alert('정답입니다 !');
// } else {
//   alert('모르셨나요 ? 정답은 ECMAScript 입니다 !');
// }

// const userAnswer = prompt('숫자를 입력하세요');

// if (userAnswer > 0) {
//   console.log(1);
// } else if (userAnswer < 0) {
//   console.log(-1);
// } else {
//   console.log(0);
// }

// const result = (a + b < 4) ? "미만" : "이상";

// let message =
//   login == '직원'
//     ? '안녕하세요'
//     : login == '임원'
//       ? '환영합니다'
//       : login == ''
//         ? '로그인이 필요합니다.'
//         : '';

// 그 영화 봤니?
//     ↓
// Yes | No
//     | 영화 볼거니?
//           ↓
//       Yes | No

function watchingMovie() {
  // 영화 봤니?

  let didWatchMovie = confirm('그 영화 봤니 ?');

  if (didWatchMovie) {
    console.log('그 영화 진짜 재밌더라');
  } else {
    let goingToWatchMovie = confirm('영화 보러 갈래 ?');

    if (goingToWatchMovie) {
      let withWho = prompt('누구랑 볼거니 ?');

      console.log(withWho);

      if (withWho === 'you') {
        console.log('그래 좋아 같이보자');
      } else {
        console.log('왜 나랑 같이 안 봐 ?');
      }
    } else {
      console.log('나도 너 별로야');
    }
  }
}

// 영화 볼거니?

// if 문(statement)

// else 절(clause)

// else if 복수 조건 처리

// 조건부 연산자

// 멀티 조건부 연산자 식

let didWatchMovie = 'no';
let goingToWatchMovie = 'yes';
