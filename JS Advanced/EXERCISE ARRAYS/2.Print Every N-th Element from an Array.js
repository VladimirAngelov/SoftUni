function solve(arr) {

    const step = Number(arr.pop());
    for (let i = 0; i < arr.length; i+=step) {
        console.log(arr[i])
    }
}
solve(['dsa',
    'asd',
    'test',
    'tset',
    '2']
)