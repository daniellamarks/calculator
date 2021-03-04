import { add, subtract, divide, multiply } from './utilities.js';

 export function handler(input1, input2, display, calculation) {
	 console.log(calculation);
	 if (calculation === 'add'){
		 display.textContent = add(Number(input1.value), Number(input2.value));
		}
	};