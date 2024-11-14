function toRadian(degree) {
  return degree * (Math.PI / 180);
}

function toDegree(radian) {
  return radian * (180 / Math.PI);
}

const circle = document.querySelector('.circle');

let degree = 45;
let radius = 10;

function animate() {
  degree += 0.3;
  radius += 0.1;

  const x = Math.cos(toRadian(degree)) * radius;
  const y = Math.sin(toRadian(degree)) * radius;

  circle.style.transform = `translate(${x}px, ${-y}px)`;

  const tag = `
    <div style="transform:translate(${x}px, ${-y}px")>💙</div>
  `;

  document.querySelector('.space').insertAdjacentHTML('beforeend', tag);
}

// setInterval(animate, 0);
