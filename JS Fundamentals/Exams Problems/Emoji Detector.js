function solve(input) {

    let str = input.shift()
    let emojiPattern = /([:*]{2})(?<name>[A-Z][a-z]{2,})\1/g

    let result = emojiPattern.exec(str)
    let total = str.match(/\d/g).map(Number).reduce((a,b) => a * b);
    let coolest = [];
    let counter = 0;
    while (result !== null) {
        let currentSum = 0;
        counter++
        for (const char of result.groups.name.split('')) {
            currentSum += char.charCodeAt(0)
        }
        if (currentSum > total) {
            coolest.push(result[0]);
        }
        result = emojiPattern.exec(str)
    }
    console.log(`Cool threshold: ${total}`);
    console.log(`${counter} emojis found in the text. The cool ones are:`)

    if (coolest.length > 0) {
        coolest.forEach(x => console.log(x));
    }
}
solve([
    "It is a long established fact that 1 a reader will be distracted by 9 the readable content of a page when looking at its layout. The point of using ::LoremIpsum:: is that it has a more-or-less normal 3 distribution of 8 letters, as opposed to using 'Content here, content 99 here', making it look like readable **English**."
])