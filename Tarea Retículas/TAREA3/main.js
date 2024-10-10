const coloresLuna = ['#FFFFFF', '#FFE050', '#FFDD4D', '#FFD633', '#FFCC01'];
let indiceLuna = 0;
const estrellas = [];
const numEstrellas = 50;

function crearEstrella() {
    const estrella = document.createElement('div');
    estrella.className = 'estrella';
    estrella.style.left = Math.random() * 100 + '%';
    estrella.style.top = Math.random() * 100 + '%';
    estrella.style.width = (Math.random() * 2 + 1) + 'px';
    estrella.style.height = estrella.style.width;
    document.getElementById("cielo").appendChild(estrella);
    return estrella;
}

for (let i = 0; i < numEstrellas; i++) {
    estrellas.push(crearEstrella());
}

function animarEstrellas() {
    estrellas.forEach(estrella => {
        const opacidad = Math.random();
        estrella.style.opacity = opacidad;
    });
}

function cambiarColorLuna() {
    indiceLuna = (indiceLuna + 1) % coloresLuna.length;
    document.getElementById("luna").style.backgroundColor = coloresLuna[indiceLuna];
}

setInterval(animarEstrellas, 1000);
setInterval(cambiarColorLuna, 3000);