function solve(input) {

    let pattern = /(@[#]+)(?<name>[A-Z][A-Za-z0-9]{4,}[A-Z])\1/g;
    let count = Number(input.shift());
    let line = input.shift();

    for (let i = 0; i < count; i++) {
        if (line.match(pattern)) {
            if (!line.match(/\d/g)) {
                console.log(`Product group: 00`);
            } else {
                let match = line.match(/\d/g);
                console.log(`Product group: ${match.join('')}`)
            }
        } else {
            console.log(`Invalid barcode`)
        }
        line = input.shift();
    }
}
solve([
    '6',
    '@###Val1d1teM@###',
    '@#ValidIteM@#',
    '##InvaliDiteM##',
    '@InvalidIteM@',
    '@#Invalid_IteM@#',
    '@#ValiditeM@#'
])