// Obtener el contexto del canvas
const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

// Clase para las figuras
class Figure {
    constructor(x, y, size, color, speedX, speedY) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.color = color;
        this.speedX = speedX;
        this.speedY = speedY;
    }

    move() {
        this.x += this.speedX;
        this.y += this.speedY;

        // Comportamiento: rebotar en los bordes
        if (this.x + this.size > canvas.width || this.x < 0) {
            this.speedX = -this.speedX;
        }
        if (this.y + this.size > canvas.height || this.y < 0) {
            this.speedY = -this.speedY;
        }
    }

    draw() {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.size, this.size);
    }
}

// Crear figuras
const figures = [
    new Figure(50, 50, 30, 'red', 2, 1),
    new Figure(200, 100, 40, 'blue', -1, 2),
    new Figure(300, 200, 25, 'green', 1.5, -1.5)
];

// Función de animación
function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    figures.forEach(figure => {
        figure.move();
        figure.draw();
    });

    requestAnimationFrame(animate);
}

// Iniciar animación
animate();