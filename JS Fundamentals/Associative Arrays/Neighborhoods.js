function neighborhoods(input) {

    let map = new Map();
    let neighborhoods = input.shift().split(', ');
    neighborhoods.forEach(nH => map.set(nH, 0))
    for (const element of input) {
        let entries = element.split(' - ');
        if (map.has(entries[0])) {
            let num = 0;
            for (const kvp of map.entries()) {
                num = kvp[1]
                let street = kvp[0];
                if (street === entries[0]) {
                    map.set(entries[0], num + 1)
                }
            }
        }
    }
    let sorted = Array.from(map).sort((a,b) => b[1] - a[1]);
    sorted.forEach(line => {
        if (line[1] > 0) {
            console.log(`${line[0]}: ${line[1]}`)
            for (const element of input) {
                let entries = element.split(' - ');
                if (line[0] === entries[0]) {
                    console.log(`--${entries[1]}`)
                }
            }
        } else {
            console.log(`${line[0]}: ${line[1]}`)
        }
    })
}

neighborhoods(['Abbey Street, Herald Street, Bright Mews',
    'Bright Mews - Garry',
    'Bright Mews - Andrea',
    'Invalid Street - Tommy',
    'Abbey Street - Billy'
])