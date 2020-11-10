const tBodyElement = document.querySelector('tbody');
const submitBtn = document.querySelector('form button');
const loadBtn = document.getElementById('loadBooks');
const baseUrl = `https://books-e3c95.firebaseio.com`;

const createElements = (...types) => types.map(type => document.createElement(type));
const append = (target, elements) => elements.map(el => target.appendChild(el));

const loadBooks = (e) => {
    e.preventDefault();
    fetch(`${baseUrl}/Books.json`)
        .then(res => res.json())
        .then(data => {
            if (tBodyElement.innerHTML !== '') {
                tBodyElement.innerHTML = '';
            }
            Object.keys(data).map(key => {
                const elementTypes = createElements('tr', 'td', 'td', 'td', 'td', 'button', 'button');

                const [trEl, titleEl, authorEl, isbnEl, tdBtn, editBtn, deleteBtn] = elementTypes;

                deleteBtn.textContent = 'Delete';
                editBtn.textContent = 'Edit';

                titleEl.textContent = `${data[key].title}`;
                authorEl.textContent = `${data[key].author}`;
                isbnEl.textContent = `${data[key].isbn}`;

                tdBtn.appendChild(editBtn)
                tdBtn.appendChild(deleteBtn)

                append(trEl, [titleEl, authorEl, isbnEl, tdBtn]);

                tBodyElement.appendChild(trEl);

                deleteBtn.addEventListener('click', () => {
                    fetch(`${baseUrl}/Books/${key}.json`, {method: 'DELETE'})
                })

                editBtn.addEventListener('click', () => {
                    document.getElementById('edit').style.display = 'block';

                    const editSubmitBtn = document.getElementById('edit-submit');

                    const editTitleInput = document.getElementById('edit-title');
                    const editAuthorInput = document.getElementById('edit-author');
                    const editIsbnInput = document.getElementById('edit-isbn');

                    editTitleInput.value = data[key].title;
                    editAuthorInput.value = data[key].author;
                    editIsbnInput.value = data[key].isbn;

                    editSubmitBtn.addEventListener('click', (e) => {
                        e.preventDefault();

                        if (editTitleInput.value === ''
                            || editAuthorInput.value === ''
                            || editIsbnInput.value === '') {
                            return;
                        }

                        const newTitle = editTitleInput.value;
                        const newAuthor = editAuthorInput.value;
                        const newIsbn = editIsbnInput.value;

                        const obj = {
                            title: newTitle,
                            author: newAuthor,
                            isbn: newIsbn
                        }

                        fetch(`${baseUrl}/Books/${key}.json`, {
                            method: 'PATCH',
                            body: JSON.stringify(obj)
                        })
                        editTitleInput.value = ''; editAuthorInput.value = ''; editIsbnInput.value = '';
                    })
                })
            })
        });
}
loadBtn.addEventListener('click', loadBooks);

const createBook = (e) => {
    e.preventDefault()

    const titleInput = document.getElementById('title');
    const authorInput = document.getElementById('author');
    const isbnInput = document.getElementById('isbn');

    if (titleInput.value === ''
        || authorInput.value === ''
        || isbnInput.value === '') {
        return;
    }

    const obj = {
        title: titleInput.value,
        author: authorInput.value,
        isbn: isbnInput.value
    }

    fetch(`${baseUrl}/Books.json`, {
        method: 'POST',
        body: JSON.stringify(obj)
    })

    titleInput.value = ''; authorInput.value = ''; isbnInput.value = '';
}
submitBtn.addEventListener('click', createBook);