const canvas = document.getElementById('scene');
const ctx = canvas.getContext('2d');

// Load images
const windowImg = new Image();
windowImg.src = 'sprites/window.png'; // Transparent window layer

const towerImg = new Image();
towerImg.src = 'sprites/tower.png'; // Pixel-art tower

// Snow layers
const snowFront = [];
const snowBack = [];

// Front layer - bigger, faster snow
for(let i=0;i<100;i++){
  snowFront.push({
    x: Math.random()*canvas.width,
    y: Math.random()*canvas.height,
    size: 3 + Math.random()*5,
    speed: 1 + Math.random()*1.5
  });
}

// Back layer - smaller, slower snow
for(let i=0;i<80;i++){
  snowBack.push({
    x: Math.random()*canvas.width,
    y: Math.random()*canvas.height,
    size: 2 + Math.random()*3,
    speed: 0.3 + Math.random()*0.8
  });
}

// Draw snow function
function drawSnow(layer){
  layer.forEach(s => {
    ctx.fillStyle = `rgba(255,255,255,${0.4 + Math.random()*0.6})`;
    ctx.fillRect(s.x, s.y, s.size, s.size);
    s.y += s.speed;
    if(s.y > canvas.height) s.y = 0;
  });
}

// Main animation loop
function animate(){
  // 1️⃣ Background night sky
  ctx.fillStyle = '#000014';
  ctx.fillRect(0,0,canvas.width,canvas.height);

  // 2️⃣ Window layer first (transparent background, харагдах хэсэг нь шилэн мэт)
  ctx.drawImage(windowImg, 0,0,canvas.width,canvas.height);

  // 3️⃣ Snow behind window
  drawSnow(snowFront); // front snow (том snow, хурдан) 
  drawSnow(snowBack);  // back snow (удаан, жижиг)

  // 4️⃣ (Tower-г дараа нь нэмнэ)
  // ctx.drawImage(towerImg, 220,50,200,380);

  // 5️⃣ Flickering light
  ctx.fillStyle = `rgba(255,240,200,${0.05 + Math.random()*0.1})`;
  ctx.fillRect(0,0,canvas.width,canvas.height);

  requestAnimationFrame(animate);
}


