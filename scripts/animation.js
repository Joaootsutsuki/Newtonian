const canvas = document.querySelector('canvas');
const menuButton = document.getElementById('toggle');
const ctx = canvas.getContext('2d');

console.log(canvas, menuButton)
function resizeDraws() {
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
    ctx.translate(100, 100);
    drawTriangle();
}

function drawTriangle() {
    const aspectRatioX = 0.7018; 
    const aspectRatioY = 0.6157;
    const degreesAlfa = 30;
    const radiansAlfa = degreesAlfa * (Math.PI / 180);
    const base = canvas.width * aspectRatioX


    const triangle = {
        adjacentLeg: {
            startX: 0,
            startY: canvas.height * aspectRatioY,
            endX: canvas.width * aspectRatioX,
            endY: canvas.height * aspectRatioY,
            length: base,
        },
        oppositeLeg: {
            startX: 0,
            startY: 0,
            endX: 0,
            endY: canvas.height * aspectRatioY,
            length: base * Math.tan(radiansAlfa)
        },
        hypotenuse: {
            startX: 0,
            startY: 0,
            endX: canvas.width * aspectRatioX,
            endY: canvas.height * aspectRatioY,
            length: base / Math.cos(radiansAlfa)
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
    ctx.beginPath();
    ctx.arc(triangle.hypotenuse.endX, triangle.hypotenuse.endY, 70, ((180 + degreesAlfa) * Math.PI) / 180, Math.PI, true);
    ctx.stroke();*//*
    console.log("Width: " + canvas.width + " Height: " + canvas.height)
    console.log("Opposite Leg length: " + triangle.oppositeLeg.length)
    console.log("Adjacent Leg length: " + triangle.adjacentLeg.length)
    console.log("Hypotenuse length: " + triangle.hypotenuse.length)*/


}
window.addEventListener('resize', () => {
    resizeDraws();
    console.log("sx")
});
/*menuButton.addEventListener('click', () => {
    resizeDraws();
    console.log("sx")
})*/
resizeDraws();