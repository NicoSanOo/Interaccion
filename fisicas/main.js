// Módulos de Matter.js
const { Engine, Render, Runner, Bodies, Composite, Events, Vector } = Matter;

// Crear el motor
const engine = Engine.create({
    gravity: { scale: 0 } // Desactivar la gravedad
});

// Crear el renderizador
const render = Render.create({
    element: document.getElementById('canvas-container'),
    engine: engine,
    options: {
        width: window.innerWidth,
        height: window.innerHeight,
        wireframes: false,
        background: '#f0f0f0'
    }
});

// Crear el núcleo estático
const nucleus = Bodies.circle(window.innerWidth / 2, window.innerHeight / 2, 30, {
    isStatic: true,
    render: { 
        fillStyle: 'yellow',
        strokeStyle: 'orange',
        lineWidth: 3
    }
});

// Crear círculos orbitantes y datos de órbitas
const orbits = [];
const orbitData = [];
const colors = ['#FF6B6B', '#4ECDC4', '#45B7D1', '#FFA07A', '#98D8C8', '#F39C12', '#8E44AD', '#3498DB', '#2ECC71', '#E74C3C'];

for (let i = 0; i < 12; i++) { // Cambiamos a 10 órbitas
    const radius = 15;
    const a = 150 + i * 40; // Semieje mayor (varía para las nuevas órbitas)
    const b = a * (0.5 + Math.random() * 0.5); // Semieje menor (varía para que se crucen las órbitas)
    const c = Math.sqrt(a * a - b * b); // Distancia del centro al foco
    const baseSpeed = 0.02 - i * 0.002; // Velocidad base
    const startAngle = Math.random() * Math.PI * 2;
    
    const orbit = Bodies.circle(window.innerWidth / 2 + a - c, window.innerHeight / 2, radius, {
        restitution: 1.2, // Aumentamos el valor de restitución para más rebote
        render: { 
            fillStyle: colors[i],
            strokeStyle: 'white',
            lineWidth: 2
        }
    });
    
    orbits.push(orbit);
    orbitData.push({ a, b, c, baseSpeed, angle: startAngle });
}

// Añadir todos los cuerpos al mundo
Composite.add(engine.world, [nucleus, ...orbits]);

// Ejecutar el motor y el renderizador
Engine.run(engine);
Render.run(render);

// Función para calcular la velocidad
function calculateSpeed(baseSpeed, currentDistance, a) {
    const minDistance = a * 0.4;
    const maxDistance = a * 1.6;
    const speedFactor = 1 + 2 * (maxDistance - currentDistance) / (maxDistance - minDistance);
    return baseSpeed * speedFactor;
}

// Función para actualizar las posiciones de los círculos orbitantes
function updateOrbits() {
    for (let i = 0; i < orbits.length; i++) {
        const data = orbitData[i];
        
        // Calcular la posición actual
        const x = window.innerWidth / 2 - data.c + data.a * Math.cos(data.angle);
        const y = window.innerHeight / 2 + data.b * Math.sin(data.angle);
        
        // Calcular la distancia actual al núcleo
        const dx = x - (window.innerWidth / 2);
        const dy = y - (window.innerHeight / 2);
        const currentDistance = Math.sqrt(dx * dx + dy * dy);
        
        // Calcular la velocidad basada en la distancia
        const speed = calculateSpeed(data.baseSpeed, currentDistance, data.a);
        
        // Actualizar el ángulo
        data.angle += speed;
        
        // Actualizar la posición
        Matter.Body.setPosition(orbits[i], { x, y });
    }
    requestAnimationFrame(updateOrbits);
}

// Iniciar la animación
updateOrbits();

// Manejar el redimensionamiento de la ventana
window.addEventListener('resize', () => {
    render.canvas.width = window.innerWidth;
    render.canvas.height = window.innerHeight;
    Matter.Body.setPosition(nucleus, { x: window.innerWidth / 2, y: window.innerHeight / 2 });

    // Recalcular las órbitas para que se ajusten al nuevo tamaño
    for (let i = 0; i < orbitData.length; i++) {
        const data = orbitData[i];
        data.c = Math.sqrt(data.a * data.a - data.b * data.b); // Actualizar la distancia focal
    }
});

// Manejar colisiones entre las bolas
Events.on(engine, 'collisionStart', event => {
    const pairs = event.pairs;
    
    pairs.forEach(pair => {
        const { bodyA, bodyB } = pair;
        
        if (orbits.includes(bodyA) && orbits.includes(bodyB)) {
            // Desviación al colisionar
            const deviationDuration = 5000; // Mayor duración fuera de órbita

            // Aplicar una fuerza mayor y rotación a ambos cuerpos en direcciones opuestas
            const forceDirection = Vector.sub(bodyA.position, bodyB.position);
            const normalizedForce = Vector.normalise(forceDirection);

            // Aumentar la fuerza aplicada para una colisión más exagerada
            Matter.Body.applyForce(bodyA, bodyA.position, Vector.mult(normalizedForce, 0.1));
            Matter.Body.applyForce(bodyB, bodyB.position, Vector.mult(normalizedForce, -0.1));

            // Añadir rotación a las bolas al colisionar
            Matter.Body.setAngularVelocity(bodyA, 0.3);
            Matter.Body.setAngularVelocity(bodyB, -0.3);

            // Después de un tiempo, devolverlos a la órbita
            setTimeout(() => {
                const indexA = orbits.indexOf(bodyA);
                const indexB = orbits.indexOf(bodyB);

                if (indexA >= 0) {
                    resetOrbit(bodyA, indexA);
                }
                if (indexB >= 0) {
                    resetOrbit(bodyB, indexB);
                }
            }, deviationDuration);
        }
    });
});

// Función para regresar las bolas a su órbita
function resetOrbit(body, index) {
    const data = orbitData[index];
    const x = window.innerWidth / 2 - data.c + data.a * Math.cos(data.angle);
    const y = window.innerHeight / 2 + data.b * Math.sin(data.angle);

    Matter.Body.setPosition(body, { x, y });
    body.velocity = { x: 0, y: 0 }; // Detener cualquier movimiento residual
    body.angularVelocity = 0; // Detener la rotación
}

// Dibujar las órbitas elípticas
//Events.on(render, 'afterRender', () => {
    //const ctx = render.context;
    //ctx.strokeStyle = 'rgba(255, 255, 255, 0.2)';
    //ctx.lineWidth = 1;

    //for (let i = 0; i < orbitData.length; i++) {
        //const data = orbitData[i];
        //ctx.beginPath();
        //ctx.ellipse(
            //window.innerWidth / 2 - data.c, 
            //window.innerHeight / 2, 
            //data.a, 
           // data.b, 
           // 0, 
           // 0, 
           // 2 * Math.PI
        //);
        //ctx.stroke();
    //}
//});
