/* ------------------------------ */
/* Array's Methods                */
/* ------------------------------ */

// Array.isArray
const people = [
  {
    id: 0,
    name: 'MJ',
    age: 37,
    job: '음악하는 재미교포',
    imgSrc: 'https://randomuser.me/api/portraits/med/men/75.jpg',
    imgAlt: '대체 텍스트입니다..',
  },
  {
    id: 1,
    name: '이성우',
    age: 13,
    job: '모집운동가',
    imgSrc: 'https://randomuser.me/api/portraits/med/men/60.jpg',
    imgAlt: '대체 텍스트입니다..',
  },
  {
    id: 2,
    name: '윤헌주',
    age: 43,
    job: '물음표살인마',
    imgSrc: 'https://randomuser.me/api/portraits/med/men/30.jpg',
    imgAlt: '대체 텍스트입니다..',
  },
  {
    id: 3,
    name: '김미리',
    age: 36,
    job: '얼리버드',
    imgSrc: 'https://randomuser.me/api/portraits/med/women/30.jpg',
    imgAlt: '대체 텍스트입니다..',
  },
];

/* 요소 순환 ---------------------------- */

// forEach

// people.forEach(({ job }) => {
//   console.log(job);
// });

const span = document.querySelectorAll('span');

span.forEach((ele, index) => {
  let clicked = false;
  ele.addEventListener('click', (e) => {
    if (!clicked) {
      e.currentTarget.style.color = 'red';
    } else {
      e.currentTarget.style.color = 'black';
    }

    clicked = !clicked;
    console.log(index);
  });
});

/* 원형 파괴 ----------------------------- */

// push
// pop
// unshift
// shift
// reverse
// splice
// sort

/* 새로운 배열 반환 ------------------------ */

// concat
// slice
// toSorted
// toReversed
// toSpliced
// map

const mapArr = people.map((item) => {
  const { age } = item;
  return age + 2;
});

const cardTag = people.map((user) => {
  const template = /* html */ `
    <li className="user-card">
      <div>
        <img src="${user.imgSrc}" alt="${user.imgAlt}" />
      </div>
      <ul>
        <li><span class="strong">이름</span> : ${user.name}</li>
        <li><span class="strong">나이</span> : ${user.age}</li>
        <li><span class="strong">직업</span> : ${user.job}</li>
      </ul>
    </li>
  `;

  return template;
});

const ul = document.querySelector('ul');

// cardTag.forEach((tag) => ul.insertAdjacentHTML('beforeend', tag));

/* 요소 포함 여부 확인 ---------------------- */

// indexOf
// lastIndexOf
// includes

/* 요소 찾기 ------------------------------ */

// find
const mj = people.filter((user) => {
  const { name, age } = user;
  return age > 20;
});

// findIndex

/* 요소 걸러내기 --------------------------- */

// filter

/* 요소별 리듀서(reducer) 실행 -------------- */

// reduce

const totalAge = people.reduce((acc, user) => {
  const template = /* html */ `
    <li className="user-card">
      <div>
        <img src="${user.imgSrc}" alt="${user.imgAlt}" />
      </div>
      <ul>
        <li><span class="strong">이름</span> : ${user.name}</li>
        <li><span class="strong">나이</span> : ${user.age}</li>
        <li><span class="strong">직업</span> : ${user.job}</li>
      </ul>
    </li>
  `;

  return acc + template;
}, '');

// reduceRight

/* string ←→ array 변환 ------------------ */

// split
// join

const _arr = '강현 종국 세현 영현';

const stringToArr = _arr.split(' ');
const arrToString = stringToArr.join('');

const products = [
  { name: '냉동 만두', price: 10000, brand: '비비고' },
  { name: '냉동 피자', price: 15000, brand: '오뚜기' },
  { name: '냉동 치킨 너겟', price: 12000, brand: '하림' },
  { name: '냉동 감자튀김', price: 8000, brand: '맥케인' },
  { name: '냉동 새우', price: 18000, brand: '곰곰' },
];

const _forEach = (fn, i) => {
  for (const a of i) fn(a);
};

// _forEach((item) => console.log(item.brand), products);

const _map = (fn, i) => {
  const arr = [];

  for (const a of i) {
    arr.push(fn(a));
  }
  return arr;
};

const newMap = _map((item) => {
  return item.price;
}, products);

const _filter = (fn, i) => {
  const arr = [];
  for (const a of i) {
    if (fn(a)) {
      arr.push(a);
    }
  }

  return arr;
};

const newFilter = _filter((item) => {
  return item.price < 15000;
}, products);

const _reduce = (fn, acc, i) => {
  for (const a of i) {
    acc = fn(acc, a);
  }
  return acc;
};

const newReduce = _reduce((acc, cur) => acc + cur.price, 0, products);
