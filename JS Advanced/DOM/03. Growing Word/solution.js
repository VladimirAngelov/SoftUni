function growingWord() {

    let growingWorldElement = document.getElementById('exercise').lastElementChild;
    let colorElements = document.getElementById('colors');

    if (!growingWorldElement.style.fontSize) {
        growingWorldElement.style.fontSize = '2px';
    } else {
        growingWorldElement.style.fontSize = parseInt(growingWorldElement.style.fontSize) * 2 + 'px';
    }
    let firstColorElement = colorElements.firstElementChild;
    let color = firstColorElement.innerHTML.toLowerCase();

    growingWorldElement.style.color = color;

    colorElements.appendChild(firstColorElement);
}