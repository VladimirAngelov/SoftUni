document.getElementById('btnLoadTowns')
    .addEventListener('click', e => {
        e.preventDefault();

        const input = document.getElementById('towns');

        const towns = input.value.split(', ').map((t) => {
            return {name: t}
        });

        const isEmpty = towns.find(x => x.name === '');

        if (isEmpty) {
            towns[0].name = 'No towns.';
        }

        const divToAppend = document.getElementById('root');

        const townView = document.getElementById('template').innerHTML;

        const townTemplate = Handlebars.compile(townView);

        const townsHtml = townTemplate({towns});

        divToAppend.innerHTML = townsHtml;
    })
