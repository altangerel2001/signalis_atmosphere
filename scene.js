const canvas = document.getElementById('scene');
const ctx = canvas.getContext('2d');

const windowImg = new Image();
windowImg.src = 'sprites/window.png';

const snowflakes = [];
const snowCount = 100;

// Snowflake үүсгэх
for(let i = 0; i < snowCount; i++) {
  snowflakes.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    radius: Math.random() * 2 + 1,
    speed: Math.random() * 1 + 0.5
  });
}

function drawSnow() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(windowImg, 0, 0, canvas.width, canvas.height);

  ctx.fillStyle = 'white';
  ctx.beginPath();
  for(const flake of snowflakes){
    ctx.moveTo(flake.x, flake.y);
    ctx.arc(flake.x, flake.y, flake.radius, 0, Math.PI * 2);
  }
  ctx.fill();

  // Snowflake update
  for(const flake of snowflakes){
    flake.y += flake.speed;
    if(flake.y > canvas.height) flake.y = 0;
  }

  requestAnimationFrame(drawSnow);
}

windowImg.onload = () => {
  drawSnow();
};
