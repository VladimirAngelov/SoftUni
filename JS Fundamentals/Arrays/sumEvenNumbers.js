function sumEvenNumbers(numbers) {

    let sum = 0;

    for (let i = 0; i < numbers.length; i++) {
        numbers[i] = Number(numbers[i]);
    }
    for (const num of numbers) {
        if (num % 2 === 0) {
            sum += num;
        }
    }
    console.log(sum);
}
sumEvenNumbers(['1', '2', '3', '4', '5', '6'])