function solve(input) {

    let count = input.shift();
    let pattern = /!(?<command>[A-Z][a-z]{3,})!:(\[)(?<message>[A-Za-z]{8,})\]/g
    let line = input.shift();
    let output = [];

    for (let i = 0; i < count; i++) {
        let result = pattern.exec(line);
        if (result === null) {
            console.log('The message is invalid');
        } if (line.match(pattern)) {
            result.groups.message
                .split('')
                .forEach(char => output.push(char.charCodeAt(0)))
            console.log(`${result.groups.command}: ${output.join(' ')}`)
        }
        line = input.shift();
    }
}
solve([ '2', '!Send!:[IvanisHere]', '*Time@:[Itis5amAlready]' ])