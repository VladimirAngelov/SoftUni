function solve() {
    let ulElement = document.getElementById('dropdown-ul');
    let box = document.getElementById('box');

    document.getElementById('dropdown').addEventListener('click', () => {
        if (ulElement.style.display !== 'block') {
            ulElement.style.display = 'block';
        } else {
            box.style.backgroundColor = 'black';
            box.style.color = 'white';
            ulElement.style.display = 'none';
        }
    });

    [...ulElement.querySelectorAll('li')].forEach(li => {
        li.addEventListener('click', () => {
            box.style.backgroundColor = li.textContent;
            box.style.color = 'black';
        })
    })
}