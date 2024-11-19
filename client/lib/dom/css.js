/* -------------------------------------------------------------------------- */
/*                                     css                                    */
/* -------------------------------------------------------------------------- */

function getCss(node, prop) {
  if (isString(node)) node = getNode(node);

  if (!(prop in document.body.style)) syntaxError('prop의 값이 유효하지 않습니다.');

  return getComputedStyle(node)[prop];
}

function setCss(node, prop, value) {
  if (isString(node)) node = getNode(node);
  if (!(prop in document.body.style)) syntaxError('prop의 값이 유효하지 않습니다.');
  if (!value) syntaxError('세 번쨰 인수(value)는 필수 입력값 입니다.');

  if (!isString(value)) typeError('value 인자 값은 문자열이어야 합니다.');

  node.style[prop] = value;
}

const css = (node, prop, value) => (!value ? getCss(node, prop) : setCss(node, prop, value));

/* -------------------------------------------------------------------------- */
/*                                    css class                                   */
/* -------------------------------------------------------------------------- */
/**
 * @function addClass Dom Element에 클래스를 추가하는 함수
 * @param {HTMLElement | string} node
 * @param {string | array | object} className
 * @returns {void}
 */
function addClass(node, className) {
  if (isString(node)) node = getNode(node);

  if (!className) syntaxError('className 값이 올바르지 않습니다.');

  // className이 객체일 때
  if (isObject(className)) {
    for (const classItem of Object.values(className)) {
      node.classList.add(classItem.replaceAll(' ', ''));
    }
    return;
  }

  // className이 배열일 때
  if (isArray(className)) {
    for (const classItem of className) {
      node.classList.add(classItem);
      console.log(classItem);
    }
    return;
  }

  // className이 ,로 구분된 문자열일 때
  if (className.includes(',')) {
    className = className.split(',');

    for (const classItem of className) {
      // 쉼표와 띄어쓰기가 같이 있을 때를 위해 trim 메서드 사용
      node.classList.add(classItem.replaceAll(' ', ''));
    }
    return;
  }

  node.classList.add(className);
}

function removeClass(node, className) {
  if (isString(node)) node = getNode(node);

  if (!isString(className) || !className) syntaxError('className 값이 올바르지 않습니다.');

  node.classList.remove(className);
}

function toggleClass(node, className) {
  if (isString(node)) node = getNode(node);

  if (!isString(className) || !className) syntaxError('className 값이 올바르지 않습니다.');

  node.classList.toggle(className);
}
