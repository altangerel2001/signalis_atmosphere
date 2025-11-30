const canvas = document.getElementById('scene');
const ctx = canvas.getContext('2d');

// Load tower and window pixel art
const tower = new Image();
tower.src = 'sprites/tower.png'; // pixel art tower

const windowFrame = new Image();
windowFrame.src = 'sprites/window.png'; // transparent window frame

// Snow particles (parallax layers)
const snowFront = [];
const snowBack = [];
for(let i=0;i<80;i++){
  snowFront.push({x:Math.random()*640, y:Math.random()*480, size:1+Math.random()*2, speed:1+Math.random()*1.5});
}
for(let i=0;i<50;i++){
  snowBack.push({x:Math.random()*640, y:Math.random()*480, size:1+Math.random()*2, speed:0.3+Math.random()*0.8});
}

function drawSnow(layer){
  ctx.fillStyle = 'white';
  layer.forEach(s => {
    ctx.fillRect(s.x, s.y, s.size, s.size);
    s.y += s.speed;
    if(s.y>canvas.height) s.y = 0;
  });
}

// Main animate loop
function animate(){
  // Background night sky
  ctx.fillStyle = '#000014';
  ctx.fillRect(0,0,canvas.width,canvas.height);

  // Tower in distance
  ctx.drawImage(tower, 220,50,200,380);

  // Snow layers
  drawSnow(snowBack);
  drawSnow(snowFront);

  // Window overlay (foreground)
  ctx.drawImage(windowFrame, 0,0,canvas.width,canvas.height);

  // Flickering interior light
  ctx.fillStyle = `rgba(255,240,200,${0.05 + Math.random()*0.1})`;
  ctx.fillRect(0,0,canvas.width,canvas.height);

  requestAnimationFrame(animate);
}

animate();
