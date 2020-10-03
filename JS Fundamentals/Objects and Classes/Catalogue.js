function solve(input) {
    let catalogue = [];
    input.forEach(line => {
        const tokens = line.split(' : ');
        const product = tokens[0];
        const price = Number(tokens[1]);
        catalogue.push({product, price});
    })
    catalogue.sort((a, b) => a.product.localeCompare(b.product));

    let group = {};

    catalogue.forEach(el => {
        let firstLetter = el.product.charAt(0)
        if (group[firstLetter] === undefined) {
            group[firstLetter] = [];
        }
        group[firstLetter].push(`${el.product}: ${el.price}`);
        // result += `  ${el.product}: ${el.price} \n`;
    })
    Object.keys(group).forEach(key => {
        let val = Object.values(group[key])
        console.log(`${key}\n  ${val}`)
    })
}

solve([
    'Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10'
])