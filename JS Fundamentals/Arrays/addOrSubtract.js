function addOrSubstract(numbers) {

    let result = [];
    let sum = 0;
    let sum1 = 0;

    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 === 0) {
            result[i] = numbers[i] + i;
        } else {
            result[i] = numbers[i] - i;
        }
    }
    for (const num of numbers) {
        sum += num
    }
    for (const num1 of result) {
        sum1 += num1;
    }
    console.log(result);
    console.log(sum);
    console.log(sum1);
}
addOrSubstract([5, 15, 23, 56, 35])