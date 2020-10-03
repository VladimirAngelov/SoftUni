function solve(input) {

    // a - 97 / e - 101 / i - 105 / o = 111 / u - 117

    let firstString = input.shift();
    let secondString = input.shift();
    let word = input.shift().toUpperCase();

    let strings = firstString.concat(secondString);

    let arrString = strings.split('')
    let counter = 0;
    for (const i in arrString) {

        if (arrString[i].charCodeAt(0) === 97
            || arrString[i].charCodeAt(0) === 101
            || arrString[i].charCodeAt(0) === 105
            || arrString[i].charCodeAt(0) === 111
            || arrString[i].charCodeAt(0) === 117) {
            arrString[i] = word[counter];
            counter++
            if (counter === word.length) {
                counter = 0;
            }
        }
    }
    console.log(`Your generated password is ${arrString.reverse().join('')}`);
}

solve([
        'ilovepizza', 'ihatevegetables',
        'orange'
    ]
)