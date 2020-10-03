function solve(input) {

    let racers = input[0].split(', ');
    let raceInfo = {};

    for (const data of input.slice(1)) {
        let namePattern = data.match(/[A-Za-z]/g);

        if (namePattern) {
            let numberPattern = data.match(/[\d]/g);

            let name = namePattern.join('');

            if (numberPattern) {
                let distance = numberPattern.map(Number).reduce((a, b) => a + b);

                if (racers.includes(name)) {
                    if (!raceInfo.hasOwnProperty(name)) {
                        raceInfo[name] = distance;
                    } else {
                        raceInfo[name] += distance;
                    }
                }
            }
        }
    }
    let counter = 0;
    Object.entries(raceInfo)
        .sort((a, b) => b[1] - a[1])
        .forEach(kvp => {
            counter++;
            if (counter === 1) {
                console.log(`1st place: ${kvp[0]}`)
            }
            if (counter === 2) {
                console.log(`2nd place: ${kvp[0]}`)
            }
            if (counter === 3) {
                console.log(`3rd place: ${kvp[0]}`)
            }
        })
}

solve([
    'George, Peter, Bill, Tom',
    'G4e@55or%6g6!68e!!@',
    'R1@!3a$y4456@',
    'B5@i@#123ll',
    'G@e54o$r6ge#',
    '7P%et^#e5346r',
    'T$o553m&6',
    'end of race'
])



