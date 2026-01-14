// calculator.test.js
const calc = require('./calculator');

describe('Pruebas de la Calculadora', () => {
    
    test('Suma de 2 + 3 debe ser 5', () => {
        expect(calc.sumar(2, 3)).toBe(5);
    });

    test('Resta de 10 - 4 debe ser 6', () => {
        expect(calc.restar(10, 4)).toBe(6);
    });

    test('Multiplicación de 3 * 4 debe ser 12', () => {
        expect(calc.multiplicar(3, 4)).toBe(12);
    });

    test('División de 10 / 2 debe ser 5', () => {
        expect(calc.dividir(10, 2)).toBe(5);
    });

    test('Error al dividir por cero', () => {
        expect(() => calc.dividir(10, 0)).toThrow("No se puede dividir por cero");
    });

});