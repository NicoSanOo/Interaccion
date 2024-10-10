const element = document.getElementById("tester");

let start;
let mouseX = 0;
let mouseY = 0;

function updateMouseCoords(eventData) {
    mouseX = eventData.clientX;
    mouseY = eventData.clientY;

    // console.log(mouseX, mouseY);
}

document.addEventListener("mousemove", updateMouseCoords);


function tick(timeStamp) {
    if (start === undefined) {
        start = timeStamp;
    }

    element.style.transform = `translate(${mouseX}px, ${mouseY}px)`;

    requestAnimationFrame(tick);
}

requestAnimationFrame(tick);




// Happy Coding! 👾