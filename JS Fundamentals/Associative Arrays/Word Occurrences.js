function solve(input) {

    let map = new Map();

    for (const word of input) {
        if (map.has(word)) {
            let num = 0;
            for (const kvp of map.entries()) {
                num = kvp[1];
                if(word === kvp[0]) {
                    map.set(word, num + 1)
                }
            }
        } else {
            map.set(word, 1)
        }
    }
    let sorted = Array.from(map).sort((a,b) => b[1] - a[1])
    sorted.forEach(line => {
        console.log(`${line[0]} -> ${line[1]} times`)
    })
}

solve(["Here", "is", "the", "first",
    "sentence", "Here", "is",
    "another", "sentence", "And",
    "finally", "the", "third", "sentence"])