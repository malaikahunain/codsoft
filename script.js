let displayValue = '';
let currentOperation = '';
let firstOperand = null;

function appendNumber(number) {
    displayValue += number;
    updateDisplay();
}

function setOperation(operation) {
    if (currentOperation !== '') {
        calculateResult();
    }
    firstOperand = parseFloat(displayValue);
    currentOperation = operation;
    displayValue = '';
}

function calculateResult() {
    if (currentOperation === '' || displayValue === '') {
        return;
    }

    const secondOperand = parseFloat(displayValue);
    let result = 0;

    switch (currentOperation) {
        case '+':
            result = firstOperand + secondOperand;
            break;
        case '-':
            result = firstOperand - secondOperand;
            break;
        case '*':
            result = firstOperand * secondOperand;
            break;
        case '/':
            if (secondOperand !== 0) {
                result = firstOperand / secondOperand;
            } else {
                alert("Cannot divide by zero!");
            }
            break;
    }

    displayValue = result.toString();
    currentOperation = '';
    firstOperand = null;

    updateDisplay();
}

function clearDisplay() {
    displayValue = '';
    currentOperation = '';
    firstOperand = null;
    updateDisplay();
}

function updateDisplay() {
    const display = document.getElementById('display');
    display.textContent = displayValue || '0';
}
