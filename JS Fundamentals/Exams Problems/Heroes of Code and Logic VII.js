function solve(input) {

    let obj = {};
    let numOfHeroes = Number(input.shift());

    for (let i = 0; i < numOfHeroes; i++) {
        let [name, hp, mp] = input.shift().split(' ');
        hp = Number(hp);
        mp = Number(mp);
        obj[name] = [hp, mp]
    }
    let tokens = input.shift();

    while (tokens !== 'End') {
        let [command, name, firstArg, secondArg] = tokens.split(' - ')
        switch (command) {
            case 'CastSpell':
                let mpNeeded = Number(firstArg);
                let oldMp = Number(obj[name][1]);
                if (mpNeeded <= obj[name][1]) {
                    obj[name][1] = oldMp - mpNeeded;
                    console.log(`${name} has successfully cast ${secondArg} and now has ${oldMp - mpNeeded} MP!`);
                } else {
                    console.log(`${name} does not have enough MP to cast ${secondArg}!`)
                }
                break;
            case 'TakeDamage':
                let oldHp = obj[name][0]
                obj[name][0] = oldHp - Number(firstArg);

                if (obj[name][0] > 0) {
                    console.log(`${name} was hit for ${firstArg} HP by ${secondArg} and now has ${obj[name][0]} HP left!`)
                } else {
                    console.log(`${name} has been killed by ${secondArg}!`)
                    delete obj[name]
                }
                break;
            case 'Recharge':
                let rechargedAmount = Number(firstArg);
                let currentMp = Number(obj[name][1])

                if ((currentMp + rechargedAmount) >= 200) {
                    obj[name][1] = 200;
                    console.log(`${name} recharged for ${200 - currentMp} MP!`);
                } else {
                    console.log(`${name} recharged for ${rechargedAmount} MP!`);
                    obj[name][1] = rechargedAmount + currentMp
                }
                break;
            case 'Heal':
                let rechargedHp = Number(firstArg);
                let currentHp = Number(obj[name][0])

                if ((currentHp + rechargedHp) >= 100) {
                    obj[name][0] = 100;
                    console.log(`${name} healed for ${100 - currentHp} HP!`);
                } else {
                    console.log(`${name} healed for ${rechargedHp} HP!`);
                    obj[name][0] = currentHp + rechargedHp
                }
                break;
        }
        tokens = input.shift();
    }
    Object.entries(obj)
        .sort((a,b) => b[1][0] - a[1][0]
        || a[0].localeCompare(b[0]))
        .forEach(line => {
            console.log(`${line[0]}\n  HP: ${line[1][0]}\n  MP: ${line[1][1]}`)
        })
}

solve([
    '4',
    'Adela 90 150',
    'SirMullich 70 40',
    'Ivor 1 111',
    'Tyris 94 61',
    'Heal - SirMullich - 50',
    'Recharge - Adela - 100',
    'CastSpell - Tyris - 1000 - Fireball',
    'TakeDamage - Tyris - 99 - Fireball',
    'TakeDamage - Ivor - 3 - Mosquito',
    'End'
])