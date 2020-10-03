solve = (input) => {

    let cars = {};
    let result = '';

    input.forEach(line => {
        let [brand, model, produced] = line.split(' | ');
        produced = +produced;

        if (!cars[brand]) {
            cars[brand] = [{[model]: produced}];
        } else {
            if (Object.keys(cars[brand][0]).includes(model)) {
                cars[brand][0][model] += produced
            } else {
                cars[brand].push({[model]: produced});
            }
        }
    })
    Object.entries(cars).forEach(car => {
        result += `${car[0]}\n`
        car[1].forEach(mod => {
            result += `###${Object.keys(mod)} -> ${Object.values(mod)}\n`;
        })
    })
    return result;
}
console.log(solve(
    ['Audi | Q7 | 1000',
    'Audi | Q6 | 100',
    'BMW | X5 | 1000',
    'BMW | X6 | 100',
    'Citroen | C4 | 123',
    'Volga | GAZ-24 | 1000000',
    'Lada | Niva | 1000000',
    'Lada | Jigula | 1000000',
    'Citroen | C4 | 22',
    'Citroen | C5 | 10']))