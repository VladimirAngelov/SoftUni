solution = (arr) => {

    let copy = arr.slice();
    let train = copy[0].split(' ').map(makeMeNumber);
    let maxCapacity = Number(copy[1]);

    let commands = copy.slice(2);

    for (const command of commands) {
        let commandInfo = command.split(' '); // сплитва елементите които са различни от елемент с интервал между тях

        if (commandInfo.length === 2) {
            let wagon = Number(commandInfo[1]);

            train.push(wagon);
        } else {
            let passangers = Number(commandInfo[0]);

            for (let wagon in train) {
                let currentPassangers = train[wagon];

                if ((passangers + currentPassangers) <= maxCapacity) {
                    train[wagon] += passangers;
                    break;
                }
            }
        }
    }
    console.log(train.join(' '));


    function makeMeNumber(element) { // функция която да обърне стринга в числа през целия масив отгоре с MAP
        return Number(element);
    }

}
solution(['32 54 21 12 4 0 23',
    '75',
    'Add 10',
    'Add 0',
    '30',
    '10',
    '75']
)