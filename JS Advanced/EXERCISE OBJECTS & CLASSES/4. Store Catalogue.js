solve = (input) => {
    const catalogue = {};

    input.forEach(line => {
        let [name, price] = line.split(' : ');

        let letter = name[0];

        if (!catalogue[letter]) {
            catalogue[letter] = [];
        }
        let product = {name, price}
        catalogue[letter].push(product);
    })
    let sorted = Object.entries(catalogue).sort((a,b) => a[0].localeCompare(b[0]))
    let result = '';

    for (let i = 0; i < sorted.length; i++) {
        result += `${sorted[i][0]}\n`

        let sortByName = sorted[i][1].sort((a,b) => a.name.localeCompare(b.name));
        sortByName.forEach(p => result += `  ${p.name}: ${p.price}\n`)
    }
    return result
}
console.log(solve(['Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10']
))