import { xhrPromise } from './xhr.js';
import { getNode } from '../dom/getNode.js';
import { isObject, isNumber } from './type.js';
import { insertLast } from '../dom/insert.js';

// function delay(callback, timeout = 1000) {
//   setTimeout(callback, timeout);
// }

// const first = getNode('.first');
// const second = getNode('.second');

// // delay(() => {
// //   first.style.top = '-100px';
// //   delay(() => {
// //     first.style.transform = 'rotate(360deg)';
// //     delay(() => {
// //       first.style.top = '0';
// //     });
// //   });
// // });

// const shouldRejected = false;

// const p = new Promise((resolve, reject) => {
//   if (!shouldRejected) resolve('성공입니다');
//   else reject('실패입니다');
// });

// // p.then((res) => {
// //   console.log(res);
// // });

const defaultOption = {
  shouldRejected: false,
  data: '성공',
  errorMessage: '알 수 없는 오류',
  timeout: 1000,
};

export function delayP(options) {
  let config = { ...defaultOption };
  if (isNumber(options)) {
    config.timeout = options;
  }

  if (isObject(options)) {
    config = { ...defaultOption, ...options };
  }

  const { shouldRejected, data, errorMessage, timeout } = config;

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!shouldRejected) resolve(data);
      else reject(errorMessage);
    }, timeout);
  });
}

// delayP({
//   timeout: 2000,
// }).then((res) => console.log(res));

// delayP(false)
//   .then((res) => {
//     first.style.top = '-100px';
//     return delayP(false);
//   })
//   .then((res) => {
//     first.style.transform = 'rotate(360deg)';
//     return delayP(false);
//   })
//   .then((res) => {
//     first.style.top = '0';
//   });

async function delayA() {
  const p = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('성공');
    }, 2000);
  });

  const result = await p;

  return result; // async 함수는 무조건 Promise 객체를 반환하기에 result에는 문자열 "성공"이 아닌 Promise 객체가 담겨있다.
}

async function getData() {
  const res = await xhrPromise.get('https://pokeapi.co/api/v2/pokemon/6');
  console.log(res);

  insertLast(document.body, `<img src="${res.sprites.other.showdown['front_default']}" alt="" />`);
}

// getData();
