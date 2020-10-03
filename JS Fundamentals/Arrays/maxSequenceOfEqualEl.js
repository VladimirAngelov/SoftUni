function maxSequenceOfEqualEl(arr) {

    let bestSequence = [];

    for (let i = 0; i < arr.length; i++) {
        let element = arr[i];
        let currentSequence = [element];

        for (let j = i + 1; j < arr.length; j++) {
            let nextElement = arr[j];

            if(element === nextElement) {
                currentSequence.push(nextElement);
                i = j;
            } else {
                break;
            }
        }
        if (currentSequence.length > bestSequence.length) {
            bestSequence = currentSequence;
        }
    }
    console.log(bestSequence.join(' '));
}