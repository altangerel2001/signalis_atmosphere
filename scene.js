const canvas = document.getElementById('scene');
const ctx = canvas.getContext('2d');

// Load images
const windowImg = new Image();
windowImg.src = 'sprites/window.png';

const towerImg = new Image();
towerImg.src = 'sprites/tower.png';

// Snow particles
const snow = [];
for(let i=0;i<150;i++){
  snow.push({
    x: Math.random()*canvas.width,
    y: Math.random()*canvas.height,
    size: 1 + Math.random()*3,
    speed: 0.5 + Math.random()*1.2
  });
}

function drawSnow(){
  ctx.fillStyle = 'white';
  snow.forEach(s => {
    ctx.fillRect(s.x, s.y, s.size, s.size);
    s.y += s.speed;
    if(s.y>canvas.height) s.y = 0;
  });
}

function animate(){
  // Clear background
  ctx.fillStyle = '#000014';
  ctx.fillRect(0,0,canvas.width,canvas.height);

  // 1️⃣ Draw window first (foreground layer)
  ctx.drawImage(windowImg, 0,0,canvas.width,canvas.height);

  // 2️⃣ Draw snow (behind window if window PNG has transparency)
  drawSnow();

  // 3️⃣ Draw tower (farthest background)
  ctx.drawImage(towerImg, 220,50,200,380);

  // Flickering light (optional)
  ctx.fillStyle = `rgba(255,240,200,${0.05 + Math.random()*0.1})`;
  ctx.fillRect(0,0,canvas.width,canvas.height);

  requestAnimationFrame(animate);
}

animate();
