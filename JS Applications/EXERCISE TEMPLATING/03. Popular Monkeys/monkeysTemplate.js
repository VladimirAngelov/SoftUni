import monkeys from './monkeys.js';

const divToAppend = document.querySelector('.monkeys');

fetch('./monkey.hbs')
    .then((res) => res.text())
    .then((template) => {
        const monkeyTemplate = Handlebars.compile(template);

        const monkeyHtml = monkeyTemplate({monkeys})

        divToAppend.innerHTML = monkeyHtml;

        divToAppend.addEventListener('click', e => {
            const info = e.target.parentElement.lastElementChild;

            if ( e.target.textContent === 'Info') {
                if (info.style.display === 'block') {
                    info.style.display = 'none';
                } else {
                    info.style.display = 'block'
                }
            } else {
                return;
            }
        })
    }).catch(err => console.error(err));