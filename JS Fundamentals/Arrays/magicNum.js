function magicNum(arr, num) {

    let result = [];

    for (let i = 0; i < arr.length; i++) {
        let element = arr[i];

        for (let j = i + 1; j < arr.length; j++) {
            let secondElement = arr[j];
            let sum = element + secondElement;

            if (sum === num) {

                result.push(element, secondElement);
                console.log(result.join(' '));
                result = [];
            }
        }

    }
}
magicNum([14, 20, 60, 13, 7, 19, 8],
    27
    )