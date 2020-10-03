function solve(input) {

    let pattern = /\+([359]+)([- ])2(\2)(\d{3})(\2)(\d{4})\b/gm;
    let validPhones = [];
    let phones = input.shift();
    let result = pattern.exec(phones);

    while (result !== null) {
        validPhones.push(result[0]);
        result = pattern.exec(phones);
    }
    console.log(validPhones.join(', '))
}
solve([
    "+359 2 222 2222,359-2-222-2222, +359/2/222/2222, +359-2 222 2222 +359 2-222-2222, +359-2-222-222, +359-2-222-22222 +359-2-222-2222"
])