const canvas = document.getElementById('scene');
const ctx = canvas.getContext('2d');

canvas.width = 2380;
canvas.height = 1180;

const snowflakes = [];
const snowCount = 500;

const windowImg = new Image();
windowImg.src = 'sprites/window.png';

// Snowflake үүсгэх
for (let i = 0; i < snowCount; i++) {
  snowflakes.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    radius: Math.random() * 2 + 1,
    speedY: Math.random() * 1 + 2, // доош урсах хурд
    speedX: Math.random() * 1 + 0.5 // зүүнээс баруун урсах хурд
  });
}

function drawScene() {
  // Layer 0: Background
  ctx.fillStyle = '#0b2747ff';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Layer 2: Snow
  ctx.fillStyle = 'white';
  ctx.beginPath();
  for (const flake of snowflakes) {
    ctx.moveTo(flake.x, flake.y);
    ctx.arc(flake.x, flake.y, flake.radius, 0, Math.PI * 2);
  }
  ctx.fill();

  // Layer 1: window.png
  ctx.drawImage(windowImg, 0, 0, canvas.width, canvas.height);

  // Snowflake update (wind effect)
  for (const flake of snowflakes) {
    flake.y += flake.speedY;
    flake.x += flake.speedX; // зүүнээс баруун тийш урсгал

    // Canvas-аа давсан тохиолдолд эргүүлэх
    if (flake.y > canvas.height) flake.y = 0;
    if (flake.x > canvas.width) flake.x = 0;
  }

  requestAnimationFrame(drawScene);
}

windowImg.onload = () => {
  drawScene();
};
