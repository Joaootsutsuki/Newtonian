const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

canvas.width = canvas.offsetWidth;
canvas.height = canvas.offsetHeight;

ctx.translate(100, 100);
ctx.fillRect(0, 0, 1, 230);
ctx.fillRect(0, 230, 400, 1);
