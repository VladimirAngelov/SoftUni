function commonElements(firstArr, secondArr) {

    for (let i = 0; i < firstArr.length; i++) {
        let firstElement = firstArr[i];

        for (let j = 0; j < secondArr.length; j++) {
            let secondElement = secondArr[j];
            
            if (firstElement === secondElement) {
                console.log(firstElement);
            }
        }
    }
}
commonElements(['Hey', 'hello', 2, 4, 'Peter', 'e'],
    ['Petar', 10, 'hey', 4, 'hello', '2']
)