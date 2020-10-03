function solve(num) {

    let number = num.toString();
    let sum = number.split('').map(Number).reduce((acc, val) => acc + val);
    let isEqual = false;
    for (let i = 0; i < number.length; i++) {
        if (number.split('')[0] === number.split('')[i]) {
            isEqual = true;
        } else {
            isEqual = false;
        }
    }
    console.log(isEqual);
    console.log(sum)
}

solve(1234)


let sum = 0;
let lastDigit = num % 10;
let isEqual = false;

while (num / 10 > 0) {
    let digit = num % 10;
    sum += digit;

    if (digit === lastDigit) {
        isEqual = true;
    }
    lastDigit = digit
    num = Math.floor(num / 10);
}
console.log(isEqual)
console.log(sum)