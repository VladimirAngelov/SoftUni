function reverseAnArrayOfStrings(elements) {

    let result = [];
    let output = '';

    let swapOperations = Math.ceil(elements.length / 2);

    for (let i = 0; i < swapOperations; i++) {
        result[i] = elements[elements.length - 1 - i];
        result[elements.length - 1 - i] = elements[i];
    }
    for(let element of result){
        output += element + ' ';
    }
    console.log(output)
}
reverseAnArrayOfStrings(['a', 'b', 'c', 'd', 'e'])