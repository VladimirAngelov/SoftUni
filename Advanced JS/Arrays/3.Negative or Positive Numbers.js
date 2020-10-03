solve = arr => {
    let result = [];

    arr.forEach(n => {
        if (n >= 0) {
            result.push(n)
        } else {
            result.unshift(n)
        }
    })
    return result;
}
console.log(solve([3, -2, 0, -1]))