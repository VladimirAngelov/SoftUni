const calc = require('./demo')

// TODO Test

// arrange
let firstNumber = 1;
let secondNumber = 2;

// act
let result = calc.sum(firstNumber,secondNumber);

// assert
if (result === 3) {
    console.log(`Test #1 - Successful`)
} else {
    console.log(`Test #1 - Fail`)
}