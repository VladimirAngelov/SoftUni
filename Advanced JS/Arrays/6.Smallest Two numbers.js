solve = arr => {
    let result = [];
    let smallestOne = Math.min(...arr);
    arr.splice(arr.indexOf(smallestOne), 1);
    let smallestTwo = Math.min(...arr);
    result.push(smallestOne, smallestTwo)
    return result;
}
console.log(solve([30, 15, 50, 5]))
console.log(solve([3, 0, 10, 4, 7, 3]))