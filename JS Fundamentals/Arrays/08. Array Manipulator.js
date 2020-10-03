function arrayManipulator(firstArr, secondArr) {

    let workArr = firstArr.slice();
    let sum = [];

    for (let i = 0; i < secondArr.length; i++) {
        let [command, firstNum, secondNum] = secondArr[i].split(' ');

        let addNums = secondArr[0].split(' ').splice(2, 5).join(', ');

        firstNum = Number(firstNum);
        secondNum = Number(secondNum);
        switch (command) {
            case 'add':
                workArr.splice(firstNum, 0, secondNum);
                break;
            case 'addMany':
                workArr.splice(firstNum, 0, addNums)
                break;
            case 'contains':
                for (const index in workArr) {
                    let currentEl = workArr[index];
                    if (currentEl === firstNum) {
                        console.log(index);
                        break;
                    } else {
                        console.log(-1);
                        break;
                    }
                }
                break;
            case 'remove':
                workArr.splice(firstNum, 1);
                break;
            case 'shift':
                let current = [];
                current = workArr.splice(0, firstNum);
                workArr.push(current)
                break;
            case 'sumPairs':
                for(let i = 0; i < workArr.length; i += 2) {
                    sum.push(workArr[i] + (workArr[i + 1] || 0));
                }
                workArr = sum;
                break;
            case 'print':
                console.log(`[ ${workArr.join(', ')} ]`);
                break;
        }
    }
}
arrayManipulator([1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2],
    ["sumPairs", "sumPairs", "addMany 0 -1 -2 -3", "print"]
)