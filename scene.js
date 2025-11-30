const canvas = document.getElementById('scene');
const ctx = canvas.getContext('2d');

// Placeholder tower & window
const towerColor = '#223366'; // simple tower rectangle
const windowColor = 'rgba(200,200,255,0.1)'; // window overlay

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

// Draw snow
function drawSnow(){
  ctx.fillStyle = 'white';
  snow.forEach(s => {
    ctx.fillRect(s.x, s.y, s.size, s.size);
    s.y += s.speed;
    if(s.y>canvas.height) s.y=0;
  });
}

// Main animate loop
function animate(){
  // Background night sky
  ctx.fillStyle = '#000014';
  ctx.fillRect(0,0,canvas.width,canvas.height);

  // Tower in distance
  ctx.fillStyle = towerColor;
  ctx.fillRect(220,50,200,380); // tower rectangle

  // Snow
  drawSnow();

  // Window overlay (foreground)
  ctx.fillStyle = windowColor;
  ctx.fillRect(0,0,canvas.width,canvas.height);

  // Flickering interior light
  ctx.fillStyle = `rgba(255,240,200,${0.05 + Math.random()*0.1})`;
  ctx.fillRect(0,0,canvas.width,canvas.height);

  requestAnimationFrame(animate);
}

animate();
