function solve(word, text) {

    let wordLowerCase = word.toLowerCase(); // правим думата на малки букви
    text = text.toLowerCase(); // правим целия текст на малки букви

    if (text.split(' ').includes(wordLowerCase)) { // сплитваме по интервал да стане масив и проверяваме дали в масива има думата сама по себе си
        console.log(word)
    } else {
        console.log(`${word} not found!`)
    }
}
solve('javascript',
    'JavaScript is the best programming language'
)