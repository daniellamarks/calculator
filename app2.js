import { add, subtract, divide, multiply }
 from './utilities.js'

const input1 = document.getElementById("input1");
const input2 = document.getElementById("input2");
const equalsButton = document.getElementById("equalsButton")
const result = document.getElementById("result");


equalsButton.addEventListener('click', () => {
	console.log("button clicked");
	console.log(input1.value);
	const operation = document.getElementById("operator-selector").selectedIndex;
	switch(operation) {
		case 0:
		return result.textContent = add(Number(input1.value), Number(input2.value)), console.log(result.textContent);
		break;
		case 1:
		return result.textContent = subtract(Number(input1.value), Number(input2.value)); 
		break;
		case 2:
		return result.textContent = multiply(Number(input1.value), Number(input2.value));
		break;
		case 3:
		return result.textContent = divide(Number(input1.value), Number(input2.value));
		break;
	} 
	
});



