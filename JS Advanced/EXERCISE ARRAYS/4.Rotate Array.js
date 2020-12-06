function solve(arr) {

    let rotations = Number(arr.pop());

    for (let i = 0; i < rotations; i++) {
        let currentEl = arr.pop();
        arr.unshift(currentEl)
    }
    console.log(arr.join(' '))
}
solve(['1',
    '2',
    '3',
    '4',
    '2']
)
solve(['Banana',
    'Orange',
    'Coconut',
    'Apple',
    '15']
)