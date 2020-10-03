function piccolo(input) {

    let garage = [];

    for (const element of input) {
        let [command, carNumber] = element.split(', ');

        if (command === 'IN' && !garage.includes(carNumber)) {
            garage.push(carNumber);
        } else if (command === 'OUT' && garage.includes(carNumber)) {
            garage = garage.filter(car => car !== carNumber)
        }
    }
    if (garage.length > 0) {
        let sorted = garage.sort((a, b) => a.localeCompare(b));
        sorted.forEach(el => {
            console.log(el)
        })
    } else {
        console.log('Parking Lot is Empty');
    }
}

piccolo(['IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'IN, CA9999TT',
    'IN, CA2866HI',
    'OUT, CA1234TA',
    'IN, CA2844AA',
    'OUT, CA2866HI',
    'IN, CA9876HH',
    'IN, CA2822UU']
)