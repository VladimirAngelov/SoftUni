function solve(input) {

    let pattern = /([*@])(?<tag>[A-Z]{1}[a-z]{2,})\1: \[(?<first>\w)\]\|\[(?<second>\w)\]\|\[(?<third>\w)\]\|$/g;
    let num = +input.shift();
    let line = input.shift();

    for (let i = 0; i < num; i++) {
        if (line.match(pattern)) {
            let result = pattern.exec(line)
            if (result !== null) {
                let first = result.groups.first.charCodeAt(0);
                let second = result.groups.second.charCodeAt(0);
                let third = result.groups.third.charCodeAt(0);
                console.log(`${result.groups.tag}: ${first} ${second} ${third}`)
            }
        } else {
            console.log('Valid message not found!')
        }
        line = input.shift();
    }
}
solve([
    '3',
    '*Request*: [I]|[s]|[i]|',
    '*Taggy@: [73]|[73]|[73]|',
    'Should be valid @Taggy@: [v]|[a]|[l]|'
])