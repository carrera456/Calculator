//DOM elements
let numberScreen = document.querySelector('.numberScreen');
const buttons = document.querySelector('.calculatorBody');

console.log(numberScreen);
//declaring variables for calculator
let number1=0,number2=0,operator='';
let display = [];

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
    case '/':
	    resultat = multiply(num1, num2);
	    break;
    }

    return resultat;
}


//listeneres
buttons.addEventListener('click', (event) => {
    let target = event.target;
    switch(target.className){
	case 'button':
	    display.push(event.target.textContent);
	    showDisplay();
	    break;
	case 'buttonOperator':
	    operator = target.textContent;
	    processDisplay();
	    clearDisplay();
	    break;
	case 'buttonEqual':
	    processDisplay();
	    clearDisplay();
	    display.push(operate(operator, number1, number2).toFixed(2).split());
	    showDisplay();
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
    else {
	number2 = parseFloat(display.join(''));
    }
}

//clear result
