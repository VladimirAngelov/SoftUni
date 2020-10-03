function searchForANumber(firstArr, secondArr) {

    let take = firstArr.slice(0, secondArr[0]);
    take.splice(0, secondArr[1]);
    let counter = 0;
    let command = secondArr[2];

    for (const element in take) {

        if (take[element] === command) {
            counter++;
        }
    }
    console.log(`Number ${command} occurs ${counter} times.`)
}
searchForANumber(
    [5, 2, 3, 4, 1, 6],
    [5, 2, 3]
)