function solve(input) {

    let num = Number(input.shift());
    let pattern = /(.+)>(?<first>\d{3})\|(?<second>[a-z]{3})\|(?<third>[A-Z]{3})\|(?<fourth>[^<>]{3})<\1/g;

    for (let i = 0; i < num; i++) {
        let line = input.shift();
        if ((line.match(pattern))) {
            let result = pattern.exec(line);
            console.log(`Password: ${Object.values(result.groups).join('')}`)
        } else {
            console.log('Try another password!')
        }
    }
}
solve([
    '5',
    'aa>111|mqu|BAU|mqu<aa',
    '()>111!aaa!AAA!^&*<()',
    'o>088|abc|AAA|***<o',
    'asd>asd|asd|ASD|asd<asd',
    '*>088|zzzz|ZzZ|123<*'
])
console.log('');

solve([
    '3',
    '##>00|no|NO|!!!?<###',
    '##>123|yes|YES|!!!<##',
    '$$<111|noo|NOPE|<<>$$'
])