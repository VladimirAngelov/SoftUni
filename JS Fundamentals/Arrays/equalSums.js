function equalSums(arr) {

    let result = 'no';

    for (let i = 0; i < arr.length; i++) {

        let leftsum = 0;
        let rightSum = 0;

        for (let j = 0; j < i; j++) { // calculate left sum
            let nextLeftNumber = arr[j];
            leftsum += nextLeftNumber;
        }
        for (let k = i + 1; k < arr.length; k++) { // calculate right sum
            let nextRightNumber = arr[k];
            rightSum += nextRightNumber;
        }
        if(leftsum === rightSum) {
            result = i;
            break;
        }

    }
    console.log(result);
}
equalSums([10, 5, 5, 99, 3, 4, 2, 5, 1, 1, 4])