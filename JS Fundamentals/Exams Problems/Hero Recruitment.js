function solve(input) {

    let heroes = {};

    input.forEach(line => {
        let [command, name, spell] = line.split(' ');

        if (command === 'Enroll') {
            if (!heroes.hasOwnProperty(name)) {
                heroes[name] = [];
            } else {
                console.log(`${name} is already enrolled.`);
            }
        }
        if (command === 'Learn') {

            if (heroes[name].includes(spell)) {
                console.log(`${name} has already learnt ${spell}.`)
            }
            if (!heroes[name].includes(spell)) {
                heroes[name].push(spell);
            } else {
                console.log(`${name} doesn't exist.`)
            }

        }
        if (command === 'Unlearn') {
            if (!heroes.hasOwnProperty(name)) {
                console.log(`${name} doesn't exist.`);
            } else if (heroes[name].includes(spell) || heroes[name] === undefined) {
                console.log(`${name} doesn't know ${spell}.`);
            } else {
                heroes[name].splice(heroes[name].indexOf(spell), 1)
            }
        }
        if (command === 'End') {

        }
    })
    console.log(`Heroes:`)
    let sorted = Object.entries(heroes)
        .sort((a,b) => a[0].localeCompare(b[0]) || b[1].length - a[1].length)
        .forEach(x => console.log(`== ${x[0]}: ${x[1]}`))
}

solve([
    'Enroll Stefan',
    'Enroll Pesho',
    'Enroll Stefan',
    'Learn Stefan ItShouldWork',
    'Learn Stamat ItShouldNotWork',
    'Unlearn Gosho Dispel',
    'Unlearn Stefan ItShouldWork',
    'End'
])