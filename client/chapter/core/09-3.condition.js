/* ---------------- */
/* Switch           */
/* ---------------- */

// let a = 15;

// switch (a) {
//   case 10:
//     console.log('a는 10 입니다.');
//     break;

//   case 13:
//     console.log('a는 30 입니다.');
//     break;

//   case 15:
//     console.log('a는 15 입니다.');
//     break;

//   case 20:
//     console.log('a는 20 입니다.');
//     break;

//   default:
//     console.log('숫자가 맞나요 ?');
// }

const MORNING = '아침',
  LUNCH = '점심',
  DINNER = '저녁',
  NIGHT = '밤',
  LATE_NIGHT = '심야',
  DAWN = '새벽';

let thisTime = LUNCH;

switch (thisTime) {
  case MORNING:
    console.log(MORNING);
    break;

  case LUNCH:
    console.log(LUNCH);
    break;

  case DINNER:
    console.log(DINNER);
    break;

  case NIGHT:
    console.log(NIGHT);
    break;

  case LATE_NIGHT:
    console.log(LATE_NIGHT);
    break;

  case DAWN:
    console.log(DAWN);
    break;
  default:
    console.log('NOTHING !!');
}

/* 다양한 상황에 맞게 처리 --------------------------------------------------- */

// 조건 유형(case): '아침'
// '뉴스 기사 글을 읽는다.'

// 조건 유형(case): '점심'
// '자주 가는 식당에 가서 식사를 한다.'

// 조건 유형(case): '저녁'
// '동네 한바퀴를 조깅한다.'

// 조건 유형(case): '밤'
// '친구에게 전화를 걸어 수다를 떤다.'

// 조건 유형(case): '심야'
// 조건 유형(case): '새벽'
// '한밤 중이거나, 새벽이니 아마도 꿈나라에 있을 것이다.'

/* switch문 → if문 변환 --------------------------------------------------- */
if (thisTime === MORNING) console.log(MORNING);
else if (thisTime === LUNCH) console.log(LUNCH);
else if (thisTime === DINNER) console.log(DINNER);
else if (thisTime === LATE_NIGHT) console.log(LATE_NIGHT);
else if (thisTime === DAWN) console.log(DAWN);
else console.log('NOTHING');

/* switch vs. if -------------------------------------------------------- */
console.clear();

function getRandom(n) {
  const value = Math.floor(Math.random() * n);
  return value;
}

function getDay() {
  const value = getRandom(7);
  let day;

  switch (value) {
    case 0:
      day = '일';
      break;

    case 1:
      day = '월';
      break;

    case 2:
      day = '화';
      break;

    case 3:
      day = '수';
      break;

    case 4:
      day = '목';
      break;

    case 5:
      day = '금';
      break;

    case 6:
      day = '토';
      break;

    default:
      console.log('올바른 값을 입력하세요 (1 ~ 6)');
  }
  return day;
}

function weekend() {
  const day = getDay();

  return day.includes('토') || day.includes('일')
    ? `오늘은 주말입니다. ${day}요일이네요 !`
    : `오늘은 평일입니다. ${day}요일이네요 ㅠㅠ`;
}

const today = weekend();
console.log(today);
