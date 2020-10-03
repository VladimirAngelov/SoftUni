function solve(input) {

    let obj = {}

    let n = Number(input.shift());
    let totalRate = 0;


    for (let i = 0; i < n; i++) {
        let getPlants = input.shift();
        let [plant, rarity] = getPlants.split('<->');
        rarity = Number(rarity);
        if (!obj.hasOwnProperty(plant)) {
            obj[plant] = {rarity: rarity, rating: 0}
        } else {
            obj[plant].rarity += rarity;
        }
    }

    while ((line = input.shift()) !== 'Exhibition') {
        let command = line.split(': ')[0];
        let plant = line.split(' - ')[0].split(': ')[1];

        if (command.includes('Rate')) {
            if (!obj.hasOwnProperty(plant)) {
                console.log('error')
            } else {
                let argument = line.split(' - ')[1].split(': ')[0];
                let rating = Number(argument);

                if (obj[plant].rating > 0) {
                    totalRate = (obj[plant].rating + rating) / 2;
                    obj[plant].rating = totalRate;
                    totalRate = 0;
                } else {
                    obj[plant].rating += rating;
                }
            }
        } else if (command.includes('Update')) {
            if (!obj.hasOwnProperty(plant)) {
                console.log('error')
            } else {
                let argument = line.split(' - ')[1].split(': ')[0];
                let newRarity = Number(argument);
                obj[plant].rarity = newRarity;
            }
        } else if (command.includes('Reset')) {
            if (!obj.hasOwnProperty(plant)) {
                console.log('error')
            } else {
                obj[plant].rating = 0;
            }
        }
    }
    console.log(`Plants for the exhibition:`)
    Object.entries(obj)
        .sort((a, b) => b[1].rarity - a[1].rarity
            || b[1].rating - a[1].rating)
        .forEach(kvp => console.log(`- ${kvp[0]}; Rarity: ${kvp[1].rarity}; Rating: ${kvp[1].rating.toFixed(2)}`))

}

solve([
        '2',
        'Candelabra<->10',
        'Oahu<->10',
        'Rate: Oahu - 7',
        'Rate: Candelabra - 6',
        'Exhibition'
    ]
)