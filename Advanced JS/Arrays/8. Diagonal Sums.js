solve = arr => {

    let first = [];
    let second = [];
    let result = [];

    for (let i = 0; i < arr.length; i ++) {
        first.push(arr[i][i])
    }
    result.push(first.reduce((acc, val) => acc + val));

    let counter = arr.length - 1;
    for (let i = 0; i < arr.length; i++) {
        second.push(arr[i][counter]);
        counter--;
    }
    result.push(second.reduce((acc, val) => acc + val))

    return result.join(' ');
}
console.log(solve([[20, 40],
    [10, 60]]

))