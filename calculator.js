// calculator.js
const calculator = {
    sumar: (a, b) => a + b,
    restar: (a, b) => a - b,
    multiplicar: (a, b) => a * b,
    dividir: (a, b) => {
        if (b === 0) {
            throw new Error("No se puede dividir por cero");
        }
        return a / b;
    }
};

module.exports = calculator;