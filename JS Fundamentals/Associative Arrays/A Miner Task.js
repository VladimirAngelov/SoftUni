function minerTask(input) {

    let obj = {};

    for (let i = 0; i < input.length; i++) {
        let resource = input[i];
        let quantity = Number(input[i + 1]);
        if (i % 2 === 0) {
            if (obj.hasOwnProperty(resource)) {
                let currentQauntity = obj[resource];
                quantity += currentQauntity;
                obj[resource] = quantity;
            } else {
                obj[resource] = quantity;
            }
        }
    }
    Object.entries(obj).forEach(x => {
        console.log(x.join(' -> '))
    })
}

minerTask([
    'gold',
    '155',
    'silver',
    '10',
    'copper',
    '17',
    'gold',
    '15'
])