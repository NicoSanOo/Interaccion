const mouse_x_dom_element = document.getElementById("x-target");
const mouse_y_dom_element = document.getElementById("y-target");

let x_coordinate = 0;
let y_coordinate = 0;

const x_base_string = 'Mouse X: ';

let x_final_string = '';


function printCoordinatesInDom(event) {
	// console.log('mouse x:', event.clientX, typeof event.clientX.toString());
	
	x_coordinate = event.clientX;
	x_coordinate = x_coordinate.toString();
	
	y_coordinate = event.clientY;
	y_coordinate = y_coordinate.toString();
	
	mouse_x_dom_element.style.transform = "translate3d(" + x_coordinate + "px, " + y_coordinate + "px, 0)";
	
	// mouse_x_dom_element.style.fontSize = `${Math.max(12, x_coordinate / 10)}px`;
	
	x_final_string = x_base_string + x_coordinate;
	mouse_x_dom_element.innerText = x_final_string;
}


document.addEventListener("mousemove", printCoordinatesInDom);