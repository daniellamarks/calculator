// import functions and grab DOM elements

import { handler } from './handlers.js';

 // initialize state
// set event listeners to update state and DOM

 function initOperator(firstInputId, secondInputId, buttonId, displayId, calculation) {
	const input1 = document.getElementById(firstInputId);
	const input2 = document.getElementById(secondInputId);
	const button = document.getElementById(buttonId);
	const display = document.getElementById(displayId);

	button.addEventListener("click", () => {handler(input1, input2, display, calculation)});
}
	initOperator('add1', 'add2', 'addButton', 'sum', 'add');
	initOperator('subt1', 'subt2', 'subtButton', 'difference', 'subtract');
	initOperator('div1', 'div2', 'divButton', 'quo', 'divide');
	initOperator('mult1', 'mult2', 'multButton', 'prod', 'multiply');



