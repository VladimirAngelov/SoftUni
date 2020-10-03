function solve(input) {

    let obj = {};
    let leaders = [];
    input.forEach(line => {

        if (line.includes('arrives')) {
            let indexOfArrives = line.indexOf('arrives');
            let leaderName = line.slice(0, indexOfArrives).trim();

            if (!obj.hasOwnProperty(leaderName)) {
                obj[leaderName] = {
                    armiesName: {},
                    armiesCount: 0
                };
            }
            leaders.push(leaderName);
        } else if (line.includes('defeated')) {
            let indexOfDefeated = line.indexOf('defeated');
            let leader = line.slice(0, indexOfDefeated).trim();
            let indexOfLeader = leaders.indexOf(leader);
            if (obj.hasOwnProperty(leader)) {
                delete obj[leader];
                leaders.splice(indexOfLeader, 1);
            }
        } else if (line.includes(':')) {
            let [leader, army] = line.split(': ');
            let [armyName, armyCount] = army.split(', ');
            if (obj.hasOwnProperty(leader)) {
                if (!obj[leader].armiesName.hasOwnProperty(armyName)) {
                    obj[leader].armiesName[armyName] = Number(armyCount);
                    obj[leader].armiesCount += Number(armyCount);
                }
            }
        } else if (line.includes('+')) {
            let [armyName, armyCount] = line.split(' + ');
            leaders.forEach(leader => {
                for (const army in obj[leader]) {
                    if (obj[leader][army].hasOwnProperty(armyName)) {
                        obj[leader].armiesName[armyName] += Number(armyCount);
                    }
                    obj[leader].armiesCount += Number(armyCount);
                }
            })
        }
    })
    Object.entries(obj)
        .sort((a, b) => b[1].armiesCount - a[1].armiesCount)
        .forEach(army => {
            console.log(`${army[0]}: ${army[1].armiesCount}`);
            Object.entries(army[1].armiesName)
                .sort((a, b) => b[1] - a[1])
                .forEach(armyName => {
                    console.log(`>>> ${armyName[0]} - ${armyName[1]}`);
                })
        })
}

solve(['Rick Burr arrives',
    'Fergus: Wexamp, 30245',
    'Rick Burr: Juard, 50000',
    'Findlay arrives',
    'Findlay: Britox, 34540',
    'Wexamp + 6000',
    'Juard + 1350',
    'Britox + 4500',
    'Porter arrives',
    'Porter: Legion, 55000',
    'Legion + 302',
    'Rick Burr defeated',
    'Porter: Retix, 3205'
])