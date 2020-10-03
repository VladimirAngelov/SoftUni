function solve(sentence, word) {
    // let counter = 0;
    // sentence.split(' ').forEach(el => {
    //     if(el === word) {
    //         counter++
    //     }
    // })
    // console.log(counter)

    let count = 0;
    let index = sentence.indexOf(` ${word} `);

    while(index > -1) {
        count++;
        index = sentence.indexOf(` ${word} `, index + 1);
    }
    if (sentence.startsWith(word)) {
        count++;
    }
    if (sentence.endsWith(word)) {
        count++;
    }
    console.log(count)
}
solve("This is a word and it also is a sentence",
    "is"
)