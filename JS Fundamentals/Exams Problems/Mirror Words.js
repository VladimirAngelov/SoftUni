function solve(input) {

    let text = input.shift();
    let pattern = /([#@])(?<firstWord>[A-Za-z]{3,})\1{2}(?<secondWord>[A-Za-z]{3,})\1/g;
    let mirrorWords = [];

    let match;
    let wordPairsCount = 0;
    while (match = pattern.exec(text)) {
        wordPairsCount++;
        // let firstWord = match.groups.firstWord;
        // let secondWord = match.groups.secondWord;
        let {firstWord, secondWord} = match.groups;

        let reversedFirstWord = firstWord.split('').reverse().join('')

        if (reversedFirstWord === secondWord) {
            mirrorWords.push(`${firstWord} <=> ${secondWord}`) // когато напишем едно и също като key и value, JS го разбира
        }
    }
    if (wordPairsCount < 1) {
        console.log('No word pairs found!')
    } else  {
        console.log(`${wordPairsCount} word pairs found!`);
    }
    if (mirrorWords.length < 1) {
        console.log('No mirror words!')
    } else {
        console.log('The mirror words are:');
        console.log(mirrorWords.join(', '))
    }
}
solve([ '#po0l##l0op# @bAc##cAB@ @LM@ML@ #xxxXxx##xxxXxx# @aba@@ababa@' ]
)