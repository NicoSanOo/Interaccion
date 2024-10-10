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
    const totalSpace = circleRadius * 2 + circleSpacing;

    let currentY = circleRadius + circleSpacing;
    let rowCount = 0;

    while (currentY < canvas.height - circleRadius) {
        let currentX = circleRadius + circleSpacing;
        let columnCount = 0;

        while (currentX < canvas.width - circleRadius) {
            ctx.beginPath();
            ctx.arc(currentX, currentY, circleRadius, 0, Math.PI * 2);
            
            if ((rowCount + columnCount) % 2 === 0) {
                ctx.fillStyle = 'blue';
                ctx.fill();
            } else {
                ctx.strokeStyle = 'blue';
                ctx.stroke();
            }

            ctx.closePath();
            currentX += totalSpace;
            columnCount++;
        }

        currentY += totalSpace;
        rowCount++;
    }
}

window.addEventListener('resize', resizeCanvas);
resizeCanvas();