//DOM elements
let numberScreen = document.querySelector('.numberScreen');
const buttons = document.querySelector('.calculatorBody');

console.log(numberScreen);
//declaring variables for calculator
let number1=0,number2=0,operator='';
let saved_result=0;
let display = [];
let undo_state = 0;

//creating operator function
function add(num1,num2){
  return num1+num2;
}

function substract(num1,num2){
  return num1-num2;
}

function multiply(num1,num2){
  return num1*num2;
}

function divide(num1,num2){
  return num1/num2;
}

function operate(operator, num1, num2) {
  let resultat;
  switch (operator) {
  case '+':
    resultat = add(num1, num2);
    break;
  case '-':
    resultat = substract(num1, num2);
    break;
  case 'x':
    resultat = multiply(num1, num2);
    break;
  case '÷':
    resultat = divide(num1, num2);
    break;
  }

  return resultat;
}


//listeneres
buttons.addEventListener('click', (event) => {
  let target = event.target;
  switch(target.className){
  case 'button':
    if(saved_result!=0){
      clearDisplay();
      saved_result = 0;
    }
    display.push(event.target.textContent);
    undo_state = 1;
    showDisplay();
    break;
  case 'buttonOperator':
    undo_state = 0;
    if(saved_result == 0){
      processDisplay();
    }
    clearDisplay();
    if(number2 != 0)
    {
      saved_result = result();
      display.push(saved_result);
      showDisplay();
      clearResult();
      processDisplay();
      operator = target.textContent;      
    }
    else{
      operator = target.textContent;
      
    }    
    break;
  case 'buttonEqual':
    undo_state = 0;
    if (number2 == 0 && number1 !=0 && operator !='') {
      processDisplay();
      clearDisplay();
      saved_result = result();
      display.push(saved_result);
      showDisplay();
      
    }
    break;
  case 'buttonC':
    undo_state = 0;
    clearResult();
    saved_result = 0;
    clearDisplay();
    break;

  case 'buttonDecimal':
    if(display.find((e)=> e=='.') === undefined){
      display.push(target.textContent);
      showDisplay();
      undo_state = 1;
    }
    break;

  case 'buttonUndo':
    undo();
    break;

  }

  
  
  
}

			);

//display
function showDisplay() {
  numberScreen.textContent = display.join('');
}
function clearDisplay(){
  display = [];
  numberScreen.textContent = '';
}

function processDisplay(){
  if(number1 == 0){
    number1 = parseFloat(display.join(''));
  }
  else if(number2 == 0){
    number2 = parseFloat(display.join(''));
  }
}

//clear result
function clearResult(){
  number1 = 0;
  number2 = 0;
  /* operator = ''; */
}

//operations
function result(){
  let resultat
  resultat = (Math.round(operate(operator, number1, number2)*100)/100).toString().split();
  return resultat;
}

function undo(){
  if(undo_state == 1){
  display.pop();
  showDisplay();
  }
}
