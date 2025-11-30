const canvas = document.getElementById('scene');
const ctx = canvas.getContext('2d');

// Images
const tower = new Image();
tower.src = 'sprites/tower.png';

const windowFrame = new Image();
windowFrame.src = 'sprites/window.png';

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
    if(s.y > canvas.height) s.y = 0;
  });
}

function animate(){
  // Background (night sky)
  ctx.fillStyle = '#000014';
  ctx.fillRect(0,0,canvas.width,canvas.height);

  // Tower in distance
  ctx.drawImage(tower, 200, 50, 240, 400);

  // Snow
  drawSnow();

  // Window overlay
  ctx.drawImage(windowFrame, 0, 0, canvas.width, canvas.height);

  // Optional flickering light
  ctx.fillStyle = `rgba(255,240,200,${0.05 + Math.random()*0.1})`;
  ctx.fillRect(0,0,canvas.width,canvas.height);

  requestAnimationFrame(animate);
}

animate();
