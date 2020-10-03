function solve(arr) {

    let position = [];

    for (const index in arr) {
        if(index % 2 === 0) {
            position.push(arr[index])
        }
    }
    console.log(position.join(' '))
}

solve(['20', '30', '40'])