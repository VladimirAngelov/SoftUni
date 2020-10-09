function solve() {
    let menu = document.getElementById('selectMenuTo')
    let binary = document.createElement('option')
    let hexadecimal = document.createElement('option');
    let input = document.getElementById('input')
    let result = document.getElementById('result');
    let btn = document.getElementById('container').lastElementChild;

    binary.setAttribute('value', 'binary')
    menu.appendChild(binary).textContent = 'Binary';
    hexadecimal.setAttribute('value', 'hexadecimal')
    menu.appendChild(hexadecimal).textContent = 'Hexadecimal';

    btn.addEventListener('click', () => {

        if (menu.value === 'binary') {
            result.value = Number(input.value).toString(2);
        } else if (menu.value === 'hexadecimal') {
            result.value = Number(input.value).toString(16).toUpperCase()
        }
    })
}