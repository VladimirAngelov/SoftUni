sorting = (input) => {

    // input.sort((a, b) => a - b); // сортираме от малко към голямо (а - b)

    let length = input.sort(customSort).length;
    let arr = [];

    for (let i = 0; i < length; i++) {
        let biggestNumber = input.pop();
        let smallestNumber = input.shift();
        arr.push(biggestNumber, smallestNumber);
    }

    console.log(arr.join(' '));
    
    function customSort(a, b) {
        if (a > b) {
            return 1;
        } else if (a < b) {
            return -1;
        } else {
            return 0;
        }
    }

}
sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94])