const canvas = document.querySelector('#game');
const ctx = canvas.getContext('2d');
ctx.fillStyle = 'green';
ctx.fillRect(10, 10, 100, 100);

canvas.requestFullscreen();
