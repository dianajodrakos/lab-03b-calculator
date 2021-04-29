//addition calc variables
const addInput1 = document.getElementById('add1');
const addInput2 = document.getElementById('add2');
const addButton = document.getElementById('add-calc');
const addTotalOut = document.getElementById('add-total');

//addition event listener
addButton.addEventListener ('click', () => {
    const addNumber1 = Number(addInput1.value);
    const addNumber2 = Number(addInput2.value);
    const addTotal = addNumber1 + addNumber2;
    addTotalOut.textContent = addTotal;
});


//subtraction calc variables
const subInput1 = document.getElementById('sub1');
const subInput2 = document.getElementById('sub2');
const subButton = document.getElementById('sub-calc');
const subTotalOut = document.getElementById('sub-total');

//subtraction event listener
subButton.addEventListener ('click', () => {
    const subNumber1 = Number(subInput1.value);
    const subNumber2 = Number(subInput2.value);
    const subTotal = subNumber1 - subNumber2;
    subTotalOut.textContent = subTotal;
});

//division calc variables
const divInput1 = document.getElementById('div1');
const divInput2 = document.getElementById('div2');
const divButton = document.getElementById('div-calc');
const divTotalOut = document.getElementById('div-total');

//division event listener
divButton.addEventListener ('click', () => {
    const divNumber1 = Number(divInput1.value);
    const divNumber2 = Number(divInput2.value);
    const divTotal = divNumber1 / divNumber2;
    if (isNaN(divTotal)){
        divTotalOut.textContent = 'That\'s not a number!'
    } else {
    divTotalOut.textContent = divTotal;
    }
});

//multiplication calc variables
const mulInput1 = document.getElementById('mul1');
const mulInput2 = document.getElementById('mul2');
const mulButton = document.getElementById('mul-calc');
const mulTotalOut = document.getElementById('mul-total');

//multiplication event listener
mulButton.addEventListener ('click', () => {
    const mulNumber1 = Number(mulInput1.value);
    const mulNumber2 = Number(mulInput2.value);
    const mulTotal = mulNumber1 * mulNumber2;
    mulTotalOut.textContent = mulTotal;
});


//calc tracker data variables
let addCountTracker = 0;
let subCountTracker = 0;
let divCountTracker = 0;
let mulCountTracker = 0;
let calcCountTracker = 0;
const addCount = document.getElementById('add-count');
const subCount = document.getElementById('sub-count');
const divCount = document.getElementById('div-count');
const mulCount = document.getElementById('mul-count');
const calcCount = document.getElementById('calc-count');

//calculation even listeners
addButton.addEventListener ('click', () => {
    addCountTracker++;
    addCount.textContent = addCountTracker;
});

subButton.addEventListener ('click', () => {
    subCountTracker++;
    subCount.textContent = subCountTracker;
});

divButton.addEventListener ('click', () => {
    divCountTracker++;
    divCount.textContent = divCountTracker;
});

mulButton.addEventListener ('click', () => {
    mulCountTracker++;
    mulCount.textContent = mulCountTracker;
});

