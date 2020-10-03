function solve(input) {

    let str = input.shift();

    while ((line = input.shift()) !== 'Done') {
        let [command, first, second] = line.split(' ');

        if (command === 'Change') {
            let index = str.indexOf(first);

            while (index > -1) {
                str = str.replace(first, second)
                index = str.indexOf(first);
            }
            console.log(str);
        } else if (command === 'Includes') {
            if (str.includes(first)) {
                console.log('True')
            } else {
                console.log('False')
            }
        } else if (command === 'End') {
            if (str.endsWith(first)) {
                console.log('True')
            } else {
                console.log('False')
            }
        } else if (command === 'Uppercase') {
            str = str.toUpperCase();
            console.log(str)
        } else if (command === 'FindIndex') {
            if (str.indexOf(first) !== undefined) {
                console.log(str.indexOf(first));
            }
        } else if (command === 'Cut') {
            let startIndex = Number(first);
            let endIndex = Number(second);
            str = str.substr(startIndex, endIndex);
            console.log(str)
        }
    }
}
solve([
    '//Th1s 1s my str1ng!//',
    'Change 1 i',
    'Includes string',
    'End my',
    'Uppercase',
    'FindIndex I',
    'Cut 5 5',
    'Done'
])