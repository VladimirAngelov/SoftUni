solve = (input) => {

    let obj = {};
    let juice = {};

    input.forEach(line => {
        let [fruit, quantity] = line.split(' => ');
        quantity = Number(quantity);

        if (!obj.hasOwnProperty(fruit)) {
            obj[fruit] = quantity;
        } else {
            obj[fruit] += quantity;
        }

        if (obj[fruit] >= 1000) {
            juice[fruit] = 0;
        }

        if (juice.hasOwnProperty(fruit)) {
            juice[fruit] = obj[fruit];
        }
    })
    let result = '';

    Object.entries(juice).forEach(kvp => {
        result += `${kvp[0]} => ${parseInt(kvp[1] / 1000)}\n`
    })
    return result;
}
console.log(solve(['Orange => 2000',
    'Peach => 1432',
    'Banana => 450',
    'Peach => 600',
    'Strawberry => 549']
))