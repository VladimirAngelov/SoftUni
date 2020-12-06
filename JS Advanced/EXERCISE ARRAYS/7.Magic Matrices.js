function solve(input) {
    let sum = input[0].reduce((a, b) => a + b);
    let result = true;
    for (let i = 0; i < input.length; i++) {
        let row = input[i].reduce((a, b) => a + b);
        let column = input.map((n) => n[i]).reduce((a, b) => a + b);
        if(row != sum || column != sum) {
            result = false;
            break;
        }
    }
    console.log(result);
}

solve([[1, 0, 0],
    [0, 0, 1],
    [0, 1, 0]]
)