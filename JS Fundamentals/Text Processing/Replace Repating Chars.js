function solve(input) {

    let characters = '';

    for (const char of input.split('')) { // делим стринга на букви

        if (!characters.endsWith(char)) {
            characters += char;
        }
    }
    console.log(characters)
}

solve('aaaaabbbbbcdddeeeedssaa')