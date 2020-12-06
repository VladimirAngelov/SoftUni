function solve() {
    let text = document.getElementById('input').innerText;
    let output = document.getElementById('output');

    let sentences = text.split('.');

    while (sentences.length > 0) {
        let currentParagraph = sentences.splice(0, 3).join('.') + '.';

        let paragraphElement = document.createElement('p');
        paragraphElement.innerText = currentParagraph;

        output.appendChild(paragraphElement);
    }
}