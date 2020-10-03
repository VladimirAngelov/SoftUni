function solve(input) {

    let pattern = />>([A-Za-z]+)<<([\d]+\.?[\d]*)!([\d]+)/gm;
    let furniture = [];
    let totalPrice = 0;

    input.forEach(el => {
        if (el.match(pattern)) {
            let result = pattern.exec(el);
            let furnitureType = result[1];
            let price = Number(result[2]);
            let quantity = Number(result[3]);
            totalPrice += price * quantity;
            furniture.push(furnitureType);
        }
    })
    console.log('Bought furniture:');
    furniture.forEach(el => console.log(el));
    console.log(`Total money spend: ${totalPrice.toFixed(2)}`)
}
solve([ '>>Sofa<<312.23!3', '>>TV<<300!5', '>Invalid<<!5', 'Purchase' ])