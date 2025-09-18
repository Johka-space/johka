const ball = document.getElementById('ball');

let posX = Math.random() * window.innerWidth;
let posY = Math.random() * window.innerHeight;
let speed = 1.5 + Math.random(); // Random speed
let angle = Math.random() * 2 * Math.PI;

let velocityX = Math.cos(angle) * speed;
let velocityY = Math.sin(angle) * speed;

function moveBall() {
  const ballWidth = ball.offsetWidth;
  const ballHeight = ball.offsetHeight;

  posX += velocityX;
  posY += velocityY;

  if (posX <= 0 || posX + ballWidth >= window.innerWidth) {
    velocityX *= -1;
    tweakAngle();
  }

  if (posY <= 0 || posY + ballHeight >= window.innerHeight) {
    velocityY *= -1;
    tweakAngle();
  }

  ball.style.left = `${posX}px`;
  ball.style.top = `${posY}px`;

  requestAnimationFrame(moveBall);
}

function tweakAngle() {
  const delta = (Math.random() - 0.5) * 0.5;
  const currentAngle = Math.atan2(velocityY, velocityX) + delta;
  const speed = Math.sqrt(velocityX ** 2 + velocityY ** 2);

  velocityX = Math.cos(currentAngle) * speed;
  velocityY = Math.sin(currentAngle) * speed;
}

moveBall();
