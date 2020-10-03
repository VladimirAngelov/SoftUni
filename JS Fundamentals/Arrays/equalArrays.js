function equalArrays(firstArr, secondArr) {

    let sum = 0;
    let counter = 0;
    let isEqual = true;

    for (let i = 0; i < firstArr.length; i++) {
        let firstElement = Number(firstArr[i]);
        let secondElement = Number(secondArr[i]);

        if (firstElement !== secondElement) {
            counter = i;
            isEqual = false;
            break;
        }
        sum += secondElement;
    }
    if (isEqual) {
        console.log(`Arrays are identical. Sum: ${sum}`);
    } else {
        console.log(`Arrays are not identical. Found difference at ${counter} index`)
    }
}
equalArrays(['1'], ['10'])