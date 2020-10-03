function solve(text) {
    let words = text.split(' ');

    let iterator = {
        next: function () {
            let isDone = words.length === 0;
            let currentWord = words.shift();

            return {
                value: currentWord,
                done: isDone
            }
        }
    }
    let nextElement = iterator.next();

     while (nextElement.done === false) {
         console.log(nextElement.value);

         nextElement = iterator.next();
     }
}
solve("Et cillum do voluptate cillum ut cupidatat aliqua.")