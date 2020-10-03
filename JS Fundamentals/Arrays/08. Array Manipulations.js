function arrayManipulation(input) {


    let arr = input.shift().split(' ').map(Number);

    for (let i = 0; i < input.length; i++) {
        let [command, firstNum, secondNum] = input[i].split(' ');

        firstNum = Number(firstNum);
        secondNum = Number(secondNum);

        switch (command) {
            case 'Add':
                add = (a) => arr.push(a);
                add(firstNum);
                break;
            case "Remove":
                remove = (a) => arr = arr.filter(el => el !== a);
                remove(firstNum);
                break;
            case "RemoveAt":
                removeAt = (a) => arr.splice(a, 1)
                removeAt(firstNum);
                break;
            case "Insert":
                insert = (a, b) => arr.splice(b, 0, a)
                insert(firstNum, secondNum);
                break;
        }
    }
    console.log(arr.join(' '));
}
arrayManipulation([
    '4 19 2 53 6 43',
    'Add 3',
    'Remove 2',
    'RemoveAt 1',
    'Insert 8 3']
)