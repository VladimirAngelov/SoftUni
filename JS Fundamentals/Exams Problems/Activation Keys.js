function solve(input) {

    let activationKey = input.shift();
    let tokens = input.shift();

    while (tokens !== 'Generate') {
        let [command, firstArgument, secondArgument, thirdArgument] = tokens.split('>>>');

        if (command === 'Contains') {
            if (activationKey.includes(firstArgument)) {
                console.log(`${activationKey} contains ${firstArgument}`);
            } else {
                console.log(`Substring not found!`);
            }
        }
        if (command === 'Flip') {
            let startIndex = Number(secondArgument);
            let endIndex = Number(thirdArgument);
            let replaced = activationKey.substring(startIndex, endIndex);
            let current = '';
            if (firstArgument === 'Upper') {
                current = activationKey.substring(startIndex, endIndex).toUpperCase();
                activationKey = activationKey.replace(replaced, current);
            } else {
                current = activationKey.substring(startIndex, endIndex).toLowerCase();
                activationKey = activationKey.replace(replaced, current);
            }
            console.log(activationKey)
        }
        if (command === 'Slice') {
            let startIndex = Number(firstArgument);
            let endIndex = Number(secondArgument);
            let deletePart = activationKey.substring(startIndex, endIndex);
            activationKey = activationKey.replace(deletePart, '');

            console.log(activationKey)
        }
        tokens = input.shift();
    }
    console.log(`Your activation key is: ${activationKey}`);
}
solve([
    '134softsf5ftuni2020rockz42',
    'Slice>>>3>>>7',
    'Contains>>>-rock',
    'Contains>>>-uni-',
    'Contains>>>-rocks',
    'Flip>>>Upper>>>2>>>8',
    'Flip>>>Lower>>>5>>>11',
    'Generate'
])