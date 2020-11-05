function attachEvents() {
    const phoneBook = document.getElementById('phonebook');
    const url = 'https://phonebook-nakov.firebaseio.com/phonebook.json';
    const loadBtn = document.getElementById('btnLoad');
    const createBtn = document.getElementById('btnCreate');

    loadBtn.addEventListener('click', () => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                console.log(Object.keys(data))
                Object.keys(data).map(key => {
                    const listEl = document.createElement('li');
                    listEl.textContent = `${data[key].person}: ${data[key].phone}`;
                    const deleteUrl = `https://phonebook-nakov.firebaseio.com/phonebook/${key}.json `
                    const deleteBtn = document.createElement('button');
                    deleteBtn.textContent = 'Delete';

                    deleteBtn.addEventListener('click', () => {
                        fetch(deleteUrl, {method: "DELETE"})
                    })

                    listEl.appendChild(deleteBtn);
                    phoneBook.appendChild(listEl);
                })
            })
    })

    createBtn.addEventListener('click', () => {
        const person = document.getElementById('person');
        const phone = document.getElementById('phone');

        fetch(url, {
            method: "POST",
            body: JSON.stringify({person: person.value, phone: phone.value})
        })
    })
}

attachEvents();