function solve(input) {

    let half = input.length / 2;

    let leftPart = input.substr(0, half);
    let rightPart = input.substr(half, half);

    console.log(reverseString(leftPart));
    console.log(reverseString(rightPart));

    function reverseString(string) {
        // let newString = '';
        //
        // for (let i = string.length - 1; i >= 0; i--) {
        //     newString += string[i];
        // }
        // return newString;

        return string.split('').reverse().join('')
    }
}

solve('tluciffiDsIsihTgnizamAoSsIsihT')