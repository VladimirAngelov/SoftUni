function solve(input) {

    let text = input.shift();
    let words = input.shift();
    let currentText = text.split(' ');

    words.forEach(word => {
        let current = '_'.repeat(word.length);
        // text = text.replace(current, word);

        for (const index in currentText) {
            if (currentText[index] === current) {
                currentText[index] = word;
            }
        }
    });
    console.log(currentText.join(' '));
}

solve(['Hi, grandma! I\'m so ____ to write to you. ______ the winter vacation, so _______ things happened. My dad bought me a sled. Mom started a new job as a __________. My brother\'s ankle is ________, and now it bothers me even more. Every night Mom cooks ___ on your recipe because it is the most delicious. I hope this year Santa will _____ me a robot.',
    ['pie', 'bring', 'glad', 'During', 'amazing', 'pharmacist', 'sprained']]
)