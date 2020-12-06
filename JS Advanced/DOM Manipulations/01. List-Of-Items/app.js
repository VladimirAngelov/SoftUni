function addItem() {
    let inputElement = document.getElementById('newItemText');
    let liElement = document.createElement('li');
    let ulElement = document.getElementById('items');

    liElement.innerHTML = inputElement.value;
    ulElement.appendChild(liElement);

    inputElement.value = '';
}