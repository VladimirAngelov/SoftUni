function solve(arr) {

    let result = (x1, y1, x2, y2) => {
        let distance = Math.sqrt((x2-x1) ** 2 + (y2 - y1) ** 2)
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is ${Number.isInteger(distance) ? 'valid' : 'invalid'}`)
    }
    result(arr[0], arr[1], 0, 0)
    result(arr[2], arr[3], 0, 0)
    result(arr[0], arr[1], arr[2], arr[3])
}
solve(['3', 0, 0, '4'])
solve([2, 1, 1, 1])