function wordsTracker(input) {

    let map = new Map();

    input.shift().split(' ').forEach(word => map.set(word, 0));

    input.forEach(line => {
        let word = line.split(',')[0];
        if (map.has(word)) {
            for (const kvp of map.entries()) {
                let num = kvp[1];
                if(kvp[0] === word)
                map.set(word, num +1)
            }
        }
    })
    let sorted = Array.from(map).sort((a,b) => b[1] - a[1])
    sorted.forEach(line => console.log(`${line[0]} - ${line[1]}`))
}
wordsTracker([
        'this sentence', 'In','this','sentence','you','have','to','count','the','occurances','of','the'
        ,'words','this','and','sentence','because','this','is','your','task'
    ]
)