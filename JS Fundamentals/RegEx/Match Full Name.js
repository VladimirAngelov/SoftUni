function solve(input) {

    let validNames = [];
    let pattern = /\b[A-Z][a-z]+ [A-Z][a-z]+\b/g;
    let names = input.shift();
    let result = pattern.exec(names);

    while (result !== null) {
        validNames.push(result[0]);
        result = pattern.exec(names);
    }
    console.log(validNames.join(' '))
}

solve([
    "Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Test Testov, Ivan	Ivanov"
])