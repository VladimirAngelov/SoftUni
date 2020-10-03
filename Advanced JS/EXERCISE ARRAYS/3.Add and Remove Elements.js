function solve(arr) {
    let result = [];
    let counter = 0;
    arr.forEach(cmd => {
        if (cmd.includes('add')) {
            counter++;
            result.push(counter);
        } else {
            result.pop();
            counter++
        }
    })

    if (result.length <= 0) {
        console.log('Empty')
    } else {
        result.forEach(line => console.log(line));
    }
}

solve(['remove',
    'remove',
    'remove']

)