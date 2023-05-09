/*const canvas = document.querySelector('canvas');
const menuButton = document.getElementById('toggle');
const ctx = canvas.getContext('2d');

function resizeDraws() {
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
    ctx.translate(150, 100);
    drawTriangle();
}

function drawTriangle() {
    const aspectRatioX = 0.56;
    const degreesAlfa = 30;
    const radiansAlfa = degreesAlfa * (Math.PI / 180);
    const adjacent = canvas.width * aspectRatioX;
    const opposite = adjacent * Math.tan(radiansAlfa);

    const triangle = {
        adjacentLeg: {
            startX: 0,
            startY: opposite,
            endX: adjacent,
            endY: opposite,
            length: adjacent,
        },
        oppositeLeg: {
            startX: 0,
            startY: 0,
            endX: 0,
            endY: opposite,
            length: opposite,
        },
        hypotenuse: {
            startX: 0,
            startY: 0,
            endX: adjacent,
            endY: opposite,
            length: adjacent / Math.cos(radiansAlfa),
        },
    };

    for (const key in triangle) {
        const line = triangle[key];
        ctx.beginPath();
        ctx.moveTo(line.startX, line.startY);
        ctx.lineTo(line.endX, line.endY);
        ctx.stroke();
    }

    ctx.beginPath();
    ctx.arc(
        triangle.hypotenuse.endX,
        triangle.hypotenuse.endY,
        70,
        ((180 + degreesAlfa) * Math.PI) / 180,
        Math.PI,
        true
    );
    ctx.stroke();

    console.log('Width: ' + canvas.width + ' Height: ' + canvas.height);
    console.log('Opposite Leg length: ' + triangle.oppositeLeg.length);
    console.log('Adjacent Leg length: ' + triangle.adjacentLeg.length);
    console.log('Hypotenuse length: ' + triangle.hypotenuse.length);
    console.log('Alfa: ' + degreesAlfa);
}
window.addEventListener('resize', () => {
    resizeDraws();
});
menuButton.addEventListener('click', () => {
    resizeDraws();
});

resizeDraws();
*/
console.log('Estou falando do animation.js');
