function solve(input) {

    let obj = {};

    for (let el of input) {
        if (el.includes('||')) {
            let [city, population, gold] = el.split('||');
            population = Number(population);
            gold = Number(gold);

            if (!obj.hasOwnProperty(city)) {
                obj[city] = {
                    population: population,
                    gold: gold
                }
            } else {
                obj[city].population += population;
                obj[city].gold += gold;
            }
        }
        if (!el.includes('Sail')) {
            if (el.includes('Plunder')) {
                el = el.split('=>').slice(1)
                let [town, people, gold] = el
                gold = Number(gold);

                obj[town].population -= people;
                obj[town].gold -= gold;
                console.log(`${town} plundered! ${gold} gold stolen, ${people} citizens killed.`)
                if (obj[town].population <= 0 || obj[town].gold <= 0) {
                    delete obj[town];
                    console.log(`${town} has been wiped off the map!`)
                }
            }
            if (el.includes('Prosper')) {
                el = el.split('=>').slice(1)
                let [town, gold] = el
                gold = Number(gold);

                if (gold < 0) {
                    console.log(`Gold added cannot be a negative number!`)
                } else {
                    obj[town].gold += gold;
                    console.log(`${gold} gold added to the city treasury. ${town} now has ${obj[town].gold} gold.`)
                }
            }
        }
        if (el.includes('End')) {
            if (Object.keys(obj).length > 0) {
                console.log(`Ahoy, Captain! There are ${Object.keys(obj).length} wealthy settlements to go to:`)
                Object.entries(obj)
                    .sort((a, b) => b[1].gold - a[1].gold)
                    .sort((a, b) => a - b)
                    .forEach(entry => {
                        console.log(`${entry[0]} -> Population: ${entry[1].population} citizens, Gold: ${entry[1].gold} kg`)
                    })
            } else {
                console.log(`Ahoy, Captain! All targets have been plundered and destroyed!`)
            }
            break;
        }
    }
}

solve([
    'Nassau||95000||1000',
    'San Juan||930000||1250',
    'Campeche||270000||690',
    'Port Royal||320000||1000',
    'Port Royal||100000||2000',
    'Sail',
    'Prosper=>Port Royal=>-200',
    'Plunder=>Nassau=>94000=>750',
    'Plunder=>Nassau=>1000=>150',
    'Plunder=>Campeche=>150000=>690',
    'End'
])