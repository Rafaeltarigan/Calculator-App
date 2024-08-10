let currentInput = '';
let operator = '';
let previousInput = '';

function appendNumber(number) {
    currentInput += number;
    updateDisplay();
}

function operate(op) {
    if (currentInput === '' && op !== 'sqrt' && op !== 'percent' && op !== 'sin' && op !== 'cos' && op !== 'tan') return;
    if (previousInput !== '') {
        calculate();
    }
    operator = op;
    if (op === 'sqrt' || op === 'percent' || op === 'sin' || op === 'cos' || op === 'tan') {
        calculate();
    } else {
        previousInput = currentInput;
        currentInput = '';
    }
}

function calculate() {
    let result;
    const prev = parseFloat(previousInput);
    const current = parseFloat(currentInput);

    if (isNaN(prev) && operator !== 'sqrt' && operator !== 'percent' && operator !== 'sin' && operator !== 'cos' && operator !== 'tan') return;
    if (isNaN(current) && operator !== 'sqrt' && operator !== 'percent' && operator !== 'sin' && operator !== 'cos' && operator !== 'tan') return;

    switch (operator) {
        case 'add':
            result = prev + current;
            break;
        case 'subtract':
            result = prev - current;
            break;
        case 'multiply':
            result = prev * current;
            break;
        case 'divide':
            result = prev / current;
            break;
        case 'sqrt':
            result = Math.sqrt(current || prev);
            break;
        case 'percent':
            result = (current || prev) / 100;
            break;
        case 'exp':
            result = Math.pow(prev, current);
            break;
        case 'sin':
            result = Math.sin((current || prev) * (Math.PI / 180));
            break;
        case 'cos':
            result = Math.cos((current || prev) * (Math.PI / 180));
            break;
        case 'tan':
            result = Math.tan((current || prev) * (Math.PI / 180));
            break;
        default:
            return;
    }

    currentInput = result.toString();
    operator = '';
    previousInput = '';
    updateDisplay();
}

function clearDisplay() {
    currentInput = '';
    previousInput = '';
    operator = '';
    updateDisplay();
}

function updateDisplay() {
    document.getElementById('display').value = currentInput;
}
