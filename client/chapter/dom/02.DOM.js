/* --------------------------------- */
/* DOM traversal                     */
/* --------------------------------- */

/* 모든 노드에서 사용 */
// - parentNode
// - childNodes
// - firstChild
// - lastChild
// - previousSibling
// - nextSibling

/* 요소 노드에서만 사용 가능 */
// - parentElement
// - children
// - firstElementChild
// - lastElementChild
// - previousElementSibling
// - nextElementSibling

// const second = document.getElementsByClassName('second')[0];
// const _second = document.querySelector('.second');

// console.log(second);

const nav = getNode('.about');
console.log(nav);

// const nav = document.querySelector('nav');
// const about = document.querySelector('nav .about');
// const contact = document.querySelector("li[data-name='contact']");
// const navAll = nav.querySelectorAll('*');

// const li = [...navAll].filter((ele) => {
//   return ele.matches('.about');
// });

// console.log(nav);
// console.log(about);
// console.log(contact);
// console.log(navAll);

/* 문서 대상 찾기 */
// - getElementById
// - getElementsByTagName
// - getElementsByClassName
// - querySelector
// - querySelectorAll
// - closest

/* 문서 대상 확인 */
// - matches
// - contains
