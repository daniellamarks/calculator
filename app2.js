import { add, subtract, divide, multiply }
 from '../utilities.js'



function handleClick() {
    const firstNum = Number(document.getElementById("input1").value);
    const secondNum = Number(document.getElementById("input2").value);
	function setValue() {
    const selectValue = document.getElementById("operator-selector").value;
};

if(selectValue === "addOption") {
	result = Number(firstNum + secondNum);
} else if(selectValue === "subtOption") {
	result = Number(firstNum - secondNum);
} else if(selectValue === "multOption") {
	result = Number(firstNum * secondNum);
} else {
	result = Number(firstNum/secondNum);
}

const output = document.getElementById("result");
output.textContent = result;
}

function init() {
    const button = document.getElementById("equalsButton");
    button.onclick = handleClick;
}

window.onload = init;