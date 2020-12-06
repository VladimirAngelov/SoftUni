solve = arr => {

    let biggest = Number.MIN_SAFE_INTEGER;

    for (let i = 0; i < arr.length; i ++) {
        arr[i].forEach(n => {
            if (n > biggest) {
                biggest = n;
            }
        })
    }
    return biggest;
}
console.log(solve(
    [[20, 50, 10],
    [8, 33, 145]]
))