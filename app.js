// import functions and grab DOM elements

// initialize state

// set event listeners on each button, do math, and update state and DOM. serialize. do add completely, do subtract completely, do multiply completely.

const add1 = document.getElementById('add1');
const add2 = document.getElementById('add2');
const subt1 = document.getElementById('subt1');
const subt2 = document.getElementById('subt2');
const mult1 = document.getElementById('mult1');
const mult2 = document.getElementById('mult2');
const div1 = document.getElementById('div1');
const div2 = document.getElementById('div2');
const addSum = document.getElementById('add-sum');
const subtractDiff = document.getElementById('subtract-diff');
const multiplyProd = document.getElementById('multiply-prod');
const divQuo = document.getElementById('div-quo');
const calculateSumButton = document.getElementById('calculate-sum-button');
const calculateDiffButton = document.getElementById('calculate-diff-button');
const calculateMultButton = document.getElementById('calculate-mult-button');
const calculateDivButton = document.getElementById('calculate-div-button');

calculateSumButton.addEventListener('click', () => {
    const result = Number(add1.value) + Number(add2.value);
    addSum.textContent = result;
});

calculateDiffButton.addEventListener('click', () => {
    const result = Number(subt1.value) - Number(subt2.value);
    subtractDiff.textContent = result;
});

calculateMultButton.addEventListener('click', () => {
    const result = Number(mult1.value) * Number(mult2.value);
    multiplyProd.textContent = result;
});

calculateDivButton.addEventListener('click', () => {
    const result = Number(div1.value) / Number(div2.value);
    divQuo.textContent = Math.round(result * 100) / 100;
});

