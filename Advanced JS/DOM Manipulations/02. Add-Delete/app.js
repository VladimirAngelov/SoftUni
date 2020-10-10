function addItem() {
    let inputElement = document.getElementById('newText').value;
    if (inputElement.length === 0) return;

    let liElement = document.createElement('li');
    let itemsListElement = document.getElementById('items');

    liElement.textContent = inputElement;

    let deleteElement = document.createElement('a');
    let linkText = document.createTextNode('[Delete]')
    deleteElement.appendChild(linkText);
    deleteElement.href = '#';

    deleteElement.addEventListener('click', (e) => {
        let parentElement = e.target.parentElement;

        parentElement.remove();
    })

    liElement.appendChild(deleteElement)
    itemsListElement.appendChild(liElement);
}