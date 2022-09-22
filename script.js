const numberButton = document.querySelectorAll('.number')
const operatorButton = document.querySelectorAll('.operator')
const clearButton = document.querySelector('.clear')
const deleteButton = document.querySelector('.delete')
const showResult = document.querySelector('.result')
const currentOperand = document.querySelector('.current-operand')
const previousOperand = document.querySelector('.previous-operand')
const equalsKey = document.querySelector('.equals-key')
console.log(clearButton)
currentOperand.textContent = ''
previousOperand.textContent = ''

function add(a,b){
    return a + b;
};

function subtract(a,b){
    return a - b;
};

function multiply(a,b){
    return a * b;
};

function divide(a,b){
    return a / b;
};

function operate(num1, num2, operator) {
    switch (operator) {
      case "+":
        return add(num1, num2);
      case "-":
        return subtract(num1, num2);
      case "*":
        return multiply(num1, num2);
      case "/":
        return divide(num1, num2);
    }
  };
  

let storedNumber = '';
let clickedOperator = '';
let firstNumber = '';
let result = '';
currentOperand.textContent = 0;


  
numberButton.forEach(number => {
    number.addEventListener('click', function(){
       storedNumber = number.value;

       previousOperand.textContent = storedNumber;
       
    })
});
2 * 2 + 5
operatorButton.forEach(operator => {
   operator.addEventListener('click', function(){
    if (firstNumber !== '' && clickedOperator !== '') {
      tempResult = operate(parseFloat(firstNumber), parseFloat(storedNumber), clickedOperator)
     currentOperand.textContent = tempResult;
     firstNumber = tempResult
     storedNumber = ''
     }else{
  
    firstNumber = storedNumber;
    storedNumber = ''
    clickedOperator = operator.textContent;
    
    previousOperand.textContent = firstNumber + clickedOperator;
     }
   })
});



equalsKey.addEventListener('click', function() {
  displayResult();
});

deleteButton.addEventListener('click', function(){
  displayResult();
});

clearButton.addEventListener('click', function(){
  console.log(clearButton)
  storedNumber = '';
   clickedOperator = '';
  firstNumber = '';
  result = 0;
  previousOperand.textContent = ''
  currentOperand.textContent = result;
});

function displayResult() {
  result = operate(parseFloat(firstNumber), parseFloat(storedNumber), clickedOperator)
  currentOperand.textContent = result;
  previousOperand.textContent = firstNumber + ' ' + clickedOperator + ' ' + storedNumber;
  storedNumber = result;
}