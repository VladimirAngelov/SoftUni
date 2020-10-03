function solve(input) {

    let obj = {};

    let tokens = input.shift();
    let unlikedMeals = 0;

    while (tokens !== 'Stop') {
        let [command, name, food] = tokens.split('-');

        if (command === 'Like') {
            if (!obj.hasOwnProperty(name)) {
                obj[name] = [];
            }
            if (!obj[name].includes(food)) {
                obj[name].push(food);
            }
        } else if (command === 'Unlike') {
            if (obj.hasOwnProperty(name)) {
                if (obj[name].includes(food)) {
                    obj[name].splice(obj[name].indexOf(food), 1)
                    console.log(`${name} doesn't like the ${food}.`);
                    unlikedMeals += 1;
                } else {
                    console.log(`${name} doesn't have the ${food} in his/her collection.`)
                }
            } else {
                console.log(`${name} is not at the party.`)
            }
        }
        tokens = input.shift();
    }
    Object.entries(obj)
        .sort((a, b) => b[1].length - a[1].length
            || a[0].localeCompare(b[0]))
        .forEach(line => {
            console.log(`${line[0]}: ${line[1].join(', ')}`)
        })
    console.log(`Unliked meals: ${unlikedMeals}`)
}

solve([
    'Like-Krisi-shrimps',
    'Like-Krisi-soup',
    'Like-Misho-salad',
    'Like-Pena-dessert',
    'Stop'
])