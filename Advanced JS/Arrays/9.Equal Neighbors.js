solve = arr => {
    let counter = 0;

    arr.forEach((row, i) => {
        row.forEach((el, j) => {
            if (el === row[j + 1]) {
                counter++;
            }

            if (arr[i + 1] && el === arr[i + 1][j]) {
                counter++;
            }
        })
    })
    return counter;
}
console.log(solve([
    ['test', 'yes', 'yo', 'ho'],
    ['well', 'done', 'yo', '6'],
    ['not', 'done', 'yet', '5']]
))