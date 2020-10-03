function solve(input) {

    let number = Number(input.shift());
    let bossPattern = /([|]{1})(?<boss>[A-Z]+)\1:(#)(?<title>[A-z]+ [A-z]+)\3/g;
    let boss = input.shift();
    let result = bossPattern.exec(boss);

    for (let i = 0; i < number; i++) {
        if (result !== null) {
            console.log(`${result.groups.boss}, The ${result.groups.title}`);
            console.log(`>> Strength: ${result.groups.boss.length}`)
            console.log(`>> Armour: ${result.groups.title.length}`)
        } else {
            console.log(`Access denied!`)
        }
        boss = input.shift();
        result = bossPattern.exec(boss)
    }
}

solve([
    '3',
    '|PETER|:#H1gh Overseer#',
    '|IVAN|:#Master detective#',
    '|KARL|: #Marketing lead#'
])