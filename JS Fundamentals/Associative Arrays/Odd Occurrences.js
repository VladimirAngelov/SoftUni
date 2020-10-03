function oddOcc(input) {
    let elements = input.split(' ').map(x => x.toLowerCase());
    let map = new Map();

    for (const element of elements) {
        let num = 0;
        if (map.has(element)) {
            for (const entry of map.entries()) {
                num = entry[1];
                if (entry[0] === element) {
                    map.set(element, num + 1)
                }
            }
        } else {
            map.set(element, 1);
        }
    }
    let output = Array.from(map);
    let result = [];
    let odd = output.filter(el => el[1] % 2 !== 0);
    odd.forEach(el => result.push(el[0]));
    console.log(result.join(' '))
}

oddOcc('Java C# Php PHP Java PhP 3 C# 3 1 5 C#')