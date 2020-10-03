function evenAndOddSubstraction (numbers) {

    let oddSum = 0;
    let evenSum = 0;

    for (const number of numbers) {
        if(number % 2 === 0){
            oddSum += number;
        } else {
            evenSum += number;
        }
    }
    console.log(oddSum - evenSum)
}
evenAndOddSubstraction([1,2,3,4,5,6])