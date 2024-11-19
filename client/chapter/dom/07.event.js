/* --------------------- */
/* Event Handling        */
/* --------------------- */

/* 이벤트 핸들링 3가지 방법 --------------------------------------------------- */

// 1. HTML 속성 : onclick="handler()"

// 2. DOM 프로퍼티 : element.onclick = handler

const about = getNode('.about');

function handler(e) {
  console.log(e);
}

about.addEventListener('click', handler);
// about.onclick = handler;
// 3. 메서드 : element.addEventListener(event, handler[, phase])

/* 이벤트 추가/제거 --------------------------------------------------------- */

// - addEventListener
// - removeEventListener

const ground = getNode('.ground');
const ball = getNode('.ball');

function handleBall(e) {
  // console.log(e.offsetX, e.offsetY);

  const { offsetX, offsetY } = e;
  const x = offsetX;
  const y = offsetY;

  const w = ball.offsetWidth;
  const h = ball.offsetHeight;

  ball.style.transform = `translate(${x - w / 2}px, ${y - h / 2}px)`;
}

function handleMove({ offsetX, offsetY }) {
  const x = offsetX;
  const y = offsetY;
  // const w = ball.offsetWidth;
  // const h = ball.offsetHeight;
  // ball.style.transform = `translate(${x - w / 2}px, ${y - h / 2}px)`;

  const template = `
    <div class="emotion" style="top:${y}px; left:${x}px;">
      💩
    </div>
  `;

  insertLast(ground, template);
}

const input = getNode('input');

function handleInput() {}

input.addEventListener('input', handleInput);

// ground.addEventListener('click', handleBall);
// ground.addEventListener('mousemove', handleMove);

function debounce(callback, limit = 500) {
  let timeout;

  return function () {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      callback.call(this);
    }, limit);
  };
}

function throttle(callback, limit = 500) {
  let wait = false;

  return function () {
    if (!wait) {
      callback();
      wait = true;

      setTimeout(() => {
        wait = false;
      }, limit);
    }
  };
}
