function garage(input) {

    let map = new Map();

    input.forEach(line => {
        let tokens = line.split(' - ');
        let garageNum = +(tokens.shift());

        let carInfo = tokens[0].split(': ').join(' - ');

        if (!map.has(garageNum)) {
            map.set(garageNum, [carInfo])
        } else {
            let old = map.get(garageNum);
            map.set(garageNum, old.concat(carInfo));
        }
    })
    let sorted = Array.from(map).sort((a,b) => a - b)
    sorted.forEach(el => {
        console.log(`Garage № ${el[0]}`);
        for (const line of el[1]) {
            console.log(`--- ${line}`)
        }
    })
}

garage(['1 - color: blue, fuel type: diesel',
    '1 - color: red, manufacture: Audi',
    '2 - fuel type: petrol',
    '4 - color: dark blue, fuel type: diesel, manufacture: Fiat'
])