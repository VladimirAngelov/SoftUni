function solve(input) {

    let obj = {}

    for (const line of input) {
        if (line.includes(':')) {
            let [command, name, first, second] = line.split(':');

            if (command === "Add") {
                let health = Number(first)
                let energy = Number(second)

                if (!obj.hasOwnProperty(name)) {
                    obj[name] = {health: health, energy: energy}
                } else {
                    obj[name].health += health;
                }
            } else if (command === 'Attack') {
                let damage = Number(second);
                if (obj.hasOwnProperty(name) && obj.hasOwnProperty(first)) {
                    obj[first].health -= damage;
                    obj[name].energy -= 1;

                    if (obj[first].health <= 0) {
                        delete obj[first];
                        console.log(`${first} was disqualified!`)
                    }
                    if (obj[name].energy <= 0) {
                        delete obj[name];
                        console.log(`${name} was disqualified!`)
                    }
                }
            } else if (command === 'Delete') {
                if (obj.hasOwnProperty(name)) {
                    delete obj[name];
                }
                if (name === 'All') {
                    for (const key of Object.keys(obj)) {
                        delete obj[key];
                    }
                }
            }
        } else {
            break;
        }
    }
    // console.log(obj)
    console.log(`People count: ${Object.keys(obj).length}`)
    Object.entries(obj)
        .sort((a,b) => b[1].health - a[1].health
            || a[0].localeCompare(b[0]))
        .forEach(el => console.log(`${el[0]} - ${el[1].health} - ${el[1].energy}`))
}

solve([
    'Add:Bonnie:3000:5',
    'Add:Johny:4000:10',
    'Attack:Johny:Bonnie:400',
    'Add:Chicken:1000:1',
    'Add:Rabbit:3000:5',
    'Add:Buggy:1259:10',
    'Attack:Chicken:Rabbit:1000',
    'Results'
])