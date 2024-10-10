const mouse_x_dom_element = document.getElementById("x-target");
const mouse_y_dom_element = document.getElementById("y-target");

let x_coordinate = 0;
let y_coordinate = 0;

const x_base_string = 'Mouse X: ';
const y_base_string = 'Mouse Y: ';

let x_final_string = '';
let y_final_string = '';


function printCoordinatesInDom(event) {
	// console.log('mouse x:', event.clientX, typeof event.clientX.toString());
	
	x_coordinate = event.clientX;
	x_coordinate = x_coordinate.toString();
	
	x_final_string = x_base_string + x_coordinate;
	mouse_x_dom_element.innerText = x_final_string;
	

	y_coordinate = event.clientY;
	y_coordinate = y_coordinate.toString();
	
	y_final_string = y_base_string + y_coordinate;
	mouse_y_dom_element.innerText = y_final_string;
}


document.addEventListener("mousemove", printCoordinatesInDom);