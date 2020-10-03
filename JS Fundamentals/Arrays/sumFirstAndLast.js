function sumFirst (number) {

    let firstNumber = Number([number[0]]);
    let lastNumber = Number([number[number.length - 1]]);

    console.log(lastNumber + firstNumber);
}
sumFirst(['20', '30', '40'])