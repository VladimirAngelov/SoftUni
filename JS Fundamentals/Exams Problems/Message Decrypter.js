function solve(input) {

    let n = Number(input.shift());
    let line = input.shift();
    let pattern = /\B([%|$])(?<tag>[A-Z]{1}[a-z]{2,})\1:\s\[(?<first>\d+)\]\|\[(?<second>\d+)\]\|\[(?<third>\d+)\]\|$/g;

    for (let i = 0; i < n; i++) {
        let result = pattern.exec(line);
        if (line.match(pattern)) {
            let word = Object.values(result.groups)
                .slice(1).map(x => String.fromCharCode(x)).join('')
            console.log(`${result.groups.tag}: ${word}`)
        } else {
            console.log('Valid message not found!')
        }
        line = input.shift();
    }
}

solve([
    '4',
    '$Request$: [73]|[115]|[105]|',
    '%Taggy$: [73]|[73]|[73]|',
    '%Taggy%: [118]|[97]|[108]|',
    '$Request$: [73]|[115]|[105]|[32]|[75]|'
])