function solve() {

    let buttons = document.getElementsByClassName('keys')[0];
    let input = document.getElementById('expressionOutput');
    let output = document.getElementById('resultOutput');
    let result = 0;
    Array.from(buttons.querySelectorAll('button')).forEach(b => {
        b.addEventListener('click', () => {
            if (b.value !== '=') {
                if (input.innerText === '') {
                    input.textContent = b.value;
                } else {
                    if (!b.value.match(/[\d.]/)) {
                        input.textContent += ` ${b.value} `;
                    } else {
                        if (b.value === '.') {
                            input.textContent += '.';
                        } else {
                            input.textContent += `${b.value}`;
                        }
                    }
                }
            } else {
                let symbol = input.innerText.split(/[ \d.]+/)[1];
                let numbers = input.innerText.split(/[^\d.]+/);

                if (numbers.length === 2 && !numbers.includes('')) {
                    numbers.map(Number);
                    if (symbol === '/') {
                        result = numbers[0] / numbers[1];
                    } else if (symbol === '*') {
                        result = numbers[0] * numbers[1];
                    } else if (symbol === '+') {
                        result = Number(numbers[0]) + Number(numbers[1]);
                    } else if (symbol === '-') {
                        result = numbers[0] - numbers[1];
                    }
                    output.textContent = result;
                    console.log(numbers[0], numbers[1], result);
                } else {
                    output.textContent = 'NaN';
                }
            }
        })
    })
    document.getElementsByTagName('button')[0].addEventListener('click', () => {
        input.textContent = '';
        output.textContent = '';
    })
}