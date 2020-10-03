function mergeArrays(firstArr, secondArr) {

    let output = [];

    for (const index in firstArr) {
        let result;

        if(index % 2 === 0) {
            result = Number(firstArr[index]) + Number(secondArr[index]) + '';
        } else {
            result = firstArr[index] + secondArr[index];
        }
        output.push(result);
    }
    console.log(output.join(' - '));
}
mergeArrays(['5', '15', '23', '56', '35'],
    ['17', '22', '87', '36', '11']
)