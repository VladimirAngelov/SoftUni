function maxNumber(arr) {

    let result = '';

    for (let i = 0; i < arr.length; i++) {

        let current = arr[i];
        let isBigger = true;

        for (let j = i + 1; j < arr.length; j++) {

            let nextElement = arr[j];
            if (current <= nextElement) {
                isBigger = false;
                break;
            }
        }
        if (isBigger) {
            result += `${current} `;
        }
    }
    console.log(result);
}
maxNumber([1, 4, 3, 2])