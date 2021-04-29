// calc variables
const input1 = document.getElementById('num1');
const input2 = document.getElementById('num2');
const operationIn = document.getElementById('calc');
const evalButton = document.getElementById('calc-total');
const totalOut = document.getElementById('total');

console.log(operationIn.value);

//addition event listener
evalButton.addEventListener ('click', () => {
    const number1 = input1.value;
    const number2 = input2.value;
    const operation = operationIn.value;
    const total = eval([input1.value] + [operationIn.value] + [input2.value]);
    totalOut.textContent = total;

});

//
 //subtraction event listener
// subEval.addEventListener ('click', () => {
//     const number1 = Number(input1.value);
//     const number2 = Number(input2.value);
//     const total = number1 - number2;
//     totalOut.textContent = total;
// });

// //multiplication event listener
// mulEval.addEventListener ('click', () => {
//     const number1 = Number(input1.value);
//     const number2 = Number(input2.value);
//     const total = number1 * number2;
//     totalOut.textContent = total;
// });

// //division event listener
// divEval.addEventListener ('click', () => {
//     const number1 = Number(input1.value);
//     const number2 = Number(input2.value);
//     const total = number1 / number2;
//     if (isNaN(total)){
//         totalOut.textContent = '☠'
//     } else {
//     totalOut.textContent = total;
//     }
// });

// //calc tracker data variables
// let addCountTracker = 0;
// let subCountTracker = 0;
// let divCountTracker = 0;
// let mulCountTracker = 0;
// let calcCountTracker = 0;
// const addCount = document.getElementById('add-count');
// const subCount = document.getElementById('sub-count');
// const divCount = document.getElementById('div-count');
// const mulCount = document.getElementById('mul-count');
// const calcCount = document.getElementById('calc-count');


// //calculation even listeners
// addEval.addEventListener ('click', () => {
//     addCountTracker++;
//     calcCountTracker++;
//     addCount.textContent = addCountTracker;
//     calcCount.textContent = calcCountTracker;
// });

// subEval.addEventListener ('click', () => {
//     subCountTracker++;
//     calcCountTracker++;
//     subCount.textContent = subCountTracker;
//     calcCount.textContent = calcCountTracker;
//     });

// divEval.addEventListener ('click', () => {
//     divCountTracker++;
//     calcCountTracker++;
//     divCount.textContent = divCountTracker;
//     calcCount.textContent = calcCountTracker;
// });

// mulEval.addEventListener ('click', () => {
//     mulCountTracker++;
//     calcCountTracker++;
//     mulCount.textContent = mulCountTracker;
//     calcCount.textContent = calcCountTracker;
// });
