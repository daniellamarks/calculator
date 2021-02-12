import { add, subtract, multiply, divide } from '../utilities.js';


function initOperator(firstInputId, secondInputId, buttonId, resultsId, calculation) {
    const input1 = document.getElementById(firstInputId);
    const input2 = document.getElementById(secondInputId);
    const button = document.getElementById(buttonId);
    const display = document.getElementById(resultsId);

    button.addEventListener('click', () => {
        const result = calculation(Number(input1.value), Number(input2.value));
        display.textContent = result;
    });
}
initOperator('add1', 'add2', 'calculate-sum-button', 'add-sum', add);
initOperator('subt1', 'subt2', 'calculate-diff-button', 'subtractDiff', subtract);
initOperator('mult1', 'mult2', 'calculate-mult-button', 'multiplyProd', multiply);
initOperator('div1', 'div2', 'calculate-div-button', 'divQuo', divide);
    

/*old code: const subt1 = document.getElementById('subt1');
const subt2 = document.getElementById('subt2');
const mult1 = document.getElementById('mult1');
const mult2 = document.getElementById('mult2');
const div1 = document.getElementById('div1');
const div2 = document.getElementById('div2');
const subtractDiff = document.getElementById('subtract-diff');
const multiplyProd = document.getElementById('multiply-prod');
const divQuo = document.getElementById('div-quo');
const calculateDiffButton = document.getElementById('calculate-diff-button');
const calculateMultButton = document.getElementById('calculate-mult-button');
const calculateDivButton = document.getElementById('calculate-div-button');
calculateDiffButton.addEventListener('click', () => {
    const result = subtract(Number(subt1.value), Number(subt2.value));
    subtractDiff.textContent = result;
});
calculateMultButton.addEventListener('click', () => {
    const result = multiply(Number(mult1.value), Number(mult2.value));
    multiplyProd.textContent = result;
});
calculateDivButton.addEventListener('click', () => {
    const result = divide(Number(div1.value), Number(div2.value));
    divQuo.textContent = Math.round(result * 100) / 100;
}); */

const generateRandomButton = document.getElementById('generate-random');
const randomInt1 = document.getElementById('random-int-1');
const randomInt2 = document.getElementById('random-int-2');

const randomNumber = Math.floor(Math.random() * 100);
const randomNumber2 = Math.floor(Math.random() * 100);

generateRandomButton.addEventListener('click', () => {
    randomInt1.value = randomNumber; 
    randomInt2.value = randomNumber2;
});

const userInput = document.getElementById('input-result');
const checkAnswerButton = document.getElementById('check-answer');
const showResult = document.getElementById('result');

checkAnswerButton.addEventListener('click', () => {
    if (Number(userInput.textContent) === randomNumber + randomNumber2) {
        showResult.textContent = "That's correct!";
    } else (showResult.textContent = 'Not quite, try again!');
});






/*const randomint2 = document.getElementById("random-int-2");
const inputAnswer = document.getElementById("input-answer");
*/

