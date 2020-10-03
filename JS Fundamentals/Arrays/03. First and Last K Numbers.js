solve = (input) => {

    let k = input.shift();

    let firstElement = input.slice(0, k);
    let lastElement = input.slice(input.length - k);

    let firstResult = '';
    let lastResult = '';
    for (let i = 0; i < k; i++) {
        firstResult += ` ${firstElement[i]}`;
        lastResult += ` ${lastElement[i]}`;

    }
    console.log(firstResult);
    console.log(lastResult);

}
solve([2,
    7, 8, 9]
)