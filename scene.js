const canvas = document.getElementById('scene');
const ctx = canvas.getContext('2d');

// Load window image
const windowImg = new Image();
windowImg.src = 'sprites/window.png';

// Draw window when loaded
windowImg.onload = () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(windowImg, 0, 0, canvas.width, canvas.height);
};
