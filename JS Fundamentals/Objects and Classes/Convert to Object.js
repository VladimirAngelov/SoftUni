function solve(string) {

    let person = JSON.parse(string);

    for (let [key, value] of Object.entries(person)) {
        console.log(`${key}: ${value}`);
    }
}
solve('{"name": "George", "age": 40, "town": "Sofia"}')