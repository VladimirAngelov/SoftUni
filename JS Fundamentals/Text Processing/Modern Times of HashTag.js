function solve(input) {

    input
        .split(' ')
        .filter(word => word.startsWith('#') && word.length > 1)
        .filter(word => {
            return word.split('').slice(1).every(char => isLower(char) || isUpper(char))
        })
        .forEach(word => console.log(word.slice(1)));

    function isLower(char) {
        let asciiValue = char.charCodeAt(0);
        return asciiValue >= 97 && asciiValue <= 122;
    }

    function isUpper(char) {
        let asciiValue = char.charCodeAt(0);
        return asciiValue >= 65 && asciiValue <= 90;
    }
}

solve('Nowadays everyone uses # to tag a #special word in #socialMedia')