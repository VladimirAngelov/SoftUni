function solve(input) {

    let pattern = /%(?<name>[A-Z][a-z]+)%[^|$%.]*<(?<product>[\w]+)>[^|$%.]*[\w]*\|(?<quantity>[\d]+)[^|$%.]*\|[a-z]*(?<price>[\d]+\.?[\d]+)\$/g;
    let result = pattern.exec(input);
    let totalIncome = 0;

    while (result) {
        let {name, product, quantity, price} = result.groups;
        quantity = Number(quantity);
        price = Number(price);
        console.log(`${name}: ${product} - ${(quantity * price).toFixed(2)}`);
        totalIncome += quantity * price;
        result = pattern.exec(input);
    }
    console.log(`Total income: ${totalIncome.toFixed(2)}`)
}
solve([
    '%George%<Croissant>|2|10.3$',
    '%Peter%<Gum>|1|1.3$',
    '%Maria%<Cola>|1|2.4$',
    'end of shift'
])