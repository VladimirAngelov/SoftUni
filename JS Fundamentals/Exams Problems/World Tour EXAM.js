function solve(input) {

    let str = input.shift();

    while ((line = input.shift()) !== 'Travel') {
        let [command, first, second] = line.split(':');

        if (command.includes('Add')) {
            let index = Number(first);
            if (str[index] !== undefined) {
                // str = [str.slice(0, index), second, str.slice(index)].join('')
                let currentString = str.split('')
                currentString.splice(index, 0, second)
                str = currentString.join('')
            }
            console.log(str)
        }
        else if (command.includes('Remove')) {
            let startIndex = Number(first);
            let endIndex = Number(second);

            if (str[startIndex] !== undefined && str[endIndex] !== undefined) {
                let removed = str.substring(startIndex, endIndex + 1);
                str = str.replace(removed, '');
            }
            console.log(str)
        } else if (command.includes('Switch')) {
            let firstIndex = str.indexOf(first);
            while (firstIndex > -1) {
                if (str.includes(first)) {
                    str = str.replace(first, second)
                }
                firstIndex = str.indexOf(firstIndex)
            }
            console.log(str)
        }
    }
    console.log(`Ready for world tour! Planned stops: ${str}`)
}

solve([
    'Hawai::Cyprys-Greece',
    'Add Stop:7:Rome',
    'Remove Stop:11:16',
    'Switch:Hawai:BulgariaHawai',
    'Travel'
])