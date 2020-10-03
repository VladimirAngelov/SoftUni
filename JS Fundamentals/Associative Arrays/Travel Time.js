function travelTime(arr) {
    const countries = new Map();

    for (const line of arr) {
        let [country, city, price] = line.split(' > ');

        if (!countries.has(country)) {
            let obj = {
                [city]: Number(price),
            }

            countries.set(country, obj);
        } else {
            if (countries.get(country)[city] !== undefined) {
                let oldPrice = countries.get(country)[city];

                if (price < oldPrice) {
                    countries.get(country)[city] = price;
                }
            } else {
                countries.get(country)[city] = price;
            }
        }
    }
    let sorted = Array.from(countries.entries()).sort();
    sorted.forEach(entry => {
        let [country, obj] = entry;
        let objectEntries = Object.entries(obj);

        if (objectEntries.length > 1) {
            objectEntries = objectEntries.sort((a, b) => {
                costA = a[1];
                costB = b[1];

                return costA - costB;
            });

            let resultString = '';

            objectEntries.forEach(city => {
                let str = (city.join(' -> '));
                resultString += str + ' ';
            });

            console.log(`${country} -> ${resultString}`);
        } else {
            let str = objectEntries[0].join(' -> ');
            console.log(`${country} -> ${str}`);
        }
    })

}

travelTime([
    "Bulgaria > Sofia > 500",
    "Bulgaria > Sopot > 800",
    "France > Paris > 2000",
    "Albania > Tirana > 1000",
    "Bulgaria > Sofia > 200"
])