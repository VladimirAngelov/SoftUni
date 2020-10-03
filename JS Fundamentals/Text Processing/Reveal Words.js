function revealWords(inputWords, sentence) {

    let words = inputWords.split(', ');

    words.forEach(word => {
        let asterix = '*'.repeat(word.length); // запазваме дължината на звездичките които търсим
        sentence = sentence.replace(asterix, word); // заместваме броя на звездичките с дума равна на тяхната дължина
    })
    console.log(sentence)
}

revealWords('great, learning',
    'softuni is ***** place for ******** new programming languages'

)