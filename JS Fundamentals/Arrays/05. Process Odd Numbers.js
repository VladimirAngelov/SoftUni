processOddNumbers = (arr) => {

    result = [];

    for (const index in arr) {
        let currentNum = arr[index];
        if(index % 2 !== 0) {
            result.push(currentNum * 2);
        }
    }
    console.log(result.reverse().join(' '));
    
}
processOddNumbers([3, 0, 10, 4, 7, 3])