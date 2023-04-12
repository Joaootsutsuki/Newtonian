const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

function resizeDraws() {
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
    ctx.translate(100, 100);
    drawTriangle();
}

function drawTriangle() {
    const aspectRatioX = 0.6451612903;
    const aspectRatioY = 0.61573;
    const triangle = {
        oppositeLeg: {
            startX: 0,
            startY: 0,
            endX: 0,
            endY: canvas.height * aspectRatioY,
            size: canvas.height * aspectRatioY,
        },
        adjacentLeg: {
            startX: 0,
            startY: canvas.height * aspectRatioY,
            endX: canvas.width * aspectRatioX,
            endY: canvas.height * aspectRatioY,
            size: canvas.width * aspectRatioX,
        },
        hypotenuse: {
            startX: 0,
            startY: 0,
            endX: canvas.width * aspectRatioX,
            endY: canvas.height * aspectRatioY,
            size() {
                return Math.sqrt(triangle.oppositeLeg.size ** 2 + triangle.adjacentLeg.size ** 2);
            },
        },
    };
    for (const key in triangle) {
        const line = triangle[key];
        ctx.beginPath();
        ctx.moveTo(line.startX, line.startY);
        ctx.lineTo(line.endX, line.endY);
        ctx.stroke();
    }
    /*
    
    console.log(alfa);
    ctx.beginPath();
    ctx.arc(
        line3.endX,
        line3.endY,
        500,
        ((180 + alfa) * Math.PI) / 180,
        (180 * Math.PI) / 180,
        true
    );
    ctx.stroke();*/
    const alfa = (Math.sin(triangle.oppositeLeg.size / 461, 9) * 180) / Math.PI;
    console.log(alfa);
}
window.addEventListener('resize', () => {
    resizeDraws();
});
resizeDraws();
