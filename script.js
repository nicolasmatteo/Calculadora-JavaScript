function agregarAlDisplay(value) {
    document.getElementById('display').value += value;
}

function limpiarDisplay() {
    document.getElementById('display').value = '';
}

function calcularResultado() {
    const expression = document.getElementById('display').value;
    try {
        const result = calcular(expression);
        document.getElementById('display').value = result;
    } catch (error) {
        document.getElementById('display').value = 'Error';
    }
}

function calcular(expression) {
    const regex = /(\d+\.?\d*)([+\-*/])(\d+\.?\d*)/;
    const match = expression.match(regex);

    if (!match) {
        throw new Error('Invalid expression');
    }

    const num1 = parseFloat(match[1]);
    const operator = match[2];
    const num2 = parseFloat(match[3]);

    switch (operator) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            if (num2 === 0) {
                throw new Error('Division by zero');
            }
            return num1 / num2;
        default:
            throw new Error('Invalid operator');
    }
}
