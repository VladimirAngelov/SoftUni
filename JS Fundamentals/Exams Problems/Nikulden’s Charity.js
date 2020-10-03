function solve(input) {

    let str = input.shift();
    let line = input.shift();

    while (line !== 'Finish') {
        let [command, firstArg, secondArg] = line.split(' ');

        switch (command) {
            case 'Replace': {
                let index = str.indexOf(firstArg);

                while (index > -1) {
                    str = str.replace(firstArg, secondArg);
                    index = str.indexOf(firstArg);
                }
                console.log(str)
                break;
            }
            case 'Cut': {
                let startIndex = Number(firstArg);
                let endIndex = Number(secondArg);

                if (str[startIndex] === undefined || str[endIndex] === undefined) {
                    console.log('Invalid indexes!')
                } else {
                    let substring = str.substring(startIndex, endIndex + 1);
                    str = str.replace(substring, '');
                    console.log(str)
                }
            }
                break;
            case 'Make':
                if (firstArg === 'Upper') {
                    str = str.toUpperCase();
                } else if (firstArg === 'Lower') {
                    str = str.toLowerCase()
                }
                console.log(str)
                break;
            case 'Check':
                if (str.includes(firstArg)) {
                    console.log(`Message contains ${firstArg}`)
                } else {
                    console.log(`Message doesn't contain ${firstArg}`);
                }
                break;
            case 'Sum':
                let startIndex = Number(firstArg);
                let endIndex = Number(secondArg);

                if (str[startIndex] === undefined || str[endIndex] === undefined) {
                    console.log('Invalid indexes!')
                } else {
                    let sum = 0;
                    str
                        .substring(startIndex, endIndex + 1)
                        .split('')
                        .forEach(char => sum += char.charCodeAt(0))
                    console.log(sum)
                }
                break;
        }
        line = input.shift();
    }
}

solve([
    'HappyNameDay',
    'Replace p r',
    'Make Lower',
    'Cut 2 23',
    'Sum -2 2',
    'Finish'
])