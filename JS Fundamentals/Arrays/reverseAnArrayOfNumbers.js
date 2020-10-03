function reverseAnArrayOfNumbers(length, numbers) {

    let resultArray = [];
    let result = '';

    for (let i = 0; i < length; i++) {
        resultArray[i] = numbers[i];
    }
    for (let i = length - 1; i >= 0; i--) {
        result += resultArray[i] + ' ';
    }
    console.log(result);
}