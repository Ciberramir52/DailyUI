let screen = document.getElementById("screen");
let currentInput = '0';  // Start with 0 as default
let previousValue = '';
let currentOperator = null;
let operatorClicked = false;
let resultDisplayed = false;

function clearScreen() {
    currentInput = '0';
    previousValue = '';
    currentOperator = null;
    screen.innerText = '0';
    operatorClicked = false;
    resultDisplayed = false;
    removeActiveOperator();
}

function insertNumber(num) {
    if (operatorClicked || resultDisplayed) {
        // Start new number after operator or after showing result
        currentInput = '';
        operatorClicked = false;
        resultDisplayed = false;
    }
    // If the current input is '0', replace it with the number pressed
    if (currentInput === '0') {
        currentInput = num;
    } else {
        currentInput += num;
    }
    screen.innerText = currentInput;
}

function insertOperator(operator) {
    if (previousValue && currentOperator && !operatorClicked) {
        calculateResult();
    }
    previousValue = currentInput;
    currentOperator = operator;
    operatorClicked = true;
    resultDisplayed = false;
    removeActiveOperator();
    highlightActiveOperator(operator);
}

function insertDecimal() {
    // Prevent multiple decimals in one number
    if (!currentInput.includes('.')) {
        if (operatorClicked || resultDisplayed) {
            // Start fresh if an operator was just clicked or a result is displayed
            currentInput = '0';
            operatorClicked = false;
            resultDisplayed = false;
        }
        currentInput += '.';
        screen.innerText = currentInput;
    }
}

function backspace() {
    // If a result is displayed and backspace is pressed, reset everything
    if (resultDisplayed) {
        clearScreen();
        return;
    }
    // Remove the last character from the current input
    if (currentInput.length > 1) {
        currentInput = currentInput.slice(0, -1);
    } else {
        // If there's only one character left, reset to '0'
        currentInput = '0';
    }
    screen.innerText = currentInput;
}

function calculateResult() {
    if (currentOperator && previousValue) {
        let result;
        switch (currentOperator) {
            case '+':
                result = parseFloat(previousValue) + parseFloat(currentInput);
                break;
            case '-':
                result = parseFloat(previousValue) - parseFloat(currentInput);
                break;
            case '*':
                result = parseFloat(previousValue) * parseFloat(currentInput);
                break;
            case '/':
                result = parseFloat(previousValue) / parseFloat(currentInput);
                break;
            default:
                return;
        }
        currentInput = result.toString();
        screen.innerText = currentInput;
        previousValue = '';
        currentOperator = null;
        operatorClicked = false;
        resultDisplayed = true;  // Mark that a result is shown
        removeActiveOperator();
    }
}

function removeActiveOperator() {
    const activeOperator = document.querySelector('.operator.active');
    if (activeOperator) {
        activeOperator.classList.remove('active');
    }
}

function highlightActiveOperator(operator) {
    const operatorButton = document.querySelector(`.operator[data-operator="${operator}"]`);
    if (operatorButton) {
        operatorButton.classList.add('active');
    }
}

