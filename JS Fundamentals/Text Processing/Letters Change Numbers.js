function solve(input) {

    let strings = [];
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    let result = 0;
    let totalResult = 0;


    input.split(' ').forEach(string => {
        if (string.length > 0) {
            strings.push(string)
        }
    })

    strings.forEach(str => {
        result = 0;
        let number = Number(str.slice(1, str.length - 1));
        let firstChar = str[0];
        let lastChar = str.slice(-1);

        if (firstChar.match(/[a-zA-Z]/) || lastChar.match(/[a-zA-Z]/)) {

            if (firstChar.match(/[A-Z]/)) {
                firstChar = firstChar.toLowerCase();
                result += number / Number(alphabet.indexOf(firstChar) + 1)
            } else {
                result += number * Number(alphabet.indexOf(firstChar) + 1)
            }

            if (lastChar.match(/[a-z]/)) {
                result += Number(alphabet.indexOf(lastChar) + 1);
            } else {
                lastChar = lastChar.toLowerCase();
                result -= Number(alphabet.indexOf(lastChar) + 1);
            }
            totalResult += result;
        }
    })
    console.log(totalResult.toFixed(2));
}

solve('P34562Z q2576f   H456z')