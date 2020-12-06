solve = arr => {

    const result = [];

    for (const index in arr) {
        if (index % 2 !== 0) {
            result.push(arr[index] * 2)
        }
    }
    return result.reverse()
}
console.log(solve([10, 15, 20, 25]))
console.log(solve([3, 0, 10, 4, 7, 3]))
