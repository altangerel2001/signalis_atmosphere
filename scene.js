const canvas = document.getElementById('scene');
const ctx = canvas.getContext('2d');

// Canvas-ийн хэмжээ зурагтай адил
canvas.width = 2380;
canvas.height = 1180;

// Layer 1: window.png
const windowImg = new Image();
windowImg.src = 'sprites/window.png';

// Layer 2: Snow
const snowflakes = [];
const snowCount = 200;

// Snowflake үүсгэх
for (let i = 0; i < snowCount; i++) {
  snowflakes.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    radius: Math.random() * 2 + 1,
    speed: Math.random() * 1 + 0.5
  });
}

function drawScene() {
  // Layer 0: Background (шөнө шиг цэнхэр-саарал)
  ctx.fillStyle = '#3a4a5e'; // цэнхэр-саарал өнгө
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Layer 1: window.png
  ctx.drawImage(windowImg, 0, 0, canvas.width, canvas.height);

  // Layer 2: Snow
  ctx.fillStyle = 'white';
  ctx.beginPath();
  for (const flake of snowflakes) {
    ctx.moveTo(flake.x, flake.y);
    ctx.arc(flake.x, flake.y, flake.radius, 0, Math.PI * 2);
  }
  ctx.fill();

  // Snowflake update
  for (const flake of snowflakes) {
    flake.y += flake.speed;
    if (flake.y > canvas.height) flake.y = 0;
  }

  requestAnimationFrame(drawScene);
}

// Zураг load хийгдсэний дараа animation эхэлнэ
windowImg.onload = () => {
  drawScene();
};
