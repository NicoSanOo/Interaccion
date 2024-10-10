const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    drawCircles();
}

function drawCircles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    const circleRadius = 20;
    const circleSpacing = 5;
    const columnLeftX = circleRadius + circleSpacing; // Nuevo: posición X fija en el lado izquierdo
    
    let currentY = circleRadius + circleSpacing;

    while (currentY < canvas.height - circleRadius) {
        ctx.beginPath();
        ctx.arc(columnLeftX, currentY, circleRadius, 0, Math.PI * 2);
        ctx.fillStyle = 'blue';
        ctx.fill();
        ctx.closePath();

        currentY += circleRadius * 2 + circleSpacing;
    }
}

window.addEventListener('resize', resizeCanvas);
resizeCanvas();